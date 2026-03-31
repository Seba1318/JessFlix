import {series} from '../data/series.js';
import {handleScrollButtons, handleScrollEdges} from '../selector/selector-scroll.js';
import {renderPageBody} from '../selector/selectorGenerator.js';

export function renderSeriesPage(){
  document.querySelector('.js-mainpage-content')
    .innerHTML = renderPageBody('TV Shows');

  let seriesPageHTML = ``;

  series.forEach((serie) => {
    seriesPageHTML += `
    <div class="selector-card">
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

  handleScrollEdges();
  handleScrollButtons();
}