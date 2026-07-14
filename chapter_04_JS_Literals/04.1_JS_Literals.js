//Literal is the value of variable. 
// It is the value assigned to the variable. 
// **In JavaScript, literals can be of different types such as string literals, numeric literals, 
// boolean literals, object literals, array literals, etc.

let age='25'; //String literal
let userName="John"; //String literal 
let firstName=`Alice`; //String literal using template literals
let isStudent=true; //Boolean literal
let score=95; //Numeric literal
let nullValue=null; //Null literal  
let undefinedValue=undefined; //Undefined literal

// Numeric literals - Numeric
//numeric literals can be represented in different formats such as decimal, hexadecimal, octal, and binary.
// 1. Numeric
//2. float

// typeof operator is used to check the type of literal
console.log(typeof age); // Output: string
console.log(typeof userName); // Output: string
console.log(typeof score); // Output: number
console.log(typeof isStudent);
console.log(typeof nullValue); // Output: object (this is a known quirk in JavaScript, as null is considered an object type)
