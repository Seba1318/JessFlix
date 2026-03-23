import {books} from '../data/books.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';

export function renderBooksPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = `
    <div class="page-container">
      <h1 class="page-title">Books</h1>
      <div class="selector-container">
        <div class="selector-wrapper">
          <div class="selector js-selector"></div>
          <div class="selector-edge-right js-selector-edge-right"></div>
          <button class="scroll-button-right js-scroll-button-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </button>
          <div class="selector-edge-left js-selector-edge-left"></div>
          <button class="scroll-button-left js-scroll-button-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    `;

  let booksPageHTML = ``;

  books.forEach((book) => {
    booksPageHTML += `
    <div class="selector-card">
      <img src="${book.image}" class="selector-card-img">
      <div class="selector-card-info">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>
    </div>
    `;
  });

  window.scrollTo(0, 0);

  document.querySelector('.js-selector').innerHTML += booksPageHTML;

  handleScrollEdges();
  handleScrollButtons();
}