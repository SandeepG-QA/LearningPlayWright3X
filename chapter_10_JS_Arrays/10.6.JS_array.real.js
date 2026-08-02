let browser = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
console.log(browser.length);
browser.pop(); // Removes the last element from the array
console.log(browser); // Displays the array after removing the last element
browser.push('Brave'); // Adds a new element to the end of the array
console.log(browser);

let removed = browser.shift(); // Removes the first element from the array and returns it
console.log(removed);
console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]); // Displays each element of the array
    if (browser[i] === 'Brave') {
        console.log('Found Brave!');
    }
}
