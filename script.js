// prime numbers:
let showPrime = (firstNumber, LastNumber) => {
    for (let i = firstNumber; i <= LastNumber; i++) if (getPrime(i)) alert(i);
}
let getPrime = n => {
        if(n <= 1) return false;
        for(let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) return false;
        return true;
}
showPrime(+prompt("Enter the first number:"), +prompt("Enter the last number:"));