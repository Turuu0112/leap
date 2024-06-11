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
    let seconds = '00';
    let tens = '00';
    let minute = '00'
    let Tens = document.getElementById("tens")
    let Seconds = document.getElementById("seconds")
    let Minutes = document.getElementById("minute")
    let count


Start.addEventListener("click",()=>{
count = setInterval(startTimer, 0.1);

})
    
    


    Pause.addEventListener("click", ()=>{
        clearInterval(count);
    })
    


Reset.addEventListener("click" ,()=>{
    clearInterval(count);
    tens = "00";
    seconds = "00";
    minute = "00"
    Tens.innerHTML = tens;
    Seconds.innerHTML = seconds;
    Minutes.innerHTML = minute
})



const startTimer = ()=>{
    tens++; 
    
    if(tens <= 9){
Tens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
Tens.innerHTML = tens;
    
    } 
    
    if (tens > 99) {
console.log("seconds");
        seconds++;
Seconds.innerHTML = "0" + seconds;
tens = 0;
    Tens.innerHTML = "0" + 0;
    }
    
    if (seconds > 60){
        minute++
    Minutes.innerHTML = "0" +minute;
    seconds = 0;
    Seconds.innerHTML ="0" + 0;

    }

}




