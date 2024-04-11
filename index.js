const menu = document.querySelector('.header-menu')
const menuBtn = document.querySelector('.menu__icon')
const joinBtn = document.querySelector('.header__button')

const body = document.body;

if(menu && menuBtn){
  menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      joinBtn.classList.toggle('under_nav')
  })
  menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
          menu.classList.remove('active')
          menuBtn.classList.remove('active')
          joinBtn.classList.remove('under_nav')
      })
  })
}



// const blob = document.getElementById("blob");

// window.onpointermove = event => { 
//   const { clientX, clientY } = event;
  
//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 3000, fill: "forwards" });
// }


/* -- Glow effect -- */
const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  // Calculate the distance from the edges
  const distanceFromLeft = clientX;
  const distanceFromTop = clientY;
  const distanceFromRight = window.innerWidth - clientX;
  const distanceFromBottom = window.innerHeight - clientY;

  // Calculate the size of the blob based on the smallest distance from the edges
  const minDistance = Math.min(distanceFromLeft, distanceFromTop, distanceFromRight, distanceFromBottom) - 10;
  const size = minDistance > 200 ? minDistance : 0; // If the distance is less than 10px, set the size to 0 (hide the blob)

  // Update the blob's position and size
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`,
    height: `${size}px`,
    width: `${size}px`
  }, { duration: 3000, fill: "forwards" });
}

// slider

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
  const prevSlide = slides[currentSlide];
  const nextSlide = slides[(currentSlide + 1) % slides.length];
  const nextNextSlide = slides[(currentSlide + 2) % slides.length];

  prevSlide.classList.remove('active');
  prevSlide.classList.add('prev');

  nextSlide.classList.remove('next');
  nextSlide.classList.add('active');

  nextNextSlide.classList.add('next-next');
  setTimeout(() => {
    nextNextSlide.classList.remove('next-next');
    nextNextSlide.classList.add('next');
  }, 10);

  setTimeout(() => {
    prevSlide.classList.remove('prev');
    currentSlide = (currentSlide + 1) % slides.length;
  }, 500);
}

setInterval(changeSlide, 10000); // Смена слайда каждые 6 секунды

// popup

const headerButton = document.querySelector('.header__button');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');
const popupForm = document.getElementById('popup-form');

// Проверяем, был ли пользователь на сайте ранее
const isFirstVisit = localStorage.getItem('isFirstVisit');

if (isFirstVisit === null) {
  // Если пользователь впервые на сайте, меняем текст на кнопке и запоминаем это в localStorage
  headerButton.textContent = 'ВСТУПИТЬ';
  localStorage.setItem('isFirstVisit', 'false');
} else {
  headerButton.textContent = 'ВОЙТИ';
}

// Открываем попап окно при клике на кнопку
headerButton.addEventListener('click', () => {
  popup.classList.add('active');
});

// Закрываем попап окно при клике на крестик
popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

// Отправляем форму и закрываем попап окно
popupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Здесь можно добавить логику отправки формы на сервер
  popup.classList.remove('active');
});


// /popup
