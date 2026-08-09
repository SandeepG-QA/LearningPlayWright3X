function greet(name) {
    return `Hello. ${name}!`;
}
// function as expression
const greet1 = function(name) {
    return `Hello. ${name}!`;
}

console.log(greet("Alice")); // Output: Hello. Alice!
console.log(greet1("Bob")); // Output: Hello. Bob!
