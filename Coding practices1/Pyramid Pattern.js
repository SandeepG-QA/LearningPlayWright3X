//Pyramid Pattern
/* Print a pyramid pattern using stars. For input n, print n rows where row i has (n-i) 
leading spaces and (2*i-1) stars.*/
let n = 5;
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  //another way of above program
  let n1 = 6;
  for (let i = 1; i<=n1 ; i++)
  {
    let row = " ";
    for (let j= 1; j<=n1-i; j++){
      row +=" ";
    }
    for (let j = 1; j <=2*i-1; j++){
      row = row + "*";
    }console.log(row);
  }

