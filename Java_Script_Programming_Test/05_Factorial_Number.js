let num = 10 ;
function factorial(num){
    let factor = 1;
    for (let i = 1; i<= num; i++)
    {
        factor *=i;
    } return factor
} console.log("Factorial of " + num + " is " + factorial(num));