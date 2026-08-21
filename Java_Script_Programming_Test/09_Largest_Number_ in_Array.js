function largestnum(arr){
    let largest = arr [0];
    for (let i = 0; i <= arr.length; i++)
    {
        if (arr[i] > largest){
            largest = arr[i];
        }
    }return largest;
} 

let number = [10, 20, 80, 40, 50];
console.log("Largest Number :", largestnum(number));

