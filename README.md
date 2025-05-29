# Personal Website - Express + React

A modern personal website built with Express.js backend and React frontend, featuring a responsive design and interactive components.

## 🚀 Tech Stack

- **Backend**: Express.js
- **Frontend**: React with React Router
- **Build Tool**: Webpack
- **Styling**: CSS with custom animations
- **Animation**: Framer Motion
- **Deployment**: Vercel

## 📁 Project Structure

```
personal-website-express/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main React app
│   └── public/            # Static assets
├── server/
│   └── simple-server.js   # Express server
├── build/                 # Webpack build output
└── webpack.config.js      # Webpack configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Chaseway132/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
cd personal-website-express
npm install
```

### Development

Run the development server with hot reloading:

```bash
npm run dev
```

This will start:
- Express server on `http://localhost:3000`
- Webpack dev server with hot reloading

### Production Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run clean` - Clean build directory

## 🌐 Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. The build process will run automatically

## 🎨 Features

- Responsive design
- Interactive animations with Framer Motion
- Single Page Application (SPA) with React Router
- Express.js API endpoints
- Optimized production builds with Webpack

## 📝 License

This project is licensed under the ISC License.
