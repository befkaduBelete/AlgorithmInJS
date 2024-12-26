// function isPowerTwo(n) {
//     for (let i = 0; i <= Math.sqrt(n); i++)
//         if (n === Math.pow(2, i))
//             return true;
//         else return false;
// }

function isPowerTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0)
            return false
        n = n / 2
    }
    return true
}


function isPowerOfTwoBitWise() {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

console.log(isPowerTwo(1)) // true
console.log(isPowerTwo(2)) //true
console.log(isPowerTwo(5)) //false