var typed = new Typed(".digitando", {
  strings: ["Desenvolvedor Front-end"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

let cabecalho = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    cabecalho.style.background = "#1f242d";
  } else {
    cabecalho.style.background = "transparent";
  }
});
