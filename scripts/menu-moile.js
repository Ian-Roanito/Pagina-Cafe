const menuMobile = document.getElementById("menu-mobile");
const navBar = document.getElementById("nav-bar");
const iMenu = document.querySelector(".menu-mobile i");

// Abre e fecha o menu hamburguer
menuMobile.addEventListener('click', () => {
    navBar.classList.toggle("show");
    iMenu.classList.toggle("bi-x-lg");
    iMenu.classList.toggle("bi-list");
    
});


let header = document.querySelector("#header");

// Captura o scroll na tela no eixo Y e adiciona a classe active no header.
document.addEventListener("scroll", ()=> {

    let scroll = window.scrollY;

    if (scroll > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active")
    }
});