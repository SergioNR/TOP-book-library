export class Book {
    #price = 12;
    
    constructor(title, author, numberOfPages, hasBeenRead) {
        this.title = title;
        this.author = author;
        this.numberOfPages = parseInt(numberOfPages);
        this.hasBeenRead = hasBeenRead;
    }

    get bookPrice() {
        return this.#price;
    }

    set bookPrice(newPrice) {
        this.#price = newPrice;
    }
}

