// Example const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Output: { apple: 3, banana: 2, orange: 1 }


/*
The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, 
accumulating a single output value. It takes an initial value and processes elements from left to right, 
reducing the array to a single result. It is useful for doing operations like max in an array, min in an array and sum of array 
*/

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(fruitCount); 
// Output: { apple: 3, banana: 2, orange: 1 }