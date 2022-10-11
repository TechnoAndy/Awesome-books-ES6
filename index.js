import Book from './modules/books.js';
import displayBooks from './modules/displayBooks.js';
import displayDateTime from './modules/displayTime.js';
import singlePageNav from './modules/singlePageNav.js';

const list = document.querySelector('#book-list');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const time = document.getElementById('time');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value);
  book.addBook();
  list.innerHTML = '';
  const totalBooks = JSON.parse(localStorage.getItem('books')) || [];
  totalBooks.forEach((bookDisplay) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${bookDisplay.title}</td>
        <td>${bookDisplay.author}</td>
        <td><button type='submit' class='btn btn-outline-dark'>Remove</button></td>
        `;

    list.appendChild(row);
  });
  form.reset();
});

displayBooks();

const updateTime = () => {
  time.innerHTML = displayDateTime();
};

updateTime();
setInterval(updateTime, 1000);

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from AppBook
  Book.deleteBook(e.target);

  const titleDel = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
  // Remove book from store
  const totalBooks = JSON.parse(localStorage.getItem('books')) || [];
  totalBooks.forEach((book, index) => {
    if (book.title === titleDel) {
      totalBooks.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(totalBooks));
});

// Single Page Navigation
singlePageNav();
