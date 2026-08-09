let arr = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); //100

let sum1 = arr.reduce((acc, val) => acc + val, 0);
console.log(sum1); //100