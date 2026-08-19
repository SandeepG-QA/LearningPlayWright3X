let config = {}; //empty object
config.browser = "chrome"; // first key
config.timeout = 5000; // second key
console.log(config); // print
config.timeout = 6000; // latest one.
console.log(config);
delete config.browser;// deleting key.
console.log(config);
