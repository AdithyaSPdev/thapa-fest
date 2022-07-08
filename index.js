const hamburger  = document.querySelector('.hamburger');
const ul  = document.querySelector('ul')
window.addEventListener('scroll',function(){
    var nav = document.querySelector('nav')
    nav.classList.toggle('sticky',window.scrollY > 0);
  })

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    ul.classList.toggle('active')
})