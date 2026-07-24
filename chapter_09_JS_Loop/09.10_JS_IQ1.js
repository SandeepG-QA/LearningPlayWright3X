let i = 3, count = 0;
do {
  count++;
} while (i-- > 0);
console.log(count + " " + i);

/**
 * Iteration 1 - count 1 , i 2
 * Iteration 2 - count 2, i 1
 * Iteration 3 - count 3, i 0
 * Iteration 4 - count 4, i -1 ; loop exist as condition break (0>0)
 */