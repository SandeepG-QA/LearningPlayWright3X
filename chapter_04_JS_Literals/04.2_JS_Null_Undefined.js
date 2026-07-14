//null vs undefined
// In JavaScript, null and undefined are both primitive values that represent the absence of a value, 
// but they are used in different contexts and have different meanings.
/*undefined: a variable that has been declared but not assigned a value*/
/*null: a variable that has been explicitly assigned the value of null*/

var x; // x is declared but not assigned a value, so it is undefined
console.log(x); // Output: undefined

var y = null; // y is explicitly assigned the value of null
console.log(y); // Output: null 

let profilePicture=null; // profilePicture is declared but not assigned a value, so it is undefined
console.log(profilePicture); // Output: undefined
console.log(typeof profilePicture); // Output: object (this is a known quirk in JavaScript, as null is considered an object type)