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


// const reverseArray = (arr) => {
//  const reversedArray = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
// }

// return reversedArray;
// };

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));


// const countTops = (arr) => {
//       let tops = [];
    
//       for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//           tops.push(arr[i]);
//         }
//       }
    
//       if (arr[0] > arr[1]) {
//         tops.push(arr[0]);
//       }
    
//       if (arr[arr.length - 1] > arr[arr.length - 2]) {
//         tops.push(arr[arr.length - 1]);
//       }
    
//       return tops;
//     };
    
//     console.log(countTops([5, 2, 6, 1, 7, 9]));


//     const printPairs = (arr) => {
//         for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//             console.log(`${arr[i]} + ${arr[j]} = ${target}`);
//             }
// }
//         }
//     };
//         printPairs([5, 2, 6, 7, 1], 8);

    // const number = [5,6,7,4,4,3]
    // const numers = [5,6,7,2,32,4]
    // const printArr = (arr1,arr2)=>{
    //     for( let i= 0; i < arr1.length; i++){
    //         for(let j = i+ 1; j < arr2.length; j++ ){
    //             if(arr1[i] === arr2[j] == target){
                    
    //             } 
    //         }
    //     }
    // }
    // console.log(`${arr1[i]} + ${arr2[i]} = ${target}`);
// printArr [2,3,4,5,6,7,8]
// printArr [2,5,6,7,8,3,4]


// const a =[ 1,1,-4,5,6,-2,-4,-5,-7]
 // const negaTive =(arr)=>{
//     for( let i= 0; i< arr.length; i++){
//         for ( let j= 0; i< arr.length ;i++)
//         if(arr[i] < 0 ){
//             let t =arr[j]
//             arr[j] = arr[i]
//             arr[i] = t
//             j++
//         }
//         } return arr
//     } 


// const negaTiveNum = (arr)=>{
//     let j = [0]
//     for( let i=0; i<arr.length; i++){
//         if(arr[i]<0){
//             let t= arr[j]
//             arr[j] =arr[i]
//             arr[i] = t
//             j++
//         }
//     }
//     return arr
// }
// console.log(negaTiveNum(a))


// const b =[1,3,4,5,6,7,8,9]
// const lostNum = (arr)=>{
//     for
// }


// let a = [5, 6, 4, 2, 1,];
// const mini = (arr) => {
//   let small = a[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < small) {
//       small = arr[i];
//     }
//   }
//   return small;
// };
// const maxNumber =(arr)=>{
// let max = a[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//     max = arr[i];
//     } 
//     return max;
// }
// }
// const summ=(arr)=>{                                 
//   let sum = 0
//   for ( let i = 0; i< arr.length; i++){
//     sum += arr[i]
//   }
//   return sum

// }
// const lostNum = (arr)=>{
// }
// console.log(summ(a))
// console.log(`${maxNumber(a)} ${mini(a)}`)


// const ret = (arr)=>{

// } 



// let s = "coaching"
// let t = "coding"
// const number = s.length
// const nUmbers = t.length
// var appendCharacters = function(arr) {
//     for (let i = 1; i<number ,i<nUmbers  ; i++){
//         if(number[i]>nUmbers[i]){
//           number
//         }else{

//         }
//         return nUmbers

//     }
    
// };
// console.log(appendCharacters())
// const findOperator = (phoneNumber) =>{
//   const firsttwo = phoneNumber.slice(0,2)
//   switch(firsttwo){
//     case "99":
//     case "95":
//     case "94":
//       return "Mobicom"
//       case "96":
//       case "91":
//         return "Skytel"
//       case "60":
//         return "Ondo"
//        case "88":
//         case "86":
//           return "Unitel"
//        case "95":
//        case "93":
//         return "G-mobile"
//        default:
//         return  "number"        
//   }
  
// }
// console.log(findOperator("60010101"))

// for ( let i =1; i< 10 ; i++){ // break giih
//   if( i ===4 ){
//     break
    
//   }console.log(i)
// }


// for ( let i =1; i< 10 ; i++){ // continue hiij toog algasah
//   if( i ===4 ){
//     continue
    
//   }
//   console.log(i)
// }


// const arr = [4,5,6,7,8,8]
// for(const el in,of arr){
//   console.log(arr)
// }




// const arr2 =[
//   [1,2,3,4],
//   [5,6,7,8,],
//   [9,10,11,12],
//   [13,14,15,16],
// ]
// const diagnol= (arr)=>{
//   for(let i = 0; i< arr.length; i++){
//     console.log(arr[i][i])

//   }
// }
// diagnol(arr2)


// let names = ["bataa ", "baagii " ,"boldoo"]
// names.forEach()

  
// useForEach (name ,(name ) =>{
//   const a = name + "Hello";
//   console.log(a)
// });

const findIndexMax = (arr) => {
  let max = arr[0]
  arr.useForEach(() => {

  })
return max;
}

console.log(findIndexMax([34, 23, 11, 55454, 789]))



