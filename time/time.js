// let count = 0
// const id = setInterval(()=>{
//     count++;
//     console.log("Hello world")

//     if(count === 5){
//         clearInterval(id)
//     }

// }, 2000) 


// const ad = setTimeout(()=>{
// console.log("hello")
// },2000)

// const time = document.querySelector(".buttons")
const[Start, Pause, Reset ] = document.querySelectorAll(".buttons button")

let count = 0;

Start.addEventListener("click",()=>{
    const id = setInterval(()=>{
        count++
    
    }, 1000)
    
})
Pause.addEventListener("click",()=>{
    const id = clearInterval(()=>{
        clearInterval(id)
    })
})

