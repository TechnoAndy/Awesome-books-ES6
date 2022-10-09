// Book Class: Represents a book
export default class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getBookInfo () {
        return {title: this.title, author: this.author};
    }
  }