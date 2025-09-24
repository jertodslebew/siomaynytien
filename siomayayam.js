// slider.js
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  if(i < 0) index = images.length - 1;
  else if(i >= images.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));
