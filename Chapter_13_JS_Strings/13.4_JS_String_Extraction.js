//Extracting substrings
let str = "Login_Test_Pass_001";

//slice(Start, end) - negative index supported.

console.log(str.slice(0,5)); // Login
console.log(str.slice(11)); // starting from 11 character to till end.
console.log(str.slice(-3)); // 001

let testNumber = str.slice(-3);
// substring (start, end) - no negatives (treats as 0)
str.substring(6,10);// Test

//at() for a single character
str.at(5);//"L"
str.at(-1); // "1"
