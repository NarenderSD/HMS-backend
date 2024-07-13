// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
