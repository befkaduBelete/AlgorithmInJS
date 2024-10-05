/*Problem given a natural number 'n
  determine if the number is prime or not
  A prime number is a natural number grater than 1 that is not product of two smaller natural numbers.
  isPrime(5) = true (5*1 or 1*5)
  isPrime(4) = false (1*4 or 2*2 or 4*1)
  */

//Long way 
// function isPrime(n) {
//     let nf = 1;
//     if (n < 2)
//         return false
//     for (let i = 2; i <= n / 2; i++)
//         if (n % i == 0)
//             nf++;
//     if (nf >= 2)
//         return false;
//     else
//         return true;

// }

// Shore way 
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0)
            return false
    }
    return true
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))