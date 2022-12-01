// eventos para el menu hamburguesa

const abrirMenu = document.querySelector(".btn-abrir-menu");
const cerrarMenu = document.querySelector(".btn-cerrar-menu");
const menu = document.querySelector(".nav-ul");

abrirMenu.addEventListener("click", ()=>{
    menu.style.right = "0";
    console.log(funciona)
    menu.style.transition = "all 1s";
})

cerrarMenu.addEventListener("click", ()=>{
    menu.style.right = "-100%";
    menu.style.transition = "all 1s ease in 0.2s";
})