// Rule of thumb for comparison operators
// ==   -> loose comparison operator
// ===  -> strict comparison operator

console.log(''== 0); //true - loose comparison -> datatype or value doesn't matter
console.log("0"== 0); //true - loose comparison -> datatype or value doesn't matter
console.log(''=='0'); //false - loose comparison -> //"0" - 1 character string, 0 - number, so it will convert the string to number and then compare


console.log(''===  0); //false - strict comparison -> datatype matters
console.log("0"=== 0); //false - strict comparison -> datatype matters
console.log(""==="0"); //false - strict comparison -> datatype matters