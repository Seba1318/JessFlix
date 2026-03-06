import {applyFloatInAnimation} from '../animations/floatInOnScroll.js';

export function renderHomepage(){
  const homepageHTML = `
    <div class="hero-container">
      <div class="hero-section">
        <div class="hero-section-message">
          <p class="hero-message-line">JessFlix</p>
          <p class="hero-message-line">Read the Story.</p>
          <p class="hero-message-line">Watch the Vision.</p>
        </div>

        <div class="hero-section-image" width="200px">
          <img src="images/hero-image.png" class="hero-image">
        </div>
      </div>
    </div>

    <div class="about-section-container reveal">
      <div class="about-section-text">
        <p class="about-title">Don't just watch. Discover.</p>
        <p class="about-description">
        JessFlix is a digital gallery built for those who live for great storytelling. We've gathered the essentials of film, TV, and literature into one sleek interface, so you can spend less time searching and more time appreciating the art of the story.
        </p>

        <div class="movies-stats-card card">1,200+ Movies</div>
        <div class="tv-shows-stats-card card">450+ Shows</div>
        <div class="books-stats-card card">800+ Reads</div>
      </div>
    </div>
  `;

  document.querySelector('.js-mainpage-content').innerHTML = homepageHTML;
}

renderHomepage();

applyFloatInAnimation();