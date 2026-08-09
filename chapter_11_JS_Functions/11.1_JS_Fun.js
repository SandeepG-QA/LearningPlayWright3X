// without function - repeated logic
let score1 = 80;
let result1 = score1 >= 70 ? "pass" : "fail";
console.log(result1); // Output: pass

let score2 = 60;
let result2 = score2 >= 70 ? "pass" : "fail";
console.log(result2); // Output: fail
console.log("-------------------------");

// above task with the help of function - reusable logic
function getresult(score) {
    return score >= 70 ? "pass" : "fail";
}

getresult(85); // Output: pass  
getresult(60); // Output: fail

//To print the value
console.log(getresult(75)); // Output: pass
console.log(getresult(60)); // Output: fail