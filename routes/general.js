const express = require("express");
const router = express.Router();
const { books } = require("../final_project/router/data.js"); // Use shared data module

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found." });
});

router.get("/author/:author", (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.json(result);
});

router.get("/title/:title", (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.json(result);
});

router.get("/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (book) res.json(book.reviews);
  else res.status(404).json({ message: "Book not found." });
});

router.post("/", (req, res) => {
  const { isbn, title, author } = req.body;
  if (!isbn || !title || !author) {
    return res.status(400).json({ message: "ISBN, title, and author are required." });
  }
  if (books[isbn]) {
    return res.status(400).json({ message: "Book with this ISBN already exists." });
  }
  books[isbn] = { title, author, reviews: {} };
  res.status(201).json({ message: "Book added successfully.", book: books[isbn] });
});

module.exports = router;