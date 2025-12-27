const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
