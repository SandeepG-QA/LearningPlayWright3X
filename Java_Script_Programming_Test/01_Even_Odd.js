const number = 12;
function checkerEvenOdd(number){
    if (number % 2 == 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(`${number} is a ${checkerEvenOdd(number)} `)