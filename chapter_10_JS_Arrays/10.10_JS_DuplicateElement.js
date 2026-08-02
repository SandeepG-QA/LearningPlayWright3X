let arr = [10, 25, 3, 99, 56, 25, 99];
let seen = new Set(); // set to keep track of seen elements. set is a special object in JavaScript that stores 
// unique values only.
let duplicates = new Set(); // set to store duplicate elements

for (let num of arr) {
  if (seen.has(num)) {
    duplicates.add(num);
  } else {
    seen.add(num);
  }
}

console.log(...duplicates); // [25, 99] // ... spread operator is used to convert the set into an array 
// for easier display.
