//slicing and combining

let arr = [1, 2, 3, 4, 5];
//slice(start, end) method returns a shallow copy of a portion of an array into a new
//   array object selected from start to end (end not included). 
// The original array will not be modified.
console.log(arr.slice(1, 3)); // [2, 3] //slice from index 1 to index 3(not included)
console.log(arr); // [1, 2, 3, 4, 5] //original array is not modified.
console.log(arr.slice(2)); // [3, 4, 5] //slice from index 2 to the end of the array
console.log(arr.slice(-2)); // [4, 5] //slice from index -2 to the end of the array

console.log(arr.slice(0)); // [1, 2, 3, 4, 5] 
// slice from index 0 to the end of the array  

sum=arr.reduce((acc, curr) => acc + curr, 0); // sum of all elements in the array
console.log(sum); // Output: 15
