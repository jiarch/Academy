const menu = document.querySelector('.header-menu')
const menuBtn = document.querySelector('.menu__icon')
const joinBtn = document.querySelector('.header__button')

const body = document.body;

if(menu && menuBtn){
  menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      joinBtn.classList.toggle('active')
  })
  menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
          menu.classList.remove('active')
          menuBtn.classList.remove('active')
          joinBtn.classList.remove('active')
      })
  })
}

/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}