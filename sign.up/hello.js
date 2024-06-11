const signUp = document.querySelector(".Sign-up button")
const right = document.querySelector(".right")
const box = document.querySelector(".box")
const sigign =document.querySelector(".Sign-ign button")
const left = document.querySelector(".left")

signUp.addEventListener("click",()=>{
    right.classList.add("change")
    
})
sigign.addEventListener("click",()=>{
    left.classList.add("left-change")
})

