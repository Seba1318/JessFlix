import {movies} from '../data/movies.js';
import {handleScrollEdges} from '../selector/selector-scroll.js';

export function renderMoviesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = `
    <div class="movies-page-container">
      <div class="movie-selector-container">
        <div class="movie-selector-wrapper">
          <div class="movie-selector js-movie-selector"></div>
          <div class="movie-selector-edge-right js-movie-selector-edge-right"></div>
          <div class="movie-selector-edge-left js-movie-selector-edge-left"></div>
        </div>
      </div>
    </div>
    `;

  let moviesPageHTML = ``;

  movies.forEach((movie) => {
    moviesPageHTML += `
    <div class="movie-card">
      <img src="${movie.image}" class="movie-card-img">
      <div class="movie-card-info">
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.rating}</p>
      </div>
    </div>
    `;
  });

  document.querySelector('.js-movie-selector').innerHTML += moviesPageHTML;

  handleScrollEdges();
}