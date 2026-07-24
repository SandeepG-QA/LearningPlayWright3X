let a = 100;
console.log(a++ + ++a +a++ + ++a);//100+102+102+104= 408
console.log(a);// 104

let a1 = 37;
console.log( -- a1 + a1--);   // -- a1=37,a1--=35, -a1+a1- = 72
console.log(a1);//35

// pre increment means to increment first then assign the value.
// Post increment means to assign the value first then increment.
let a2 = 5; 
let b = a2-- - --a2; // a2-- = 5; a2=4;--a2=3 now the value of b will be (5-3) is 2
console.log(b, a2);// value will be (2,3)

let i = 1; 

let r = i++ > 1 ? i++ : ++i; // 
console.log(r, i);// (3,3)