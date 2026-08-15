let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g,"qa")); // g mean global in braces

//splitting & joining
"pass,fail,skip".split(","); // ["pass", "fail","skip", "split"]
"hello".split(""); //["h","e","l","l","o"]

// Template literal (Joining with format)

let parts = ["2026", "08", "14"];
let date = parts.join("-");
console.log(date);