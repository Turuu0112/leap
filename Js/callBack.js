// function print(val) {
//   console.log(val);
// }

// function useCallback(callback) {
//   callback("hello");
// }

// useCallback(print);

// let names = ["Baagii", "Beegii", "Oogii"];

// names.forEach((name) => console.log(name));

// function useForEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     cb(el);
//   }
// }

// useForEach(names, console.log);
// useForEach(names, (name) => {
//   console.log(name);
// });


// function findIndexMax (array){
//     let max = 0

//     array.forEach((element, index )=> {
//         if( element > array[max]) {
//             max = index 
//         } 
//     });

//     return max
// }


    
    

// console.log(findIndexMax([232, 32, 2322 , 32]))


// Map
// let array = [34,43,34, 43]
//  let element = array.map((el)=>{
//     return el * 2
//  });
//  console.log(element)
// let grades = [45, 54, 54, 54, 22]
 

// const roundGrades  =grades.map((grade) =>{
//     if(grade < 38 ) {
//         return grade ;
//     } else if( grade % 5 >= 3){
//         return grade +5 -(grade % 5)
//     }
// })
// console.log(roundGrades(grades))

const arr = [ 1, 1, 3, 4, 4, ]
//  const filterArr = arr.filter((el) => {
//     return el % 2 === 1
//  })
//  console.log(filterArr)

const sum  = arr.reduce((acc, current ) => {
    return acc + current

},0)
console.log(sum)


const max  = arr.reduce((acc, current ) => {
    if (acc < current) return current
     
    return acc

},arr[0])
console.log(max)















