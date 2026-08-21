//`split()` is a String method that breaks a string into an array using a separator.


const text = "racecar";
const reversed = text.split("").reverse().join("");

if (text === reversed) {
  console.log("YES");
} else {
  console.log("NO");
}
// alternate way to above program
const str = "test";
let reverse = "";
for (let i = str.length-1 ; i >= 0 ; i--)
  {
  reverse = reverse+str[i];
}
console.log(reverse);