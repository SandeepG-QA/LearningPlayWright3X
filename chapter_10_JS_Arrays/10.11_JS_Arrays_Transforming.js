let scores = [40, 50, 60, 70, 80];
let grade = scores.map( s=> s > 40 ? "Pass" : "Fail"); 
// ["Fail", "Pass", "Pass", "Pass", "Pass"] 
//  map() method creates a new array with the results of calling a provided 
// function on every element in the calling array.
console.log(grade);
/**
 * Map my app is generally used whenever we want to 
 * transform the array into another array. It is a very useful method in JavaScript.
 **/

//Filter
let passingscores = scores.filter( s=> s > 40);
// [50, 60, 70, 80] 
// filter() method creates a new array with all elements that pass the test implemented
//  by the provided function.
console.log(passingscores);
/**
 * Filter method is used to filter out the elements of an array based on a condition.
 *  It is a very useful method in JavaScript.**/