// all number type in javascript.
//In javascript, all numbers are represented as floating-point values, which means they can 
// represent both integers and decimal numbers.
let count=10; // Integer literal
let negativeNumber=-5; // Negative integer literal
let zero=0; // Zero literal
let decimalNumber=3.14; // Decimal literal

console.log(typeof count); // Output: number
console.log(typeof negativeNumber);
console.log(typeof zero);
console.log(typeof decimalNumber);
//-------------------------------------------------------------------------
// 1 . Integer literals - Integer literals are whole numbers without any fractional or decimal part.
//decimal (base 10) literals
let decimal1=42; // Decimal literal
let decimal2=3.14159; // Decimal literal
console.log(decimal1);  
console.log(decimal2);
// Binary (base 2) literals -starts with 0b or 0B
let binary1=0b1010; // Binary literal (10 in decimal)
console.log(binary1); // Output: 10
//octal (base 8) literals - starts with 0o or 0O
let octal1=0o12; // Octal literal (10 in decimal)
console.log(octal1); // Output: 10
//hexadecimal (base 16) literals - starts with 0x or 0X
let hex1=0xA; // Hexadecimal literal (10 in decimal)
console.log(hex1); // Output: 10
//-----------------------------------------------------
//2 . Float literals - Float literals are numbers that have a fractional part, represented with a decimal point.
//-----------------------------------------------------    
let float1=3.14; // Float literal
let float2=2.5e10; // Float literal in scientific notation
let float3=0.0001; // Float literal
let float4=.5; // Float literal (equivalent to 0.5)
let float5=5.; // Float literal (equivalent to 5.0)
console.log(float1); // Output: 3.14
console.log(float2); // Output: 25000000000
//-----------------------------------------------
//3. exponential notation - Exponential notation is a way to represent very large or very small numbers using powers of 10.
let exp1=1.23e5; // Exponential notation (1.23 * 10^5)
let exp2=4.56e-3; // Exponential notation (4.56 * 10^-3)
console.log(exp1); // Output: 123000
console.log(exp2); // Output: 0.00456