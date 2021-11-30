function isPrime(n) {
  for (i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    } else {
      return n > 1;
    }
  }
}
console.log(isPrime(88));
