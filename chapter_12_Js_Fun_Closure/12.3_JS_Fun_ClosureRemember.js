function makeCounter (start = 0)
{
    let count = start;
    return{
        increment (){   count++; }, 
        decrement () { count++;},
        get (){ return count ;}
    }

}
let counter = makeCounter (0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
"\\ innerfn1atline5,innerfun2atline6,innerfun3atline7 "
