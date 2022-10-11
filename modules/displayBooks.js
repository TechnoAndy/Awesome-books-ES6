/* eslint-disable linebreak-style */
const totalBooks = JSON.parse(localStorage.getItem('books')) || [];
const list = document.querySelector('#book-list');

const displayBooks = () => {
  totalBooks.forEach((book) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button type='submit' class='btn btn-outline-dark'>Remove</button></td>
        `;

    list.appendChild(row);
  });
};

export default displayBooks;
