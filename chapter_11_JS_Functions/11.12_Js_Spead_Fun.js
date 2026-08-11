function add (a,b,c)
{
    return a+b+c;
}

let num = [1,2,3];
console.log(add(...num));// output 6
//----------
// some is used to return value for any element of array.
function hasError (...codes){
    return codes.some(c => c >= 400);
    }

    let responsecodes = [200,202,404];
    hasError(...responsecodes);
    console.log(hasError(...responsecodes)); //output will ture