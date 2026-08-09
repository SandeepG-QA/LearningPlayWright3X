let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4] //concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.

// spread operator (...) can also be used to merge two or more arrays.
// ... all elements of the array are extracted and placed into a new array.

let d = [...a, ...b];
console.log(d); // [1, 2, 3, 4] //spread operator is used to merge two or more arrays.

// join() method is used to join all elements of an array into a string.

let s = c.join(" | "); // join() method is used to join all elements of an array into a string.
console.log(s); // "1 | 2 | 3 | 4" //join() method is used to join all elements of an array into a string. 

