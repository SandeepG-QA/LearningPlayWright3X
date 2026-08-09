function doubleMe()
{
    return a*2;
}

const   double = (a) => a*2;
double(10);
console.log(double(15));

const getEnv = () => "staging";
console.log(getEnv());

// multi line also possible in const
const getResult = (score) => 
{
    if (score > 70) return "Pass";
        return "Fail";
}
console.log(getResult(75));