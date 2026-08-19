//Left Triangle Star Pattern

let n = 5;
for (let i = n; i > 0; i--)
{
    console.log( "*".repeat(i));
   
}
// aother method for this program
let n1 =  5 ;
for (let i = n1; i >= 1; i--){
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    } console.log(" ");
}