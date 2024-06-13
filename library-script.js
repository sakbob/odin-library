const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBook(book) {
    myLibrary.push(book);
    addToDOM();
}

function removeBook() {
    myLibrary.pop();
    removeFromDOM();
}

const bookContainer = document.querySelector(".book-container");
const addButton = document.querySelector(".button-add");
const delButton = document.querySelector(".button-remove");
const dialog = document.querySelector("#book-dialog");
const cancelDialog = document.querySelector(".button-cancel");
const form = document.querySelector("form");
const readButton = document.querySelectorAll(".button-read");

function addToDOM() { 
    const book = myLibrary[myLibrary.length - 1];
    const htmlBook = document.createElement("div");
    htmlBook.classList.add("book");

    const title = document.createElement("h6");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const hasRead = document.createElement("button");

    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    hasRead.classList.add("button-read");

    hasRead.type = "button";

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    if (book.hasRead) {
        hasRead.style.backgroundColor = "green";
    }

    hasRead.addEventListener("click", () => {
        if (hasRead.style.backgroundColor === "green") {
            hasRead.style.backgroundColor = "rgb(255, 53, 53)";
        }
        else {
            hasRead.style.backgroundColor = "green";
        }
    });

    htmlBook.appendChild(title);
    htmlBook.appendChild(author);
    htmlBook.appendChild(pages);
    htmlBook.appendChild(hasRead);

    bookContainer.appendChild(htmlBook);
};

function removeFromDOM() {
    bookContainer.removeChild(bookContainer.lastChild);
}

addButton.addEventListener("click", () => {
    dialog.show();
});

form.addEventListener("submit", () => {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let hasRead = document.getElementById("has-read").checked;

    const book = new Book(title, author, pages, hasRead);
    addBook(book);

    form.reset();
    dialog.close();
});

cancelDialog.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

delButton.addEventListener("click", () => {
    if (bookContainer.hasChildNodes()) {
        removeBook();
    }
});

const defaultBook = new Book("Title", "Author", "Pages", false);
addBook(defaultBook);