function fibonacciSeries(n) {
  let a = 0, b = 1;   // first two terms
  console.log(a);     // print 0
  if (n > 1) console.log(b); // print 1 if n > 1

  for (let i = 2; i < n; i++) {
    let next = a + b;   // sum of previous two
    console.log(next);  // print next term
    a = b;              // shift values
    b = next;
  }
}

// Example: print first 10 terms // alternate method
fibonacciSeries(10);

function fibonacciArray(n) {
  let fib = [0, 1]; // start with first two terms

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // next term = sum of previous two
  }

  return fib.slice(0, n); // return only up to n terms
}

// Example: get first 10 terms
console.log(fibonacciArray(10).join (" "));

