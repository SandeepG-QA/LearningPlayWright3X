function makeRateLimit(limit)
{
let call = 0;
function check()
{
call++;
return call <= limit;
} return check;
}

let limiter = makeRateLimit(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
