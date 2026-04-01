export function renderDetailsWindow(item){
  const detailsWindowHTML = `
    <div class="details-window-container">
      <div class="details-window">
        <button class="details-window-close-button js-close-button">✕</button>

        <div class="details-container">
          <div class="details-cover-container">
            <img src="${item.image}" class="details-cover">
          </div>

          <div class="details-info">
            <h2 class="details-title">${item.title}</h2>
            <p class="details-extra">${'rating' in item ?  'Rating: ' + item.rating : item.author}</p>
          <div class="details-description">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", detailsWindowHTML);

  document.querySelector('.js-close-button')
    .addEventListener('click', () => {
      document.querySelector('.details-window-container').remove();
    });
}
