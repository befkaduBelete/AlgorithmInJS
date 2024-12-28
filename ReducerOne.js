const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
    console.log("Value =>", accumulator)
  return  accumulator;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
//console.log(joinedString);

// Output: JavaScript is fun.