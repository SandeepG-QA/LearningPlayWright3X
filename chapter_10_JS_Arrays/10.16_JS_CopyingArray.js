//shallow copy of array - oringinal array is not modified while copying the array.
let original = [1, 2, 3, 4, 5];
let copy1 = [...original]; // using spread operator
console.log(copy1); // [1, 2, 3, 4, 5]
console.log(original); // [1, 2, 3, 4, 5]

let copy2 = original.slice(); // using slice() method
console.log(copy2);// [1, 2, 3, 4, 5]

let copy3 = Array.from(original); // using Array.from() method
console.log(copy3); // [1, 2, 3, 4, 5]

let copy4 = original.concat(); // using concat() method
console.log(copy4); // [1, 2, 3, 4, 5]

// Deep copy of array - original array is not modified while copying the array.
let deepCopy = original;
original.push(6);
console.log(original);
console.log(deepCopy); // [1, 2, 3, 4, 5, 6] // original array is modified while 
// copying the array. 


