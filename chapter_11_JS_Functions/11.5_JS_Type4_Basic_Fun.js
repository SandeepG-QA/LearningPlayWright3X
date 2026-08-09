//Type 4 - with arguments and return value
function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(5, 3);
console.log(result); // Output: 8

addNumbers(10, 20); // Output: 30 (but not printed since we didn't log it)
console.log(addNumbers(10, 20)); // Output: 30 (now printed)
