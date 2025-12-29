// factorial loop 

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact); // 120


// sum of first n natural number 
let x = 5;
let sum = 0;

for (let i = 1; i <= x; i++) {
    sum += i;
}

console.log(sum); // 15


//product of first n natural number
let y = 4;
let product = 1;

for (let i = 1; i <= y; i++) {
    product *= i;
}

console.log(product);


//check prime or not

let z = 10;
let isPrime = true;

if (z <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < z; i++) {
        if (z  % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime" : "Not Prime");
