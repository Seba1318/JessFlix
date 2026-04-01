import {books, getBookById} from '../data/books.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';
import {renderPageBody} from '../selector/selectorGenerator.js';
import {renderDetailsWindow} from './details-window.js';

export function renderBooksPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = renderPageBody('Books');

  let booksPageHTML = ``;

  books.forEach((book) => {
    booksPageHTML += `
    <div class="selector-card  js-selector-card" data-book-id="${book.id}">
      <img src="${book.image}" class="selector-card-img">
      <div class="selector-card-info">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
      </div>
    </div>
    `;
  });

  window.scrollTo(0, 0);

  document.querySelector('.js-selector').innerHTML += booksPageHTML;

  document.querySelectorAll('.js-selector-card')
    .forEach((card) => {
      card.addEventListener('click', () => {
        const {bookId} = card.dataset;
        const bookIdInt = parseInt(bookId);
        const book = getBookById(bookIdInt);

        renderDetailsWindow(book);
      });
    });

  handleScrollEdges();
  handleScrollButtons();
}