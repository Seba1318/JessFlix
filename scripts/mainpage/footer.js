function renderFooter(){
  const footerHTML = `
    <p class="copyright">&copy; 2026 Hanes Seba. All rights reserved.</p>
  `;

  document.querySelector('.js-footer').innerHTML = footerHTML;
}

renderFooter();