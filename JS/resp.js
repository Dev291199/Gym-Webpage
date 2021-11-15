burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-List')



burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class');
})