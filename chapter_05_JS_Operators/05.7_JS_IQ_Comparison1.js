console.log("Confusing comparison in JS")
// null and undefined//
console.log(null==undefined); //true - loose comparison -> datatype or value doesn't matter
console.log(null===undefined); //false - strict comparison -> datatype matters -> different datatypes
console.log(null==0); //false - loose comparison -> datatype or value doesn't matter
console.log(null===0); //false - strict comparison -> datatype matters -> different datatypes
console.log(null>=0); //true - loose comparison -> datatype or value doesn't matter

console.log(null==0|| null >0); //false - loose comparison -> datatype or value doesn't matter
