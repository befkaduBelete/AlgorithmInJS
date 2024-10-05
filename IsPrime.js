/*Problem given a natural number 'n
  determine if the number is prime or not
  A prime number is a natural number grater than 1 that is not product of two smaller natural numbers.
  isPrime(5) = true (5*1 or 1*5)
  isPrime(4) = false (1*4 or 2*2 or 4*1)
  */
//Big -O O(n/2)
//log(n)


function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(1 + "is Prime ? " + isPrime(1)) // false
console.log(2 + "is Prime ?" + isPrime(2)) // true
console.log(3 + "is Prime ? " + isPrime(3)) //true
console.log(4 + "is Prime ?" + isPrime(4)) // false
console.log(5 + "is Prime ?" + isPrime(5)) // true
console.log(6 + "is Prime ? " + isPrime(6)) // false
console.log(7 + "is Prime ?" + isPrime(7)) // true