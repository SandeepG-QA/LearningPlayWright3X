//String conversion 

//To string
(200).toString(); // output : "200"
true.toString(); //output : "true"

Number("42");// output : 42

parseInt("42px"); // 42
parseFloat("3.14rem") // output : 3.14

let str = "hello"; // strings are immutable in nature meaning
//once a string created, it cannot be changes,
// arrays are mutable and can be changed in place.
str[0] = "H";
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper);

