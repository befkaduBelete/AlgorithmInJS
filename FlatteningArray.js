const nestedArray = [[1, 2], [3, 4], [5]];

const flattened = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5]