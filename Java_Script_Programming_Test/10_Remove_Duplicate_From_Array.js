let arr = [10, 20, 30, 30, 20];

function removeDuplicatesLoop(arr) {
  const unique = [];
  const seen = new Set();

  for (const value of arr) {
    if (!seen.has(value)) {
      seen.add(value);
      unique.push(value);
    }
  }

  return unique;
}

console.log("Original array:", arr);
console.log("Unique array:", removeDuplicatesLoop(arr));
