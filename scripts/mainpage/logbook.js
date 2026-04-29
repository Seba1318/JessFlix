function renderLogbook(){
  const logBookHTML = `
    <div class="logbook-container">
      <button class="close-btn js-close-btn">✕</button>

      <div class="logbook-title-container">
        <h1 class="logbook-title">Logbook</h1>
      </div>

      <div class="logbook-entries-container">
        <div class="logbook-entry">
          <p class="logbook-entry-date">2024-06-01</p>
          <p class="logbook-entry-content">Today I started working on the logbook project. It was a productive day!</p>
          <button class="entry-btn entry-edit-btn">Edit</button>
          <button class="entry-btn entry-delete-btn">Delete</button>
        </div>
        <div class="logbook-entry">
          <p class="logbook-entry-date">2024-06-01</p>
          <p class="logbook-entry-content">Today I started working on the logbook project. It was a productive day!</p>
          <button class="entry-btn entry-edit-btn">Edit</button>
          <button class="entry-btn entry-delete-btn">Delete</button>
        </div>
        <div class="logbook-entry">
          <p class="logbook-entry-date">2024-06-01</p>
          <p class="logbook-entry-content">Today I started working on the logbook project. It was a productive day!</p>
          <button class="entry-btn entry-edit-btn">Edit</button>
          <button class="entry-btn entry-delete-btn">Delete</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", logBookHTML);

  const closeBtn = document.querySelector(".js-close-btn");
  closeBtn.addEventListener("click", () => {
    const logbookContainer = document.querySelector(".logbook-container");
    logbookContainer.remove();
  });
}

renderLogbook();