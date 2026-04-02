export function renderDetailsWindow(item){
  const detailsWindowHTML = `
    <div class="details-window-container js-details-window-container">
      <div class="details-window">
        <button class="details-window-close-button js-close-button">✕</button>

        <div class="details-container">
          <div class="details-cover-container">
            <img src="${item.image}" class="details-cover">
          </div>

          <div class="details-info js-details-info">
            <h2 class="details-title">${item.title}</h2>
            <p class="details-extra">${'rating' in item ?  'Rating: ' + item.rating : item.author}</p>
            <div class="details-description">${item.description}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", detailsWindowHTML);

  if ('trailer' in item) {
    const trailerLinkHTML = `
      <a href="${'trailer' in item ? item.trailer : ''}" target="_blank" class="trailer-link">
        <div class="trailer-link-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
          </svg>
          Trailer
        </div>
      </a>
    `;

    document.querySelector('.js-details-info')
      .innerHTML += trailerLinkHTML;
  }

  const container = document.querySelector('.js-details-window-container');

  setTimeout(() => {
    container.classList.add('is-active');
  }, 10);

  document.querySelector('.js-close-button')
    .addEventListener('click', () => {
      container.classList.remove('is-active');

      setTimeout(() => {
        container.remove();
      }, 300);
    });
}
