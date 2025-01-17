const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
  

  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS CAROUSEL */
const swiper = new Swiper('.swiper-container',{
  slidesPerView: 1,
  pagination: {
    el:'.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,

  breakpoints:{
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scroll reveal MOSTRAR ELEMENTOS QUANDO DER SCROOL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimoniasl .testimonialsm
#contact .text, #contact .links,
#footer .brank, footer .social
`, {interval:100})


/* BOTAO PARA VOLTAR PRO INICIO  */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
  

  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}
/* Menu ativo conforme a seçao visivel na pagina */
const sections = document.querySelectorAll('main section[i')
function activateMenuAtCurrentSection(){

  const chekpoint = window.pageYOffset + (window.innerHeight / 8 ) * 4

  for( const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
  }

  const chekpointStart = chekpoint >= sectionTop
  const chekpointEnd = chekpoint <=sectionTop + sectionHeight

  if(chekpointStart && chekpointEnd){
    document.querySelector('nav ul li a[href*=' + sectionId +']' )
    .classList.add('active')
  }else{
    document.querySelector('nav ul li a[href*=' + sectionId +']' )
    .classList.remove('active') 
  }

}

window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


