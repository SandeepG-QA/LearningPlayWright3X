//3. Numeric separators are used to make large numbers more readable by adding underscores (_) as separators.  
let largeNumber=1_000_000; // More readable than 1000000
console.log(largeNumber); // Output: 1000000
let binaryNumber=0b1010_1010; // More readable than 0b10101010
console.log(binaryNumber); // Output: 170
//* 4. BigInt literals - BigInt literals are used to represent integers that are larger than the maximum safe
//integer value in JavaScript (2^53 - 1).
let bigInt1=9007199254740991n; // BigInt literal
// BigInt literals are created by appending an 'n' to the end of an integer value.
//--------------------
//* 5.  Infinity and NaN literals - Infinity represents a value that is greater than any finite number, while NaN (Not-a-Number) represents a value that is not a valid number.
const positiveInfinity=Infinity; // Infinity literal
const negativeInfinity=-Infinity; // Negative Infinity literal
const notANumber=NaN; // NaN literal
console.log("1/0",1/0); // Output: Infinity
console.log("0/0",0/0); // Output: NaN
console.log("typeof Infinity",typeof Infinity); // Output: number