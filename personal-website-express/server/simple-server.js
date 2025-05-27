const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Serve static files
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/build')));

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
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
