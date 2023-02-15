function sumCubes(n){
    let sum = 0;
    for (i = n; i > 0; i--) {
      sum += i ** 3;   
    };
    return sum;
  };
  
  console.log(sumCubes(9));