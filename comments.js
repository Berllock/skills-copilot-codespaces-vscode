// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database
let comments = [
  {
    id: 1,
    message: 'Hello World'
  },
  {
    id: 2,
    message: 'Hello World 2'
  }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Create a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newComment = req.body;
  comments = comments.map(comment => {
    if (comment.id === id) {
      return newComment;
    }
    return comment;
  });
  res.json(newComment);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.json({ id });
});

// Start web server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});