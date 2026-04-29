const menuMobile = document.getElementById("menu-mobile");
const navBar = document.getElementById("nav-bar");
const iMenu = document.querySelector(".menu-mobile i");

let header = document.querySelector("#header");

menuMobile.addEventListener('click', () => {
    navBar.classList.toggle("show");
    iMenu.classList.toggle("bi-x-lg");
    iMenu.classList.toggle("bi-list");

});

document.addEventListener("scroll", ()=> {

    let scroll = window.scrollY;

    if (scroll > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active")
    }
});