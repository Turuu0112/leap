// const box = document.getElementsByClassName("box")[0]

// box.addEventListener("click", () => {
//     if(box.style.backgroundColor === "red"){
//         box.style.backgroundColor ="#181818";

//     }else
//     box.style.backgroundColor = "red"
// })

// const box = document.querySelector(".box");
// const [minusButton, plusButton] = document.querySelectorAll(".buttons button");
// let num = 0;
// box.textContent = num;

// minusButton.addEventListener("click", () => {
//   num--;
//   box.textContent = num;
// });
// plusButton.addEventListener("click", () => {
//   num++;
//   box.textContent = num;
// });

// const boxes = document.querySelectorAll(".box-container > div")
// const restartbtn = document.querySelector(".button")
// let players = "X"
// boxes.forEach((box) =>{
//     box.addEventListener("click" , () =>{
//        if(box.textContent === ''){
//         box.content = players; 
//        }
//     })
// })

const images = document.querySelectorAll(".sliders img")
const slides = document.querySelector(".slider")

const prevbtn = document.querySelector(".prevbtn")
const next = document.querySelector(".nextbtn")
let slideIndex = 0;


prevbtn.addEventListener("click" , ()=>{
    slideIndex= (slideIndex + 1) % images.length;

})












