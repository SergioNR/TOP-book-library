import { Book } from "./bookClass.js";
import { createBookCard, createBookCardBookTitle, createBookCardBookAuthor, createBookCardBookNumberOfPages, createBookCardBookHasBeenRead, createBookCardToggleReadButton, createBookCardDeleteButton } from "./bookCardElements.js"; 

let bookLibrary = [
]; 

// TODO create a class for the book library array //! 
// TODO use the constructor to create 4 random books and add them to the bookLibrary array
bookLibrary.push(new Book (`LOTR1`, `wilson`, 15, true))
bookLibrary.push(new Book (`Hobbit`, `JR Tokien`, 28, false))
bookLibrary.push(new Book (`Inception`, `Stanlien`, 155, true))
bookLibrary.push(new Book (`Interstellar`, `Christopher`, 92, false))
bookLibrary.push(new Book(`Hobbit`, `JR Tokien`, 28, false))
bookLibrary.push(new Book(`Inception`, `Stanlien`, 155, true))
;
bookLibrary.push(new Book(`Interstellar`, `Christopher`, 92, false));



const addBookToLibrary = (Book) => {
  bookLibrary.push(Book);
  displayBookLibrary(bookLibrary);
};

const clearBookLibrary = () => {
  libraryContainer.innerHTML = ``;
};

const libraryContainer = document.querySelector(`.libraryContainer`);

const displayBookLibrary = (bookLibrary) => {
  clearBookLibrary();
  for (let i = 0; i < bookLibrary.length; i++) {
    // const bookCard = document.createElement("div");
    // bookCard.classList.add(`bookCard`);
    // libraryContainer.append(bookCard);

    const bookCard = createBookCard();
    libraryContainer.append(bookCard);

    const bookCardBookTitle = createBookCardBookTitle(bookLibrary[i].title);
    bookCard.append(bookCardBookTitle);

    const bookCardBookAuthor = createBookCardBookAuthor(bookLibrary[i].author);
    bookCard.append(bookCardBookAuthor);

    
    const bookCardBookNumberOfPages = createBookCardBookNumberOfPages(bookLibrary[i].numberOfPages);
    bookCard.append(bookCardBookNumberOfPages);

    const bookCardBookHasBeenRead = createBookCardBookHasBeenRead(bookLibrary[i].hasBeenRead);
    bookCard.append(bookCardBookHasBeenRead);

    const bookCardDeleteButton = createBookCardDeleteButton()
    bookCard.append(bookCardDeleteButton);

    bookCardDeleteButton.addEventListener(`click`, (e) => {
      e.target.parentElement.remove();
    });

    const bookCardToggleAsReadButton = createBookCardToggleReadButton(bookLibrary[i].hasBeenRead);
    bookCard.append(bookCardToggleAsReadButton); 

    bookCardToggleAsReadButton.addEventListener(`click`, () => {
        if (bookLibrary[i].hasBeenRead === true) {
            bookCardToggleAsReadButton.textContent = `Mark as read`;
            bookLibrary[i].hasBeenRead = false;
            bookCardBookHasBeenRead.textContent = `Read: NO!`;
        }
        else {
            bookCardToggleAsReadButton.textContent = `Mark as unread`;
            bookLibrary[i].hasBeenRead = true;
            bookCardBookHasBeenRead.textContent = `Read: YES!`;
        }
      });

      bookCardDeleteButton.addEventListener(`click`, (e) => {
        bookLibrary.splice([i], 1);
        console.log({i, bookLibrary})
        e.target.parentElement.remove();
      });


  }
};

const formSubmitButton = document.querySelector(`.formSubmitButton`);

formSubmitButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  let book = new Book(
    e.target.form.title.value,
    e.target.form.author.value,
    e.target.form.numberOfPages.value,
    e.target.form.hasBeenRead.checked,
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




displayBookLibrary(bookLibrary); // * display book list by default on page load


const bookCardMarkAsReadButton = document.querySelectorAll(`.bookCardMarkAsReadButton`);

  bookCardMarkAsReadButton.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      // TODO - need to make this button change the hasBeenRead value of this object to true or false
      
    });
  }); 

