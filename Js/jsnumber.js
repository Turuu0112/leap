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

// const arr = count(7)
// const a = count(11)
// console.log(arr,a);
const number=
const reverse =(arr)=>{
    let n = []
    for(let i = arr.length-1 ;i = 0;  i++){
        n.push(number(i))

    }
        return n;
}

console.log(reverse[1,3,45,5 ,56 ,65,767])

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

// const a = [8585, 334, 23, 2322, 2, 1];
// function max(arr) {
//   let maxNumber = [0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }

// const result = max(a);
// console.log(result);

// let number = [1,45,56,3345,3,3]
// let max = number[0]

// for (let i=1; i< number.length; i++){
//         if(number[i]>max){
//                 max=number[i]
//         }
// }
// console.log(max)
// const b =[123,3434,4343,4343535,43434]
// const max = (arr) =>{
//         let maxvalue = [0]
//         for (let i=0;i<arr.length; i++){
//                 if(arr[i] > maxvalue){
//                         maxvalue=arr[i]
//                 }
//         }
//         return maxvalue
// }
// const res = max(b)
// console.log(res)

//                 object
// let person ={
//         firstName: "tu",
//         lastName:"erdene",
//         age : 27,
//         head : {
//                 hair: "black",
//                 style:"short ustei",
//         },
//         height: 170,
//         skills:["html","css","js","java"],
//         married:{
//                 }
// }
// let result = (`namaig ${person.firstName} gedeg bi${person.age} nastai ${person.height} ondortei ${person.head.hair} ${person.head.style} ${person.skills} tei.`)
// console.log(result)
// const countEven = (arr)=>{
// const counts ={}

//         let each = [1]
//         for(let i=1; i<arr.length ; i++){
//                 const num = arr[i]
//                 if(counts[num]!==undefined){
//                         counts[num]++;

//         } else {
//                 counts[num]=1
//         }
//         return count
// }
// }
// const a =[1,1,3,4,4,1,5,1]
// console.log(countEven(a))

// / var arr = [5,1,9,5,7];
// var smallest = arr[0];

// for(var i=1; i<arr.length; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];
//     }
// }

// console.log(smallest);

// let numbers = [3, 7, 2, 8, 5];
// let max = numbers[0]; // initialize to the first value
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log(max); // Outputs: 8

// const Nums = [12,33,10,-1];
// const summ=(arr)=>{
//   let sum = 0
//   for ( let i = 0; i< arr.length; i++){
//     sum += arr[i]
//   }
//   return sum

// }
// console.log(summ(Nums))

// const numbers = [-1, 34, -34, 10];
// const sums = (arr) => {
//   let niilber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       niilber += arr[i];
//     }
//   }
//   return niilber;
// };
// console.log(sums(numbers));

// let a = [5, 6, 4, 2, -1];
// const mini = (arr) => {
//   let small = a[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < small) {
//       small = arr[i];
//     }
//   }
//   return small;
// };
// const result = mini(a);
// console.log(result);

// const b = [1,4,5,6,7,8,9]
// for (let i= 1; i< b.length ;i++)



// console.log(b)