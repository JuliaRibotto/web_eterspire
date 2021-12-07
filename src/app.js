let itemA = document.querySelector("#what");
let itemB = document.querySelector("#rules");
let itemC = document.querySelector("#gallery");

let articleA = document.querySelector(".info2-kn-article");
let articleB = document.querySelector("#articleB");
let slider = document.querySelector(".slider");
let iconsSoc = document.querySelector(".info2-soc");

itemA.addEventListener("click", ()=>{
    articleA.classList.toggle("show");
    iconsSoc.classList.toggle("align");
});

itemB.addEventListener("click", ()=>{
    articleB.classList.toggle("show");
    iconsSoc.classList.toggle("align");
})



//Cómo aplico un mismo evento a diferentes elementos? (para evitar repetir código)