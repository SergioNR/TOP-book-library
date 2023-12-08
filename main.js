// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have hasBeenRead the book.

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not hasBeenRead yet"
let bookLibrary = [{title: `LOTR`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true}, {title: `LOTR`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true}, {title: `LOTR`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true}, {title: `LOTR`, author: `JR Tokien`, numberOfPages: 15, hasBeenRead: true}];

function Book(title, author, numberOfPages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = parseInt(numberOfPages); 
    this.hasBeenRead = hasBeenRead; //! always showing "on" - should say return or false
}

const addBookToLibrary = (Book) => {
    bookLibrary.push(Book);
}


// Write a function that loops through the array 
// and displays each book on the page. 
// You can display them in some sort of table
// or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.


const container = document.querySelector(`.container`);
const bookDiv = document.createElement(`div`)

container.prepend(bookDiv)

const displayBookLibrary = (bookLibrary) => {
    for (i = 0; i < bookLibrary.length; i++) {
        bookLibrary = bookLibrary + `${bookLibrary[i]} <br>`;
        bookDiv.innerHTML = bookLibrary;
    }
}




const formSubmitButton = document.querySelector(`.formSubmitButton`);

formSubmitButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    let book = new Book(e.target.form.title.value, e.target.form.author.value, e.target.form.numberOfPages.value, e.target.form.hasBeenRead.value);
    addBookToLibrary(book);
    displayBookLibrary(bookLibrary);
})


displayBookLibrary(bookLibrary); // * display book list by default on page load



























