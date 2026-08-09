// type 2 functions - with parameter and with no return type.

function greetwithname(name) {
    console.log("Hello", name);
}

greetwithname("Alice"); // Output: Hello Alice
greetwithname("Bob"); // Output: Hello Bob

let name1 = greetwithname("Charlie"); // Output: Hello Charlie
console.log(name1); // Output: undefined (since the function does not return a value)