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

// const arr = [ 1, 1, 3, 4, 4, ]
//  const filterArr = arr.filter((el) => {
//     return el % 2 === 1
//  })
//  console.log(filterArr)



// const sum  = arr.reduce((acc, current ) => {      // niilberiig oloh
//     return acc + current

// },0)
// console.log(sum)




// const max  = arr.reduce((acc, current ) => {  // Maxiig oloh
//     if (acc < current) return current

//     return acc

// },arr[0])
// console.log(max)


let numbers = [5,2,7,5,9,] 

const swap =  (arr, i, j) =>{    
let res = arr [i]
arr[i] = arr[j]                             // Bubble sort
arr[j] = res

}
// const bubbleSort = (arr) =>{
//     for(let k=0; k< arr.length; k++){
//         for (let i = 0; i<arr.length-1-i; i++){
//             if(arr[i] > arr[i+1] ){
//                 swap (arr, i ,i+1)
//             }
//         }
//     }
// }
// bubbleSort(numbers)
// console.log(numbers)


const finIndexMIn = (arr,start) =>{
    let minIndex = start;

    for (let i = start+1 ; i < arr.length ; i++){
        if (arr[i] < arr.minIndex){
            minIndex = i
        }
    }
    return minIndex
}
console.log(finIndexMIn(numbers))

const selectionSort = (arr) =>{
    for( i = 0; i < arr.length ; i ++){
        let minIndex = finIndexMIn (arr,i)
        swap (arr, i ,minIndex)

    }

    }
    console.log(numbers)

    selectionSort(numbers)
    console.log(numbers)



    const arr = [ "a", "abg", "dwdwdw", "f"]
    arr.sort ((a,b) => a.length -b.length)

    console.log("sort", arr)

    const a = [ "a", "abg", "dwdwdw", "f"]
    arr.sort ((a,b) => {
        if (a > b) return 1
        if ( a < b) return -1
        return 0

    })

    console.log("sort", a)

    // b = a > 5? true : false ; // ternory 
    // b = a > 5? true : a > 3 ? false : null














