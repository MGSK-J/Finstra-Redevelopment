const { spawn } = require('child_process');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m'
};

// Function to create a formatted timestamp
function getTimestamp() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
}

// Function to log messages with timestamps and colors
function log(message, color = colors.reset) {
  console.log(`${colors.bright}[${getTimestamp()}]${colors.reset} ${color}${message}${colors.reset}`);
}

// Start the React development server
log('Starting React development server...', colors.cyan);
const reactProcess = spawn('npm', ['start'], {
  shell: true,
  stdio: 'pipe'
});

// Start the backend server
log('Starting backend server...', colors.yellow);
const serverProcess = spawn('node', ['server/index.js'], {
  shell: true,
  stdio: 'pipe'
});

// Handle React server output
reactProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line.trim()) {
      log(`[Frontend] ${line}`, colors.cyan);
    }
  });
});

reactProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line.trim() && !line.includes('Compiled successfully')) {
      log(`[Frontend] ${line}`, colors.red);
    }
  });
});

// Handle backend server output
serverProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line.trim()) {
      log(`[Backend] ${line}`, colors.yellow);
    }
  });
});

serverProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line.trim()) {
      log(`[Backend] ${line}`, colors.red);
    }
  });
});

// Handle process termination
function cleanup() {
  log('Shutting down servers...', colors.magenta);
  
  if (reactProcess) {
    reactProcess.kill();
  }
  
  if (serverProcess) {
    serverProcess.kill();
  }
}

// Handle termination signals
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

log('Development environment is running!', colors.green);
log(`Frontend: ${colors.bright}http://localhost:3000${colors.reset}`, colors.green);
log(`Backend: ${colors.bright}http://localhost:5000${colors.reset}`, colors.green);