const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBook(book) {
    myLibrary.concat(book);
}

const bookContainer = document.querySelector(".book-container");
const addButton = document.querySelector(".button-add");
const delButton = document.querySelector(".button-remove");
const dialog = document.querySelector("#book-dialog");
const cancelDialog = document.querySelector(".button-cancel");
const form = document.querySelector("form");

myLibrary.forEach(book => {
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

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    if (hasRead === true) {
        hasRead.style.backgroundColor = "green";
    }

});

addButton.addEventListener("click", () => {
    dialog.show();
});

form.addEventListener("submit", () => {
    event.preventDefault();

    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let pages = document.getElementById("pages");
    let hasRead = document.getElementById("has-read");
    
    dialog.close();
});

cancelDialog.addEventListener("click", () => {
    form.reset();
    dialog.close();
});