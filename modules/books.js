const totalBooks = JSON.parse(localStorage.getItem('books')) || [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    const book = new Book(this.title, this.author);
    totalBooks.push(book);
    localStorage.setItem('books', JSON.stringify(totalBooks));
  };

  static deleteBook = (el) => {
    if (el.classList.contains('btn')) {
      el.parentElement.parentElement.remove();
    }
  };
}

export default Book;
