//Problem : give an integer n find the factorial of that integer
/*
In mathematics, the factorial of a non negative integer n denoted n! is the product
of all positive integer lees than or equal to n
Factorial of zero is 1,
factorial(1)  is 1 
factorial(2) is 2*1 =2
factorial(3) is 3*2*1 =6
factorial(4)  is 4*3*2*1 =24
 */


// O(n)  Way one 
// function factorial(n) {
//     let result = 1;
//     if (n == 0)
//         return result;
//     else
//         for (let i = n; i > 1; i--)
//             result = result * i;
//     return result;

// }

// Way tow 
function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i

    }

    return result;
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))