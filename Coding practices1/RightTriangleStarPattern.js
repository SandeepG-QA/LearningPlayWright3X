// Right Triangle Star Pattern
let n = 5;
let i = 1;
while (i<= n)
{
    console.log("*".repeat(i));
    i++;
}
console.log("----------------------");
// alterate way of above program
let n1 = 5;
for (let i = 1 ; i <= n1; i++)
{
    for (let j = 1 ; j <= i; j++)
    {
        process.stdout.write("*");
    }console.log("");
} 
console.log("----------------------");
// alterate way of above program
let n2 = 5 ;
for (let i = 0; i < n2; i++){
    for (let j = 0; j<=i; j++){
        process.stdout.write("*");
    }console.log("");
}
