var arr = ["Rutvk", 3, 4, 5, 6, 1.2, "End of arr"]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])

// console.log(arr.length)


// Array is mutable we can change array according to our convient

// we can added element in js array by index value

// Example :

// Length of array is 8 but we can access till 7 only 

// arr[9] = "Jaiswal" // we can added value at index 9 and 8th index value is remain empty!

// arr[90] = "Jaiswal" // we can added value at index 9 and 8th index value is remain empty!

// console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }



/*
|---------------------------------------------====} Array methods/operation {====--------------------------------------------|
*/


let array = [2, 3, 4, 5]
let array2 = [12, 13, 14, 15]

let newArray = arr.concat(array, array2)
console.log(newArray)