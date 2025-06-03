const express = require("express");
const bodyParser = require("body-parser");

const generalRoutes = require("./routes/general");
const authRoutes = require("./routes/authenticated");

const { users, books } = require("./final_project/router/data.js"); // Use shared data module

const app = express();
app.use(bodyParser.json());

app.use("/books", generalRoutes);
app.use("/auth", authRoutes);
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists." });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully." });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

module.exports = { users, books };