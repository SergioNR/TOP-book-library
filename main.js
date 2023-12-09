// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have hasBeenRead the book.

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not hasBeenRead yet"
let bookLibrary = [
  { title: `LOTR1`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true },
  { title: `LOTR2`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true },
  { title: `LOTR3`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true },
  { title: `LOTR4`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true },
];

function Book(title, author, numberOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = parseInt(numberOfPages);
  this.hasBeenRead = hasBeenRead; //! always showing "on" - should say return or false
}

const addBookToLibrary = (Book) => {
  bookLibrary.push(Book);
  displayBookLibrary(bookLibrary);
};

const clearBookLibrary = () => {
  libraryContainer.innerHTML = ``;
};

// Write a function that loops through the array
// and displays each book on the page.
// You can display them in some sort of table
// or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const container = document.querySelector(`.container`);

const libraryContainer = document.querySelector(`.libraryContainer`);

const displayBookLibrary = (bookLibrary) => {
  clearBookLibrary();
  for (let i = 0; i < bookLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add(`bookCard`);
    libraryContainer.append(bookCard);

    const bookCardBookTitle = document.createElement(`h1`);
    bookCardBookTitle.classList.add(`bookCardBookTitle`);
    bookCardBookTitle.textContent = bookLibrary[i].title;
    bookCard.append(bookCardBookTitle);

    const bookCardBookAuthor = document.createElement(`h2`);
    bookCardBookAuthor.classList.add(`bookCardBookAuthor`);
    bookCardBookAuthor.textContent = bookLibrary[i].author;
    bookCard.append(bookCardBookAuthor);

    const bookCardBookNumberOfPages = document.createElement(`h3`);
    bookCardBookNumberOfPages.classList.add(`bookCardBookNumberOfPages`);
    if ( bookLibrary[i].numberOfPages >= 1 ) {
    bookCardBookNumberOfPages.textContent = bookLibrary[i].numberOfPages;
    }
    else {
        bookCardBookNumberOfPages.textContent = `Strangely enough, this book doesnt have any pages`;
    }
    bookCard.append(bookCardBookNumberOfPages);

    const bookCardBookHasBeenRead = document.createElement(`h4`);
    bookCardBookHasBeenRead.classList.add(`bookCardBookHasBeenRead`);
    bookCardBookHasBeenRead.textContent = bookLibrary[i].hasBeenRead;
    bookCard.append(bookCardBookHasBeenRead);

    const bookCardDeleteButton = document.createElement(`button`);
    bookCardDeleteButton.classList.add(`bookCardDeleteButton`);
    bookCardDeleteButton.textContent = `Delete`;
    bookCard.append(bookCardDeleteButton);

    const bookCardMarkAsReadButton = document.createElement(`button`);
    bookCardMarkAsReadButton.classList.add(`bookCardMarkAsReadButton`);
    bookCardMarkAsReadButton.textContent = `Mark as Read`;
    bookCard.append(bookCardMarkAsReadButton); // TODO need to show dinamically if the book has been read or not and change the displayed text accordingly
  }
};

const bookCardDeleteButton = document.querySelectorAll(`.bookCardDeleteButton`);

bookCardDeleteButton.forEach((button) => {
    button.addEventListener(`click`, (e) => {
        e.target.parentElement.remove();
    });
    }); // TODO finish delete button, need to delete the item from the bookLibrary array and then display again the grid -- Reuse the code for marking as read/unread

const formSubmitButton = document.querySelector(`.formSubmitButton`);

formSubmitButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  let book = new Book(
    e.target.form.title.value,
    e.target.form.author.value,
    e.target.form.numberOfPages.value,
    e.target.form.hasBeenRead.value
  );
  addBookToLibrary(book);
  // displayBookLibrary(bookLibrary);
});

const deleteAllBooksButton = document.querySelector(`.deleteAllBooksButton`);

const deleteAllBooks = (bookLibrary) => {
  clearBookLibrary();
  for (let i = 0; bookLibrary.length != 0; i++) {
    bookLibrary.pop();
  }
};

deleteAllBooksButton.addEventListener(`click`, () => {
  deleteAllBooks(bookLibrary);
});

// const markAsRead = () => { // TODO - add mark as read button - maybe toggle read vs unread with if statement?

// }

displayBookLibrary(bookLibrary); // * display book list by default on page load
