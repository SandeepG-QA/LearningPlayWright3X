let a = 10;
let b = a;
b = 99;
console.log(a);
console.log(b);
// call by value which happen for primitive data type.
// primitive data types -  number, string , boolean, null, undefined.
console.log("----------------");
// call by Ref - Objects copied by reference .
// Refernce - Objects, array ,function
let obj1 = {value : 20} ;
let obj2 = obj1;
obj2.value = 99;
console.log(obj1.value);

