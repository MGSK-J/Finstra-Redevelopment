const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

console.log(`${colors.bright}${colors.cyan}=== Finastra Banking Forum Website Setup ===${colors.reset}\n`);

try {
  // Create necessary directories if they don't exist
  console.log(`${colors.yellow}Creating necessary directories...${colors.reset}`);
  
  const directories = [
    './src/components',
    './src/pages',
    './public',
    './server'
  ];
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
  
  // Install frontend dependencies
  console.log(`\n${colors.yellow}Installing frontend dependencies...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });
  
  // Install backend dependencies
  console.log(`\n${colors.yellow}Installing backend dependencies...${colors.reset}`);
  process.chdir('./server');
  
  // Create package.json if it doesn't exist in server directory
  if (!fs.existsSync('./package.json')) {
    console.log('Creating server package.json...');
    fs.writeFileSync('./package.json', JSON.stringify({
      "name": "finastra-banking-forum-server",
      "version": "1.0.0",
      "main": "index.js",
      "dependencies": {
        "cors": "^2.8.5",
        "express": "^4.18.2",
        "sqlite3": "^5.1.6"
      }
    }, null, 2));
  }
  
  execSync('npm install', { stdio: 'inherit' });
  process.chdir('..');
  
  // Initialize Tailwind CSS
  console.log(`\n${colors.yellow}Initializing Tailwind CSS...${colors.reset}`);
  execSync('npx tailwindcss init', { stdio: 'inherit' });
  
  console.log(`\n${colors.bright}${colors.green}Setup completed successfully!${colors.reset}`);
  console.log(`\nTo start the development server, run: ${colors.cyan}npm run dev${colors.reset}`);
  console.log(`This will start both the frontend and backend servers.`);
  
} catch (error) {
  console.error(`\n${colors.red}Error during setup:${colors.reset}`, error.message);
  process.exit(1);
}