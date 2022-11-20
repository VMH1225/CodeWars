function sumTriangularNumbers(n) {
    let sum = 0
  
    if(n > 0){
        for(let i = 1; i <= n; i++){
          sum += (i * (i+1)) / 2
        }
    }
    return sum
  } 

console.log(sumTriangularNumbers(6)) // Output: 56
  /*PREP
  Parameters: 'n' = an integer. it can be positive or negative 
  Return: the sum of each triangle number from 1 to 'n' including 'n'. if 'n' < 0 return 0
  Example: (3) => 10, (-34) => 0, (6) => 56*/