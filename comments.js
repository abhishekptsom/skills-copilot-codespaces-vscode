// Create web server
const express = require('express');
const app = express();

// Import the comments.json file
const comments = require('./comments.json');

// Create a GET route that returns a list of comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a GET route that returns a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  res.json(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Server listening on port 4001');
});