import {series, getSerieById} from '../data/series.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';
import {renderPageBody} from '../selector/selectorGenerator.js';
import {renderDetailsWindow} from './details-window.js';

export function renderSeriesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = renderPageBody('TV Shows');

  let seriesPageHTML = ``;

  series.forEach((serie) => {
    seriesPageHTML += `
    <div class="selector-card js-selector-card" data-serie-id="${serie.id}">
      <img src="${serie.image}" class="selector-card-img">
      <div class="selector-card-info">
        <h3>${serie.title}</h3>
        <p>Rating: ${serie.rating}</p>
      </div>
    </div>
    `;
  });

  window.scrollTo(0, 0);

  document.querySelector('.js-selector').innerHTML += seriesPageHTML;

  document.querySelectorAll('.js-selector-card')
      .forEach((card) => {
        card.addEventListener('click', () => {
          const {serieId} = card.dataset;
          const serieIdInt = parseInt(serieId);
          const serie = getSerieById(serieIdInt);
  
          renderDetailsWindow(serie);
        });
      });

  handleScrollEdges();
  handleScrollButtons();
}