// Inicializa AOS
AOS.init({
  duration: 1100,
  once: true
});

window.addEventListener('scroll', () => {
  const tl   = document.querySelector('.timeline-container');
  const prog = document.querySelector('.timeline-progress');
  const rect = tl.getBoundingClientRect();
  const h    = tl.offsetHeight;
  const wh   = window.innerHeight;

  const offsetFactor = 0.5;

  const denom    = h + wh * offsetFactor;
  const scrolled = wh - rect.top;
  const pct      = Math.min(Math.max(scrolled / denom, 0), 1);

  prog.style.height = `${pct * 100}%`;
});
