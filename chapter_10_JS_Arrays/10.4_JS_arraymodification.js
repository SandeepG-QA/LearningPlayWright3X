// accessing an array

let status = ["Pass", "Fail", "Skip"];

console.log(status[0]); //Pass
console.log(status.at(-1)); // skip
console.log(status.at(-4)); //undefined
console.log(status[3]); // undefined

// Modify

status [1] = "Excellent";
console.log(status.length);
console.log(status[1]);
