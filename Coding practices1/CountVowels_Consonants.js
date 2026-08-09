// Count Vowels and Consonants
const data = "Hello World";
const str = data.toLowerCase();

let vowelCount = 0;
let consonantCount = 0;

for (const char of str) {
  if (char >= "a" && char <= "z") {
    if ("aeiou".includes(char)) {
      vowelCount += 1;
    } else {
      consonantCount += 1;
    }
  }
}
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);