
 function specialNumber(num) {
    
    let number = num;
    let isSpecial = true;
  
    while (num > 0){
      let n = num % 10;
      if (n != 0 && (number % n) != 0) {
        isSpecial = false;
        break;
      } 
      num = Math.floor(n / 10);
    }
    if (isSpecial){
      console.log(`${number} is a special number!`);
    } else {
      console.log(`${number} is not a special number!`);
    }
  
  
  
  }
  
  specialNumber(204);
  specialNumber(23);