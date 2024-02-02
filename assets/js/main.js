/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId  = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll',scrollActive)


/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollTop)

/*===== CHANGE IMAGE ON SCROLL =====*/
function changeImageOnScroll() {
  const image = document.querySelector('.home__img img'); // Asegúrate de que este selector coincida con tu imagen en HTML
  const scrollY = window.pageYOffset;

  // Cambiar la imagen dependiendo de la posición de scroll
  if (scrollY > 100 && image.getAttribute('src') !== 'assets/img/yo1.png') {
    image.src = 'assets/img/yo1.png'; // Cambia a la imagen con un ojo cerrado

    // Cambia la imagen de nuevo a la original después de 1 segundo
    setTimeout(function() {
      image.src = 'assets/img/yo2.png';
    }, 200); // 1000ms = 1 segundo
  }
}

// Escucha el evento de scroll y llama a la función changeImageOnScroll
window.addEventListener('scroll', changeImageOnScroll);

/*===== MIXITUP FILTER PORTFOLIO =====*/
const mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__content'
  },
  animation: {
      duration: 400
  }
});
/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
  if(linkPortfolio){
    linkPortfolio.forEach(L => l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
  }
}
linkPortfolio.forEach(L => l.addEventListener('click', activePortfolio))


/*===== SWIPER CAROUSEL =====*/
const mySwiper = new Swiper('.testimonial__container', {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    640:{
      slidesPerView: 2,
    },
    1024:{
    slidesPerView: 3,
    },
  }
})
/*===== GSAP ANIMATION =====*/
