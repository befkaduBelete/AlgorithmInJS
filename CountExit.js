// Example const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Output: { apple: 3, banana: 2, orange: 1 }


/*
The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, 
accumulating a single output value. It takes an initial value and processes elements from left to right, 
reducing the array to a single result. It is useful for doing operations like max in an array, min in an array and sum of array 
*/

// const a = [2, 4, 6];

// // Use reduce to calculate the sum
// const sum = a.reduce((acc, x) => 
//     acc + x, 0);

// console.log(sum);

function stranglength(acc,x){
   console.log(x,x.length)
   return x.length;
}
const b = ["js", "html", "css"];

// Use reduce to calculate the sum of the lengths of the strings
const res = b.reduce((stranglength, str) => acc + str.length, 0);

console.log(res);



// const a = [2, 4, 6];

// function sum2(acc, x) {
//     console.log("sum=,", acc+x)
//   return acc + x;
// }

// const sum = a.reduce(sum2, 2);

// console.log(sum);