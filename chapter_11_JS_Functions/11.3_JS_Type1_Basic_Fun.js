// Type 1 - no parameter and no return value.
function greet() {
    console.log("Hello, welcome to the world of functions!");
}
//no parameter and no return value, so we can call the function directly to print 
// the message.
//return -  no return keyword is used in the function, so it will not return any value.
//console.log - just print the message to the console not returning anything.
greet(); // calling the function to print the message

function addlog(a,b){
    console.log(a+b);
}
function addreturn(a,b){
    return a+b;
}
let x = addlog(2,10); // calling the function to print the sum of 2 and 10
console.log(x); // Output: undefined, because the function does not return any value.

let y = addreturn(2,10); // calling the function to return the sum of 2 and 10
console.log(y); // Output: 12, because the function returns the sum of 2 and 10.