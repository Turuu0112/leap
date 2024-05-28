// const PI=Math.PI;

// const num = 10;
// const nums = 10;
// let word = "Phython jargon"
// let words ="I hope this course is not full of jargon"
// console.log(num ==nums)
// console.log(word.includes("on"))
// console.log(word.includes("jargon"))

// const randNum=Math.random()*(0-100);
// const randNum2=Math.random()*(50-100)
// const randNum3=Math.random()*(255)
// const jS = Math.floor(Math.random() * (9));
// const script = "Javascript"
// const result = jS
// console.log("random:",randNum)
// console.log("random:",randNum2)
// console.log("random:",randNum3)
// console.log("javasc",jS)
// console.log("geometrical constant:",PI)
// console.log("roundup",Math.round(9.76))
// console.log("rounddown",Math.round(PI))
// const now = new Date();
// const year = now.getFullYear() + 1;
// const month = now.getMonth();
// const date = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

// console.log(`Өнөөдөр ${year} оны${month}- рсарын ${date} өдөр  Одоо${hours} цаг${minutes}
// мин${seconds} секунд болж байна.`);

// let x = 11;
// let y = 4;

// if (x <= 10 && y >= 4) {
//   console.log("hello");
// }

// if (x <= 10 || y >= 4) {
//   console.log("hello baby");
// }

// if (x !== 11) {
//   console.log("11 bish bn sh t");
// } else {
//   console.log("hi 11 ee");
//   let nas =6;
//   let gender ="male"
//   if (nas>= 6 &&  gender === "male" ){
//     console.log("8-r angiin eregtei suragch");
//   }
//   if(nas>=6 || gender ==="female"){
//     console.log("8-r angiin emegtei suragch")
//   }
//   if (nas !== 6){
//     console.log("suragch bish")
//   }else {
//     console.log("suragch ")
//   }
// let i = 4 > 3; // true
// let ii = 4 < 3; // false
// let iii = 4 >= 3;// true
// let iv = 4 <= 3;// false
// let v = 4 == 4;// true
// let vi = 4 === 4;// true
// let vii = 4 != 4;// true
// let iix = 4 !== 4;// false
// let ix = 4 != "4";// true
// let x = 4 == "4"; //false 
// let xi = 4 === "4";//false
// let one = 4 > 3 && 10 < 12;//true 
// let two = 4 > 3 && 10 > 12;// false 
// let three = 4 > 3 || 10 < 12;// true 
// let four = 4 > 3 || 10 > 12;// true
// let five = !(4 > 3);// false
// let six = !(4 < 3); //true 
// let eight = !(4 > 3 && 10 < 12);//false
// let nine = !(4 > 3 && 10 > 12);//true
// let ten = !(4 === "4");//false
//          


                // Array 
// const number=[1,3,45,5 ,56 ,65,767]

// // let num = number.pop()
// let mum = number.push(25,78)
// // const g =new Array() == []

// console.log("Number",mum)
// console.log("Numbers",number);



// function count(n){
//     for (let i=1;i<=n;i+=2){
//         console.log(i)
//         console.log("hello")
//     }
// }
// count(8)

// function count(n){
//     const arr = []
//     for (let i=1;i<=n;i++){
//         arr.push(i)
//         // console.log("loop",arr)

//     }
//     return arr;

// }
// console.log(arr)

// const arr = count(7)
// const a = count(11)
// console.log(arr,a); 


// const reverse =(n)=>{
//     const arr =[]
//     for(let i = n;i>0; i--){
//         arr.push(i)

//     }
//         return arr;
// }

// console.log(reverse(15))

// const a= [1,5,2,7,45,13,13];

// function printArr(arr){
//    for( let i = 0; i< arr.length; i++){
//     console.log(arr(i))
//    }
// }

// printArr(a)

// const a = [1,5,2,7,45,5,12];
// function countEven(arr){
//     let count = 0
//     for( let i = 0; i<arr.length; i++){
//         if(arr[i] % 2 ==0){
//             count++;
//         }
//         return count

//     }
//     }
// const numberOfEvenes = countEven(a)
// console.log(numberOfEvenes);

// let numbers = [3, 7, 2, 8, 5];
// let max = numbers[0]; // initialize to the first value
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log(max); // Outputs: 8


// create an array
// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // create a variable for the sum and initialize it
// let sum = 0;

// // iterate over each item in the array
// for (let i = 0; i < myNums.length; i++ ) {
//   sum += myNums[i];
// }

// console.log(sum) // 15

// const Nums = [12,33,];
// // const summ=(arr)=>{
//   let sum = 0
//   for ( let i = 0; i< Nums.length; i++){
//     sum += Nums[i]
//   }
  
// // }
// console.log(sum)
// var arr = [5,1,9,5,7];
// var smallest = arr[0];

// for(var i=1; i<arr.length; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];   
//     }
// }

// console.log(smallest);

let a = [5,6,4,2,1]
const mini = (arr)=>{
  let small = a[0];
  for( let i= 1; i<arr.length; i++){
    if(arr[i] < small ){
      small = arr[i]
    }
  }
  
}

const result = mini(a)
console.log(result)