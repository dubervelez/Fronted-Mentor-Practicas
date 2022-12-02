const sliderTestimonio = document.querySelectorAll(".slider-testimonio");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click",()=>{
    sliderTestimonio.forEach((test, i)=>{
        sliderTestimonio[i].classList.remove("activo")
    })
    sliderTestimonio[1].classList.add("activo");
})

prev.addEventListener("click",()=>{
    sliderTestimonio.forEach((test, i)=>{
        sliderTestimonio[i].classList.remove("activo")
    })
    sliderTestimonio[0].classList.add("activo");
})