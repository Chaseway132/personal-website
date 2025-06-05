const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

console.log('Environment PORT:', process.env.PORT);
console.log('Environment HOST:', process.env.HOST);
console.log('Using PORT:', PORT);
console.log('Using HOST:', HOST);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../client/public/images');
    // Create the directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // Keep the original filename
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    // Accept only image files
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Remove any restrictive CSP headers for now
app.use((req, res, next) => {
  // Allow unsafe-eval for development/debugging
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https:; img-src 'self' data: https:; font-src 'self' data: https:;");
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../build')));

// Serve bundle.js specifically
app.get('/bundle*.js', (req, res) => {
  const filePath = path.join(__dirname, '../build', req.path);
  console.log('Serving JS file:', filePath);
  res.sendFile(filePath);
});

// Add debugging
console.log('Static file paths:');
console.log('Public path:', path.join(__dirname, '../client/public'));
console.log('Build path:', path.join(__dirname, '../build'));
console.log('Index.html path:', path.join(__dirname, '../build/index.html'));

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!', timestamp: new Date().toISOString() });
});

// Debug route to check build files
app.get('/debug', (req, res) => {
  const fs = require('fs');
  const buildPath = path.join(__dirname, '../build');
  try {
    const files = fs.readdirSync(buildPath);
    res.json({
      message: 'Build directory contents',
      buildPath: buildPath,
      files: files,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.json({
      error: 'Could not read build directory',
      buildPath: buildPath,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Debug route to check index.html content
app.get('/debug-html', (req, res) => {
  const fs = require('fs');
  const indexPath = path.join(__dirname, '../build/index.html');
  try {
    const htmlContent = fs.readFileSync(indexPath, 'utf8');
    res.send(`<pre>${htmlContent}</pre>`);
  } catch (error) {
    res.send(`Error reading index.html: ${error.message}`);
  }
});

// Simple HTML test route
app.get('/simple', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Simple Test</title></head>
    <body>
      <h1>Server is working!</h1>
      <p>If you can see this, the server is responding correctly.</p>
      <p>Time: ${new Date().toISOString()}</p>
    </body>
    </html>
  `);
});

// API routes for projects
app.get('/api/projects', (req, res) => {
  // Return projects data
  res.json([
    {
      id: "charity-dao-platform",
      title: "Building Trustworthy Charity Platforms in Kenya: A Decentralised Approach with DAO",
      description: "A blockchain-based decentralized autonomous organization (DAO) platform designed to enhance transparency, accountability, and trust in charitable organizations operating in Kenya.",
      image: "/images/daoimage.png",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Express", "JavaScript", "TypeScript", "Solidity", "Web3.js", "IPFS"],
      detailedDescription: "This dissertation project addresses the critical challenge of trust in charitable organizations in Kenya by leveraging blockchain technology and decentralized autonomous organization (DAO) principles."
    },
    {
      id: "electronic-voting",
      title: "Electronic Voting Innovation Project",
      description: "A secure and transparent voting system utilizing blockchain technology to ensure integrity and immutability of voting data, eliminating the possibility of tampering or fraud.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Web3", "Truffle", "Ganache", "JavaScript", "MetaMask", "NodeJS", "Ethereum"],
      detailedDescription: "The Electronic Voting Innovation Project was developed to address the challenges of traditional voting systems, including security concerns, lack of transparency, and inefficiency."
    }
  ]);
});

// API route for a specific project
app.get('/api/projects/:id', (req, res) => {
  const projects = [
    {
      id: "charity-dao-platform",
      title: "Building Trustworthy Charity Platforms in Kenya: A Decentralised Approach with DAO",
      description: "A blockchain-based decentralized autonomous organization (DAO) platform designed to enhance transparency, accountability, and trust in charitable organizations operating in Kenya.",
      image: "/images/daoimage.png",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Express", "JavaScript", "TypeScript", "Solidity", "Web3.js", "IPFS"],
      detailedDescription: "This dissertation project addresses the critical challenge of trust in charitable organizations in Kenya by leveraging blockchain technology and decentralized autonomous organization (DAO) principles."
    },
    {
      id: "electronic-voting",
      title: "Electronic Voting Innovation Project",
      description: "A secure and transparent voting system utilizing blockchain technology to ensure integrity and immutability of voting data, eliminating the possibility of tampering or fraud.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Web3", "Truffle", "Ganache", "JavaScript", "MetaMask", "NodeJS", "Ethereum"],
      detailedDescription: "The Electronic Voting Innovation Project was developed to address the challenges of traditional voting systems, including security concerns, lack of transparency, and inefficiency."
    }
  ];

  const project = projects.find(p => p.id === req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json(project);
});

// File upload route
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // File uploaded successfully
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Upload Successful</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div class="text-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <h1 class="text-2xl font-bold text-gray-800 mt-4">Upload Successful!</h1>
          </div>

          <div class="mb-6">
            <p class="text-gray-600 text-center">Your image <span class="font-semibold">${req.file.originalname}</span> has been uploaded successfully.</p>
          </div>

          <div class="mb-6">
            <div class="bg-gray-200 rounded-lg p-4 flex items-center justify-center">
              <img src="/images/${req.file.originalname}" alt="Uploaded image" class="max-h-48 max-w-full">
            </div>
          </div>

          <div class="flex space-x-4">
            <a href="/upload.html" class="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center">
              Upload Another
            </a>
            <a href="/" class="w-1/2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center">
              Go to Home
            </a>
          </div>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file: ' + error.message);
  }
});

// Serve upload.html for the upload route
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/upload.html'));
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  console.log('Catch-all route for path:', req.path);
  const indexPath = path.join(__dirname, '../build/index.html');
  console.log('Trying to serve index.html from:', indexPath);

  // Check if file exists
  const fs = require('fs');
  if (fs.existsSync(indexPath)) {
    console.log('index.html exists, serving it');
    res.sendFile(indexPath);
  } else {
    console.log('index.html NOT FOUND at:', indexPath);
    res.status(404).send(`
      <h1>Error: index.html not found</h1>
      <p>Looking for file at: ${indexPath}</p>
      <p>Current working directory: ${process.cwd()}</p>
      <p><a href="/debug">Check build files</a></p>
      <p><a href="/test">Test server</a></p>
    `);
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Railway URL should be accessible now`);
});
