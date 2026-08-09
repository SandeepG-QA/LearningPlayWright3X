// normal function
function greet(name) {
    return `Hello. ${name}!`;
}
// expression function
const greet1 = function(name) {
    return `Hello. ${name}!`;
}
// arrow function -  to make a normal function into an arrow function,
// we can remove the function keyword and add an arrow (=>) between the parameter and the function body.

const greetArrow = (name) => `Hello. ${name}!`;

console.log(greet("aman")); // output : Hello. aman!
console.log(greet1("Alice")); // Output: Hello. Alice!
console.log(greetArrow("Bob")); // Output: Hello. Bob!