let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let Header = document.getElementById('header')

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    Headers.style.background = '#191919'
  } else {
    Headers.style.background = 'transparent'
  }
})