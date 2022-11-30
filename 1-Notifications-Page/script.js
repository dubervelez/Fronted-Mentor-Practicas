const notificacion = document.querySelectorAll(".notificacion.pendiente");
const alerta = document.querySelector(".contenedor-titulos__alerta");
const leertodo = document.querySelector(".contenedor-titulos__p");

let contador = 3;
notificacion.forEach((news, i)=>{
    notificacion[i].addEventListener("click", ()=>{
        notificacion[i].classList.remove("pendiente");
        contador--
        contador = Math.max(contador,0)
        alerta.innerText = `${contador} `
    })
})

leertodo.addEventListener("click", ()=>{
    notificacion.forEach((news, i)=>{
        notificacion[i].classList.remove("pendiente");
        alerta.innerText = "0" 
    })
})

