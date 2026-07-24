let a = 10;
while (a <10)
{
    console.log(a); // nothing will print and condition become false.
    a++;
}

let b = 10;
do {
    console.log(b);// it will print '10' as first execute once then condition verify.
    b++;
} while(b < 10);