let a = {status : "Pass"};
console.log(a.status); // Pass
console.log(a["status"]);// Pass
// it is very similar to map in javascript
let a1 = {status : 'Pass'};
console.log(a1.status);
// keys are case senstivive in nature

let a22 = {status : 'Pass' , Status :'Fail' };
console.log(a22.status);
console.log(a22.Status);
console.log("--------------------");
let a23 = {status1 : 'Pass'};
let b = a23; // copy the reference mean both become same.
b.status1 = "Fail";
console.log(a23.status1);
