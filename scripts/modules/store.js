// Store Class: Handles Storage
export default class Store {
    static books = [];

  // Check if there is a local storage for books
  static #checkStorage() {
    return localStorage.getItem("books");
  }

  // Get all the books Infos from the local storage
  static getBooks() {
    if (Store.#checkStorage()) {
      Store.books = JSON.parse(localStorage.getItem("books"));
    }

    return Store.books;
  }

  // Save a book in local storage
  static saveBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  // Delete a book in local storage
  static unSaveBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
