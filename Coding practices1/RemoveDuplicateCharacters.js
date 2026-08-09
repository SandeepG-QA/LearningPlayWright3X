const input = "programming";

function removeDuplicateCharacters(str) {
  const seen = new Set();
  let result = "";

  for (const ch of str) {
    if (!seen.has(ch)) {
      seen.add(ch);
      result += ch;
    }
  }

  return result;
}

const output = removeDuplicateCharacters(input);
console.log(output); // expected: "progamin"
