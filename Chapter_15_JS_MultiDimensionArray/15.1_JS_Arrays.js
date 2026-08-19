// 1D array, list - duplicate elements
let results = ["Pass", "Fail", "Pass"];

// 2 D -  array of arrays (like a table/grid)

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i<matrix.length; i++){
   for (let j = 0; j<matrix.length ; j++){
       // console.log(matrix[i][j]);
        process.stdout.write(matrix[i][j]+" ");
    } console.log();

}