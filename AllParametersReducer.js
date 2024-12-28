const numbers = [10, 20, 30, 40];

const result = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    console.log('Accumulator:', accumulator);
    console.log('Current Value:', currentValue);
    console.log('Current Index:', currentIndex);
    console.log('Array:', array);
    console.log('---');
    
    return accumulator + currentValue; // Add the current value to the accumulator
}, 0);

console.log('Result:', result);