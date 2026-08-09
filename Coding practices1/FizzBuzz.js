// Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. 
// For multiples of both 3 and 5, print 'FizzBuzz'
for (let data = 1 ; data <=15; data++)
{
    if ( data%3 === 0 && data%5 === 0)
    {
        console.log("FizzBuzz");
    } else if ( data%3 === 0)
    {
        console.log("Fizz");
    } else if (data % 5 === 0)
    {
        console.log("Buzz");
    } else {
        console.log(data);
    }
}

