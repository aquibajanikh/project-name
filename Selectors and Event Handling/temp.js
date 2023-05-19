// Retrieve stored books from local storage if available, or initialize an empty array
let books = JSON.parse(localStorage.getItem("books")) || [];

// Function to save books to local storage
function saveBooksToStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Function to render the book list
function renderBookList() {
  const bookList = document.getElementById("book-list");
  const searchInput = document.getElementById("search-input");

  // Clear the current list
  bookList.innerHTML = "";

  // Filter books based on the search term
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );

  // Render the filtered books
  filteredBooks.forEach((book, index) => {
    const li = document.createElement("li");
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${book.author}`;
    const bookRating = document.createElement("p");
    bookRating.textContent = `Rating: ${book.rating}`;
    const bookActions = document.createElement("div");
    bookActions.classList.add("book-actions");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeBook(index));
    const reviewInput = document.createElement("input");
    reviewInput.classList.add("review-input");
    reviewInput.setAttribute("type", "text");
    reviewInput.setAttribute("placeholder", "Add a review");
    const addReviewButton = document.createElement("button");
    addReviewButton.classList.add("add-review-button");
    addReviewButton.textContent = "Add Review";
    addReviewButton.addEventListener("click", () => addReview(index));

    bookActions.appendChild(removeButton);
    bookActions.appendChild(reviewInput);
    bookActions.appendChild(addReviewButton);

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookRating);
    bookCard.appendChild(bookActions);

    li.appendChild(bookCard);
    bookList.appendChild(li);
  });
}

// Function to add a book
function addBook(book) {
  books.push(book);
  saveBooksToStorage();
  renderBookList();
}

// Function to remove a book
function removeBook(index) {
  books.splice(index, 1);
  saveBooksToStorage();
  renderBookList();
}

// Function to add a review
function addReview(index) {
  const reviewInput = document.getElementsByClassName("review-input")[index];
  const review = reviewInput.value;
  books[index].reviews = books[index].reviews || [];
  books[index].reviews.push(review);
  saveBooksToStorage();
  renderBookList();
}

// Event listener for the Add Book form submission
const addBookForm = document.getElementById("add-book-form");
addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const rating = document.getElementById("book-rating").value;

  // Initialize an empty reviews array for the new book
  const book = {
    title: title,
    author: author,
    rating: rating,
    reviews: [],
  };

  addBook(book);

  // Reset the form fields
  addBookForm.reset();
});

// Call the renderBookList function
