import {renderLogbook} from "./logbook.js";

export function renderLogkbookIcon(){
  const logbookIconHTML = `
    <div class="logbook-icon-container js-logbook-icon-container">
      <div class="logbook-icon">
        <img class="logbook-image" src="images/logbook.icon.svg">
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", logbookIconHTML);

  const logbookIcon = document.querySelector(".js-logbook-icon-container");

  logbookIcon.addEventListener("click", () => {
    renderLogbook();
    logbookIcon.remove();
  });
}

renderLogkbookIcon();