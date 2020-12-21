function sumDigits(n) { 
    let sum = 0;
    n = Math.abs(n);
    let num = n % 10;
    
    
    while (n > 0) {
      num = n % 10;
      n = Math.floor(n/10);
      sum += num;
      
    }
  console.log(sum);
  
}
  
  
  sumDigits(5634);
  sumDigits(150);
  sumDigits(-532);
  
  // input 5634 | 5 + 6 + 3 + 4 | output 18
  // input -532 | -5 + 3 + 2 | output 0