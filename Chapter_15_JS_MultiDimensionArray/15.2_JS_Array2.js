let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][0]); // 10
console.log(grid[1][0]); // 40

grid[0][0] = 99;
console.log(grid);
console.log(grid.length) // no of rows - 3
console.log(grid[0].length) // 3
console.log(grid[grid.length-1][grid[0].length-1]); // console.log(grid[2][2]) - > 90

let matrix = [
    ["login", "Pass", 200],
    ["checkout", "Fail", 404],
    ["Search", "Pass", 180]
];

for (let i = 0; i < matrix.length; i++)
{
    for (let j = 0; j < matrix.length; j++)
    {
        process.stdout.write(matrix[i][j]+ " ");
    } console.log(" ");
}
console.log("------------------");
for (let row of matrix){
    for (let cell of row){
        process.stdout.write(cell+" ");
    } console.log(" ");
}
console.log("------------------");
// for Each
matrix.forEach(row =>{
row.forEach(cell => process.stdout.write(cell + " "));
console.log(" ");
});