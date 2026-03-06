import {renderHomepage} from './homepage.js';
import {applyFloatInAnimation} from '../animations/floatInOnScroll.js';

function renderHeader(){
  const headerHTML = `
  <header class="header">
    <div class="left-section js-left-section">
      <img class="logo" width="100" src="images/JessFlix_Logo.png" alt="Unable to load">
    </div>

    <div class="middle-section">
      <input class="search-bar" type="text" placeholder="Search...">

      <button class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
          <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
        </svg>
      </button>
    </div>

    <div class="right-section">
      <p class="page-link-button">Movies</p>

      <p class="page-link-button">TV Shows</p>

      <p class="page-link-button">Books</p>
    </div>
  </header>
  `;

  document.querySelector('.js-header-container')
    .innerHTML = headerHTML;

  document.querySelector('.js-left-section')
    .addEventListener('click', () => {
      renderHomepage();
      applyFloatInAnimation();
    });
}

renderHeader();