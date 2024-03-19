let navItems = document.querySelector('.nav-items');
let action = document.querySelector('.action');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    console.log("Clicked");

    navItems.classList.toggle("open-menu");
    action.classList.toggle("open-menu");
    hamburger.classList.toggle("open-menu");
})