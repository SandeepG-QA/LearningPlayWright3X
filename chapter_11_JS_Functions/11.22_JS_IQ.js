let a = 10;
console.log(a); // output 10
if (true)
{
    console.log(a); //error of TDZ
    let a = 20;
}