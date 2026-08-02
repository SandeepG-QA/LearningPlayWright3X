let result = ["Pass", "Fail", "Pass", "Pass", "Fail"];
//indexOf() method returns the first index at which a given element can be found in the array,
//  or -1 if it is not present.
console.log(result.indexOf("Pass")); // Output: 0
console.log(result.indexOf("Fail")); // Output: 1
console.log(result.indexOf("Not Found")); // Output: -1
console.log(result.lastIndexOf("Fail")); // Returns the last index of "Fail"
result.includes("Error"); // Returns false, as "Error" is not in the array
console.log(result.includes("Error ")); // Returns false, as "Error " is not in the array