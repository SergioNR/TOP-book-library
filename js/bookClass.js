class Book {
    constructor(title, author, numberOfPages, hasBeenRead) {
        this.title = title;
        this.author = author;
        this.numberOfPages = parseInt(numberOfPages);
        this.hasBeenRead = hasBeenRead;
    }

}

export { Book }