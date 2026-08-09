// Remove Adjacent Duplicates From a String
const line = "aabbca";

function removeAdjacentDuplicates(str) {
  let result = "";

  for (const ch of str) {
    if (result.length > 0 && result[result.length - 1] === ch) {
      result = result.slice(0, -1);
    } else {
      result += ch;
    }
  }

  return result;
}

const output = removeAdjacentDuplicates(line);

if (output === "") {
  console.log("EMPTY");
} else {
  console.log(output);
}

