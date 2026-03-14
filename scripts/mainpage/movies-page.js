import {movies} from '../data/movies.js';

export function renderMoviesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = `
    <div class="movies-page-container">
      <div class="movie-selector js-movie-selector"></div>
    </div>
    `;

  let moviesPageHTML = ``;

  movies.forEach((movie) => {
    moviesPageHTML += `
    <div class="movie-card">
      <img src=${movie.image} class="movie-card-img">
      <div class="movie-card-info">
        <h3>${movie.title}</h3>
        <p>${movie.rating}</p>
      </div>
    </div>
    `;
  });

  document.querySelector('.js-movie-selector').innerHTML = moviesPageHTML;
}