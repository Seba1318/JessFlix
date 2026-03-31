import {books} from '../data/books.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';
import {renderPageBody} from '../selector/selectorGenerator.js';

export function renderBooksPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = renderPageBody('Books');

  let booksPageHTML = ``;

  books.forEach((book) => {
    booksPageHTML += `
    <div class="selector-card">
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

  handleScrollEdges();
  handleScrollButtons();
}