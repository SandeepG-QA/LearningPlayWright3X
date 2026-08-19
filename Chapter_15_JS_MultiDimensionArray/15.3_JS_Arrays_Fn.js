let scores = [
    [85, 90, 78], // student 0 , 253
    [60, 45, 70], // student 1, 175
    [95, 88, 92] // student 2 , 275
]
let rowsums = scores.map(row => row.reduce((a, b) => a+b));
console.log(rowsums);

let suitresults = [
    ["login-pass", "register-pass", "logout-pass "],
    ["seach-pass", "filter-fail", "sort-pass"],
    ["check-fail", "payment-fail", "confirm-pass"]
] ;
for (let i = 0; i< suitresults.length; i++){
    for(let j = 0; j< suitresults[i].length; j++)
    {
        if (suitresults[i][j].includes("fail")){
            console.log(suitresults[i][j]);
        }
    }
}