const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable detailed error logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something broke!');
});

// Check if public directory exists
const publicPath = path.join(__dirname, 'public');
console.log('Public directory path:', publicPath);
if (!fs.existsSync(publicPath)) {
  console.error('Public directory does not exist:', publicPath);
  fs.mkdirSync(publicPath, { recursive: true });
}

// List files in the public directory
try {
  const files = fs.readdirSync(publicPath);
  console.log('Files in public directory:', files);
} catch (error) {
  console.error('Error reading public directory:', error);
}

// Check if index.html exists
const indexPath = path.join(publicPath, 'index.html');
console.log('Index.html path:', indexPath);
if (!fs.existsSync(indexPath)) {
  console.error('index.html does not exist:', indexPath);
  // Create a simple index.html file if it doesn't exist
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Express Server</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #333; }
  </style>
</head>
<body>
  <h1>Hello from Express!</h1>
  <p>This is a simple Express server.</p>
  <button id="fetchButton">Fetch Data from API</button>
  <div id="message" style="margin-top: 20px;"></div>

  <script>
    document.getElementById('fetchButton').addEventListener('click', async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        document.getElementById('message').textContent = data.message;
      } catch (error) {
        console.error('Error:', error);
      }
    });
  </script>
</body>
</html>
  `;
  fs.writeFileSync(indexPath, html);
  console.log('Created a simple index.html file');
}

// Serve static files
app.use(express.static(publicPath));

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  console.log(`Serving index.html for route: ${req.url}`);
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
