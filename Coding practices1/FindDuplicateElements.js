// Find Duplicate Elements using loops
const arr = [1, 2, 3, 4, 4];
const duplicates = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < i; j++) {
    if (arr[i] === arr[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate && duplicates.indexOf(arr[i]) === -1) {
    duplicates.push(arr[i]);
    
  }
}

if (duplicates.length === 0) {
  console.log("no duplicate");
} else {
  console.log("Duplicate elements:", ...duplicates);
}
