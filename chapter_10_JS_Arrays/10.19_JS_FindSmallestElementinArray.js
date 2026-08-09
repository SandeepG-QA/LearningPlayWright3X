let arr = [10, 25, 30, 99, 56, 25, 99];
let smallest = Math.min(...arr);
console.log(smallest); // Output: 10

// another method to find the smallest element in an array

let arr2 = [70, 25, 30, 99, 56, 25, 99];
arr2.sort((a, b) => a - b);
console.log(arr2[0]); // Output: 25