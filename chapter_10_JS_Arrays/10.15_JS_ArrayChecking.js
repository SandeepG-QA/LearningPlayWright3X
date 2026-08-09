// checking array
// check if something is in array or not
let arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); // true
console.log(Array.isArray("hello")); // false

//every() method tests whether all elements in the array pass the test implemented by
// the provided function. It returns a Boolean value.
[80, 90, 100].every(score => score > 75); // true
[80, 90, 100].every(score => score > 85); // false

//some() method tests whether at least one element in the array passes the test 
// implemented by the provided function. It returns a Boolean value.
// some -at least one must pass the test
[80, 90, 100].some(score => score > 75); // true
[80, 90, 100].some(score => score > 105); // false