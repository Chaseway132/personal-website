# Personal Portfolio Website with Express and React

A personal portfolio website built with Express.js and React, showcasing projects, skills, and achievements.

## Features

- Responsive design with Tailwind CSS
- Server-side rendering with Express.js
- Client-side navigation with React Router
- Project showcase with detailed project pages
- About and Contact pages

## Project Structure

```
personal-website-express/
├── client/                  # React frontend
│   ├── public/              # Static assets
│   │   ├── images/          # Image files
│   │   └── index.html       # HTML template
│   └── src/                 # React components
│       ├── components/      # Reusable components
│       ├── pages/           # Page components
│       ├── App.js           # Main React component
│       └── index.js         # React entry point
├── server/                  # Express backend
│   └── server.js            # Express server
├── package.json             # Project dependencies
└── webpack.config.js        # Webpack configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-website-express
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Development

1. Start the development server:
   ```
   npm run dev
   ```

   This will start both the Express server and the React development server concurrently.

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Building for Production

1. Build the React application:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

## Scripts

- `npm run dev`: Start development server (Express + React)
- `npm run server`: Start Express server with nodemon
- `npm run client`: Start React development server with webpack
- `npm run build`: Build React application for production
- `npm start`: Start production server

## Technologies Used

- **Backend**:
  - Express.js - Web server framework
  - Node.js - JavaScript runtime

- **Frontend**:
  - React - UI library
  - React Router - Client-side routing
  - Tailwind CSS - Utility-first CSS framework

- **Build Tools**:
  - Webpack - Module bundler
  - Babel - JavaScript compiler

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Peter Mwangi
