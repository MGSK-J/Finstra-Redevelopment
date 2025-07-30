# Finastra's Universal Banking Forum Website

A responsive website for Finastra's Universal Banking Forum event, featuring event information, agenda, and a registration system. Built with React, TailwindCSS, and Express with SQLite for data storage.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Registration form with data validation
- Backend API for storing registration data in SQLite database
- Event agenda and details

## Tech Stack

### Frontend
- React
- TailwindCSS for styling
- React Router for navigation
- Framer Motion for animations
- React Hook Form for form validation
- Axios for API requests

### Backend
- Express.js
- SQLite for data storage
- CORS for cross-origin requests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/finastra-banking-forum.git
   cd finastra-banking-forum
   ```

2. Install frontend dependencies
   ```
   npm install
   ```

3. Install backend dependencies
   ```
   cd server
   npm install
   cd ..
   ```

### Running the Application

1. Start both frontend and backend concurrently
   ```
   npm run dev
   ```

   This will start:
   - Frontend on http://localhost:3000
   - Backend on http://localhost:5000

2. Alternatively, you can run them separately:

   Frontend:
   ```
   npm start
   ```

   Backend:
   ```
   npm run server
   ```

## Project Structure

```
├── public/                 # Static files
├── server/                 # Backend server
│   ├── index.js            # Express server setup
│   └── registrations.db    # SQLite database (created on first run)
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   ├── App.js              # Main app component with routing
│   ├── index.js            # Entry point
│   └── index.css           # Global styles and Tailwind imports
├── package.json            # Frontend dependencies and scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

## Deployment

### Frontend

Build the React application for production:

```
npm run build
```

This creates a `build` folder with optimized production files that can be deployed to services like Netlify, Vercel, or any static hosting.

### Backend

The backend can be deployed to services like Heroku, Railway, or any Node.js hosting platform.

Make sure to update the API URL in the frontend code if you deploy the backend to a different domain.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)