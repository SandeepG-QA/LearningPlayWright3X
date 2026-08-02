let tests = ["login" , "signup", "logout", "profile"];
for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]);
}
console.log("-------------");
//for...of loop
for (let test of tests) {
    console.log(test);
}
console.log("-------------");
//for...in loop
for (let i in tests) {
    console.log(i, tests[i]);
}
console.log("-------------");
// foreach -  arrow function
tests.forEach((test, index) => {
    console.log(index, test);
});
console.log("-------------");
//entries() method returns an iterator object with key/value pairs for each index in the array.

for (let [index, test] of tests.entries()) {
    console.log(index, test);
}
