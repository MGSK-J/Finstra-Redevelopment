const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database(path.join(__dirname, 'registrations.db'), (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create registrations table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      jobTitle TEXT,
      company TEXT,
      mobileNumber TEXT,
      email TEXT NOT NULL UNIQUE,
      companyWebsite TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Error creating table', err.message);
      } else {
        console.log('Registrations table ready');
      }
    });
  }
});

// API Routes
app.post('/api/register', (req, res) => {
  const { firstName, lastName, jobTitle, company, mobileNumber, email, companyWebsite } = req.body;
  
  // Validate required fields
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'First name, last name, and email are required' });
  }

  const sql = `INSERT INTO registrations 
    (firstName, lastName, jobTitle, company, mobileNumber, email, companyWebsite) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
  db.run(sql, [firstName, lastName, jobTitle, company, mobileNumber, email, companyWebsite], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({ error: 'Email already registered' });
      }
      console.error('Error registering user', err.message);
      return res.status(500).json({ error: 'Failed to register' });
    }
    
    res.status(201).json({ 
      message: 'Registration successful', 
      registrationId: this.lastID 
    });
  });
});

// Get all registrations (admin endpoint - would need authentication in production)
app.get('/api/registrations', (req, res) => {
  db.all('SELECT * FROM registrations ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching registrations', err.message);
      return res.status(500).json({ error: 'Failed to fetch registrations' });
    }
    res.json(rows);
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Close database connection on process exit
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database', err.message);
    } else {
      console.log('Database connection closed');
    }
    process.exit(0);
  });
});