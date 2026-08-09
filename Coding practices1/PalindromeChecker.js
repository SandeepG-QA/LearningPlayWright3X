//`split()` is a String method that breaks a string into an array using a separator.


const text = "racecar";
const reversed = text.split("").reverse().join("");

if (text === reversed) {
  console.log("YES");
} else {
  console.log("NO");
}
