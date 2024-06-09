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

const boxes = document.querySelectorAll(".boxes > div")
const restartBtn = document.querySelector(".restart")
const squares = document.getElementsByClassName(".box")

let turn = 0;
let players = ['X', 'O']
let currentPlayer = players [0]

boxes.forEach((box) =>{
  box.addEventListener("click", ()=>{
    if(box.textContent !== "") return;
    box.textContent = turn ? "O" : "X"
    turn = 1 - turn;
  })
})
restartBtn.addEventListener("click", ()=>{
  boxes.forEach((box)=>{
    box.textContent = ""
  })
  turn = 0;
})
const checkWinner = () => {
  const winningCombination =[
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
  ]

   let winner = null

   winningCombination.forEach((combination) =>{
    const [a, b, c] = combination
    if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
      return  winner = 'winner'
    }
   })
   return false
}



    
  

