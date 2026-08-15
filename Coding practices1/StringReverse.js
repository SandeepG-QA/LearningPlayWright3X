const input = "hello";

function reverseString(str) {
  return str.split("").reverse().join("");
}

const reversed = reverseString(input);
console.log(reversed);
// alternate way for reverse a string

const str = "aman";
let reverse = "";
for (let i = str.length-1 ;i>=0; i--)
{
  reverse = reverse+str[i];
  }
  console.log(reverse);