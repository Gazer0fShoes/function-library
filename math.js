// IS PRIME
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// FACTORIAL
function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x < 1) {
      num *= x;
      x--;
    }
    return num;
}

