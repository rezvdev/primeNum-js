let showPrime = number => {
    if(getPrime(number)) alert(number);
}
let getPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) return false;
    return true;
}
showPrime(+prompt("Enter the number:"));