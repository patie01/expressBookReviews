// Shared data module for users and books

let users = [];

let books = {
    "1234": {
        title: "1984",
        author: "George Orwell",
        reviews: {}
    },
    "5678": {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        reviews: {}
    },
    1: { author: "Chinua Achebe", title: "Things Fall Apart", reviews: { asif: "hi this is a review" } },
    2: { author: "Hans Christian Andersen", title: "Fairy tales", reviews: {} },
    3: { author: "Dante Alighieri", title: "The Divine Comedy", reviews: {} },
    4: { author: "Unknown", title: "The Epic Of Gilgamesh", reviews: {} },
    5: { author: "Unknown", title: "The Book Of Job", reviews: {} },
    6: { author: "Unknown", title: "One Thousand and One Nights", reviews: {} },
    7: { author: "Unknown", title: "Njáls Saga", reviews: {} },
    8: { author: "Jane Austen", title: "Pride and Prejudice", reviews: {} },
    9: { author: "Honoré de Balzac", title: "Le Père Goriot", reviews: {} },
    10: { author: "Samuel Beckett", title: "Molloy, Malone Dies, The Unnamable, the trilogy", reviews: {} }
};

module.exports = { users, books };
