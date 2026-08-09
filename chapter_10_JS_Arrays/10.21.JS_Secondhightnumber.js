// Find Second Largest Number
let arr = [ 4, 12, 34, 10, 1 ];
arr.sort((a ,  b)  =>  a - b);
console.log(arr[arr.length - 2]); // 12
    console.log("------------------");
// other way to find second largest number
    function findSecondHighest(arr) {
  // Remove duplicates
  let uniqueArr = [...new Set(arr)];

  // Sort in descending order
  uniqueArr.sort((a, b) => b - a);

  // Return second element if it exists
  return uniqueArr.length >= 2 ? uniqueArr[1] : null;
}

// Example usage:
console.log(findSecondHighest(arr)); // Output: 12
console.log(findSecondHighest([4]));                   // Output: null

