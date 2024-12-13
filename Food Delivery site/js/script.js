burger = document.querySelector('.burger')
section = document.querySelector('.section')
logo = document.querySelector('.logo')
nav  = document.querySelector('.nav')
header = document.querySelector('.header')


burger.addEventListener('click', ()=>{
    section.classList.toggle('blur')
    logo.classList.toggle('opacity')
    nav.classList.toggle('opacity')
    header.classList.toggle('resp-nav-2')
    // header.classList.toggle('resp-nav')
})