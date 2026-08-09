const input = "hello";

function reverseString(str) {
  return str.split("").reverse().join("");
}

const reversed = reverseString(input);
console.log(reversed);
