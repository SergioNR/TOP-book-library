const createBookCard = () => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    return bookCard;
};

const createBookCardBookTitle = (bookTitle) => {
    const bookCardBookTitle = document.createElement('h1');
    bookCardBookTitle.classList.add('bookCardBookTitle');
    bookCardBookTitle.textContent = bookTitle;
    return bookCardBookTitle;
};

const createBookCardBookAuthor = (bookAuthor) => {
    const bookCardBookAuthor = document.createElement('h2');
    bookCardBookAuthor.classList.add('bookCardBookAuthor');
    bookCardBookAuthor.textContent = bookAuthor;
    return bookCardBookAuthor;
};

const createBookCardBookNumberOfPages = (bookNumberOfPages) => {
    const bookCardBookNumberOfPages = document.createElement('h3');
    bookCardBookNumberOfPages.classList.add('bookCardBookNumberOfPages');
    if ( bookNumberOfPages >= 1 ) {
        bookCardBookNumberOfPages.textContent = bookNumberOfPages;
    }
    else {
        bookCardBookNumberOfPages.textContent = `Strangely enough, this book doesnt have any pages`;
    }
    return bookCardBookNumberOfPages;
}

const createBookCardBookHasBeenRead = (bookHasBeenRead) => {
    const bookCardBookHasBeenRead = document.createElement('h4');
    bookCardBookHasBeenRead.classList.add('bookCardBookHasBeenRead');

    if (bookHasBeenRead === true) {
        bookCardBookHasBeenRead.textContent = `Read: YES!`;
    }
    else {
        bookCardBookHasBeenRead.textContent = `Read: NO!`;
    }

    return bookCardBookHasBeenRead;
}

const createBookCardToggleReadButton = (bookHasBeenRead) => {
    const bookCardMarkAsReadButton = document.createElement('button');
    bookCardMarkAsReadButton.classList.add('bookCardMarkAsReadButton');

    if (bookHasBeenRead === true) {
        bookCardMarkAsReadButton.textContent = `Mark as unread`;
    }
    else {
        bookCardMarkAsReadButton.textContent = `Mark as read`;
    }

    return bookCardMarkAsReadButton;
}

const createBookCardDeleteButton = () => {
    const bookCardDeleteButton = document.createElement(`button`);
    bookCardDeleteButton.classList.add(`bookCardDeleteButton`);
    bookCardDeleteButton.textContent = `Delete`;
    return bookCardDeleteButton;
}


export { createBookCard, createBookCardBookTitle, createBookCardBookAuthor, createBookCardBookNumberOfPages, createBookCardBookHasBeenRead, createBookCardToggleReadButton, createBookCardDeleteButton };