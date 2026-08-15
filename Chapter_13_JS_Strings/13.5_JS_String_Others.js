let str = " Hello, World!"
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim Whitespace
console.log(str.trim());
str.trimStart();
str.trimEnd();
//Replace
let msg = "Test: FAIL. Retry: FAIL."; 
msg.replace("FAIL", "PASS"); // Test: PASS. Retry: Fail.
msg.replaceAll("FAIL", "PASS"); // Test: PASS. Retry: PASS.
msg.replace(/FAIL/g, "PASS"); 

//concatenation
 
"Hello"+" "+ "World !";
console.log("Hello"+"  "+ "World !");
"Hello".concat(" ", "Aman!");
console.log("Hello".concat(" ", "Aman!"));
`${"Hello"} ${"Mani"}`;
console.group(`${"Hello"} ${"Mani!"}`);