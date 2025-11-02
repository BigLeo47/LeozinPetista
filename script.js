const button = document.getElementById('lang-toggle');
let currentLang = 'pt';

button.addEventListener('click', () => {
  const elements = document.querySelectorAll('[data-pt]');
  
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang === 'pt' ? 'en' : 'pt'}`);
  });

  if (currentLang === 'pt') {
    button.textContent = '🇧🇷 Português';
    currentLang = 'en';
  } else {
    button.textContent = '🇺🇸 English';
    currentLang = 'pt';
  }
});

