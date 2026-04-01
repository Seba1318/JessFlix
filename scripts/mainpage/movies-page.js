import {movies, getMovieById} from '../data/movies.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';
import {renderPageBody} from '../selector/selectorGenerator.js';
import {renderDetailsWindow} from './details-window.js';

export function renderMoviesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = renderPageBody('Movies');

  let moviesPageHTML = ``;

  movies.forEach((movie) => {
    moviesPageHTML += `
    <div class="selector-card js-selector-card" data-movie-id="${movie.id}">
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

  document.querySelectorAll('.js-selector-card')
    .forEach((card) => {
      card.addEventListener('click', () => {
        const {movieId} = card.dataset;
        const movieIdInt = parseInt(movieId);
        const movie = getMovieById(movieIdInt);

        renderDetailsWindow(movie);
      });
    });

  handleScrollEdges();
  handleScrollButtons();
}