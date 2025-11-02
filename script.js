const button = document.getElementById('lang-toggle');
let currentLang = 'pt';

button.addEventListener('click', () => {
  const elements = document.querySelectorAll('[data-pt]');
  
  if (currentLang === 'pt') {
    elements.forEach(el => el.textContent = el.getAttribute('data-en'));
    button.textContent = '🇧🇷 Português';
    currentLang = 'en';
  } else {
    elements.forEach(el => el.textContent = el.getAttribute('data-pt'));
    button.textContent = '🇺🇸 English';
    currentLang = 'pt';
  }
});
