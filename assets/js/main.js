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
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
  const navMenu = docuemnt.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink,forEach(n = n.addEventListener('click',linkAction))

/*===== scroll sections active links =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      docuemnt.querySelector('.nav__menu a[href*=' + sectionId + '']).classList.add('active-link')
    }else{
      docuemnt.querySelector('.nav__menu a[href*=' + sectionId + '']).classList.remove('active-link')
    }

  })
}
/*===== mixtitup file=====*/
/*===== change backgraund header =====*/
