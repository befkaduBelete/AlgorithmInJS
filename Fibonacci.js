function fibonacci(n) {
    if (n == 0 || n == 1)
        return "No fibonacci number";
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(1)) // "No fibonacci number"
console.log(fibonacci(2)) //[0,1]
console.log(fibonacci(3)) //[0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

//Big-O = O(n)