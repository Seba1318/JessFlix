import {movies} from '../data/movies.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';
import {renderPageBody} from '../selector/selectorGenerator.js';

export function renderMoviesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = renderPageBody('Movies');

  let moviesPageHTML = ``;

  movies.forEach((movie) => {
    moviesPageHTML += `
    <div class="selector-card">
      <img src="${movie.image}" class="selector-card-img">
      <div class="selector-card-info">
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.rating}</p>
      </div>
    </div>
    `;
  });

  window.scrollTo(0, 0);

  document.querySelector('.js-selector').innerHTML += moviesPageHTML;

  handleScrollEdges();
  handleScrollButtons();
}