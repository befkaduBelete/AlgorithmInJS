// const nestedArray = [[1, 2], [3, 4], [5]];

// const flattened = nestedArray.reduce((accumulator, currentValue) => {
//     const sum = accumulator.reduce((acc, x) => acc + x, 0);
//     console.log("sum", sum)
//    return accumulator.concat(currentValue);
// }, []);

// console.log(flattened); // Output: [1, 2, 3, 4, 5]

//const a =[1,2,3,4,5,6];

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
    console.log(currentValue + accumulator )
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings,"A ");
//console.log(joinedString);