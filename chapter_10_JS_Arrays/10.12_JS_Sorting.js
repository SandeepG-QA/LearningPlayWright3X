//sorting
let fruits = ["Banana", "Orange", "Apple","Mango"];
//sort() method sorts the elements of an array in place and returns the sorted array. 
//The default sort order is ascending.
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

let score = [4,3,2];
console.log(score.sort()); // [2, 3, 4] 
//sort() method sorts the elements of an array in place and returns the sorted array.

let numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort()); // [1, 10, 100, 25, 40, 5]

// proper sorting - Ascending order
numbers.sort((a, b) => a - b); // [1, 5, 10, 25, 40, 100]
console.log(numbers); // [1, 5, 10, 25, 40, 100]

// proper sorting - Descending order
numbers.sort((a, b) => b - a); // [100, 40, 25, 10, 5, 1]
console.log(numbers); // [100, 40, 25, 10, 5, 1]    
numbers.reverse(); // [1, 5, 10, 25, 40, 100]
console.log(numbers); // [1, 5, 10, 25, 40, 100]