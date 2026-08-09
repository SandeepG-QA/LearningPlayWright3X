// Immediate Invoked Function Expression.
// They don't need to called.

function name1(){
    console.log("Hi");
}name1();



//IIFE
(function()
{
    console.log("Anonymous Fun");
})();

// arrow function - no need to use function keyword as well.
(() => {
    console.log("Arrow Function");
})();