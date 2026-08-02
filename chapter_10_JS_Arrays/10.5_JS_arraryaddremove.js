let arr = [1, 2, 3];

console.log(arr);
// Add to End
arr.push(4);
console.log(arr);

//Remove from End
arr.pop();
console.log(arr);

// add multiple arr
arr.push(4,5,6);
console.log(arr);

// add the begining of array
arr.unshift(0);
console.log(arr);// done till 38.43 

// remove from begining of array    
arr.shift();
console.log(arr);

//[1, 2, 3, 4, 5, 6]

// splice method - add/remove elements from any index of array
// splice (where to start, how many to remove, what to add may be)

// add 2.5 at index 2 using splice method
arr.splice(2, 0, 2.5);  
console.log(arr); // [1, 2, 2.5, 3, 4, 5, 6]
console.log(arr.join(" , ")); // 1, 2, 2.5, 3, 4, 5, 6

arr.splice(2, 1); // remove 2.5 from index 2
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.splice(2,2,10,11); // remove 2 elements from index 2 and add 10,11
console.log(arr); // [1, 2, 10, 11, 5, 6]

arr.splice(-2, 1, 20, 21); // add 20,21 at index 2 and remove 1 element from index -2
console.log(arr); // [1, 2, 10, 11, 20, 21, 6]





