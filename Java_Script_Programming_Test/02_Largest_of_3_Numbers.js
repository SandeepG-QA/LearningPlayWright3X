const a = 12;
const b = 25;
const c = 10;

function largest(a,b,c){
    if (a >= b && a >= c)
    {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(`Largest number is ${largest(a,b,c)}`);