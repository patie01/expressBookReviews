const express = require("express");
const router = express.Router();
const { users, books } = require("../index");

function isAuthenticated(req, res, next) {
  const { username } = req.body;
  if (!users.find(u => u.username === username)) {
    return res.status(403).json({ message: "User not authenticated" });
  }
  next();
}

router.put("/review/:isbn", isAuthenticated, (req, res) => {
  const { username, review } = req.body;
  const book = books[req.params.isbn];
  if (book) {
    book.reviews[username] = review;
    res.json({ message: "Review added/updated." });
  } else {
    res.status(404).json({ message: "Book not found." });
  }
});

router.delete("/review/:isbn", isAuthenticated, (req, res) => {
  const { username } = req.body;
  const book = books[req.params.isbn];
  if (book && book.reviews[username]) {
    delete book.reviews[username];
    res.json({ message: "Review deleted." });
  } else {
    res.status(404).json({ message: "Review not found." });
  }
});

module.exports = router;