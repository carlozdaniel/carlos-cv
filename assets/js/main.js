/*===== show menu=====*/
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
/*===== revome menu mobile =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== scroll sections active links =====*/
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
/*===== change backgraund header =====*/
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader)

/*===== change background header =====*/
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollTop)

const mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__content'
  },
  animation: {
      duration: 400
  }
});

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
  if(linkPortfolio){
    linkPortfolio.forEach(L => l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
  }
}
linkPortfolio.forEach(L => l.addEventListener('click', activePortfolio))

/* swiper carousel */
const mySwiper = new Swiper('.tes', {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})