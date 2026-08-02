let num = [1, 2, 3, 4, 5];
let result = num.find(x => x > 3); // Finds the first element greater than 3
console.log(result); // Output: 4

/*findIndex() method returns the index of the first element in an array that satisfies the provided 
testing function. Otherwise, it returns -1, indicating that no element passed the test.*/
let index = num.findIndex(x => x > 3);
console.log(index); // Output: 3 (the index of the first element greater than 3)// done till 1:09:32