const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Task 10: Get all books (async/await)
async function getAllBooks() {
  const res = await axios.get('${BASE_URL}/books');
  console.log("All Books:", res.data);
}

// Task 11: Get by ISBN (Promise)
function getByISBN(isbn) {
  axios.get('${BASE_URL}/books/${isbn}').then(res => {
    console.log("By ISBN:", res.data);
  });
}

// Task 12: Get by Author
function getByAuthor(author) {
  axios.get('${BASE_URL}/books/author/${author}').then(res => {
    console.log("By Author:", res.data);
  });
}

// Task 13: Get by Title
function getByTitle(title) {
  axios.get('${BASE_URL}/books/title/${title}').then(res => {
    console.log("By Title:", res.data);
  });
}

// Call the functions
getAllBooks();
getByISBN("1234");
getByAuthor("George Orwell");
getByTitle("1984");