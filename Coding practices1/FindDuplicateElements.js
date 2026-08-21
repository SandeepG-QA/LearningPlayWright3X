// Find Duplicate Elements using Sets (O(n))
const arr = [1, 2, 3, 4,-5];
const seen = new Set();
const duplicates = new Set();

for (const value of arr) {
  if (seen.has(value)) {
    duplicates.add(value);
  } else {
    seen.add(value);
  }
}

if (duplicates.size === 0) {
  console.log("no duplicate");
} else {
  console.log("Duplicate elements:", ...duplicates);
}
