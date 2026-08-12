greet("aman");

function greet(name)
{
    console.log("Hi");
    return `Hello, ${name}!`;
}

sayHi("Bob");// function as expresssion can't use. Type Error

const sayHi = funtion (name)
{
    return `Hi, ${name}!`;

}
