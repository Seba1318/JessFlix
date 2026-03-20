import {movies} from '../data/movies.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';

export function renderMoviesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = `
    <div class="movies-page-container">
      <h1 class="movies-page-title">Movies</h1>
      <div class="movie-selector-container">
        <div class="movie-selector-wrapper">
          <div class="movie-selector js-movie-selector"></div>
          <div class="movie-selector-edge-right js-movie-selector-edge-right"></div>
          <button class="scroll-button-right js-scroll-button-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </button>
          <div class="movie-selector-edge-left js-movie-selector-edge-left"></div>
          <button class="scroll-button-left js-scroll-button-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </button>
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

  window.scrollTo(0, 0);

  document.querySelector('.js-movie-selector').innerHTML += moviesPageHTML;

  handleScrollEdges();
  handleScrollButtons();
}