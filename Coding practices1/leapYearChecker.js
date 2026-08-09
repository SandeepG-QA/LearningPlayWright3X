// Leap Year Checker
let data = -205;

let year =Number(data);

if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
    console.log("YES");
} else{
    console.log("NO");
}
console.log("-----------------");
