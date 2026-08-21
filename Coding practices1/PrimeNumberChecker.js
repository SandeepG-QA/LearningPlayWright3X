// Prime Number Checker
const num = 21;

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


if (isPrime(num)) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}