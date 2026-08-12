function maxRetryTracker(max){
let attempts = 0;
function tryAgain(testName){
    attempts++;
    if (attempts > max)
    {
        return `${testName} exceeds max tries (${max})`;
    }
    return `Attempts ${attempts}/${max} for ${testName}`; 
};
return tryAgain;
}
let runTCRetry = maxRetryTracker (3);
console.log(runTCRetry("login"));
console.log(runTCRetry("login"));
console.log(runTCRetry("login"));
console.log(runTCRetry("login"));
