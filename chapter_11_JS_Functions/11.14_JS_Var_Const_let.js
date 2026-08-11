var a = 10;
console.log(a);// output 10
// var - function scoped (), not trustworthy
// Define
function printhello()
{
    console.log("The Testing Academy, Hello");
    var a = 20;
    console.log(a); // output 20
    if (true){
        var a = 30;
        console.log(a); //output 30
    }
    console.log(a); // 30
}
printhello();

//let - Block scoped
 let b = 20; // global scope
 console.log(b); // output 20
 function printhello()
{
    console.log("The Testing Academy, Hello !");
    let b = 30; //local scope
    console.log(b); // output 30
    if (true){
        let b = 5;
        console.log(b); //output 5
    }
    console.log("let ->" , b); // 30
}
printhello();


// const - block scoped , it is not allowed to redeclare .
const pi = 3.14 ;
console.log(pi);

const x = [1,2,3];
x.push(10);
console.log(x);