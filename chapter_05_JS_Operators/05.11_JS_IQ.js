let enviornment = "staging";
let baseurl = enviornment === "production" ? 
"https://staging.example.com" : "https://production.example.com";
console.log(baseurl); // https://production.example.com
