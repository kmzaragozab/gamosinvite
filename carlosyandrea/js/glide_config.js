document.addEventListener('DOMContentLoaded', function () {
  // Inicializar Glide
  new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    focusAt: 'center',
    autoplay: 3000,
    hoverpause: true,
    gap: 20,
    breakpoints: {
      800: { perView: 2 },
      480: { perView: 1 }
    }
  }).mount();

    const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.querySelector('.gallery-lightbox__img');
  const lightboxClose = document.querySelector('.gallery-lightbox__close');

  document.querySelectorAll('.gallery .photo').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('gallery-lightbox--active');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('gallery-lightbox--active');
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('gallery-lightbox--active');
      lightboxImg.src = '';
    }
  });

});
