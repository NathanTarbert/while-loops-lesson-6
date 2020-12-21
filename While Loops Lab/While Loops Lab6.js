

function accountBalance(cashArray) {
  
   var i = 0;
   var cash = 0;
   var sumPos = 0;
   var sumNeg = 0;

   while(cashArray[i] != "End" && i < cashArray.length){
   
        if(cashArray[i] == "End"){
            break;
        
        }else if(cashArray[i] > 0){
            sumPos += cashArray[i];
            cash = Number(cashArray[i]);
            console.log(`Increase: ${cash.toFixed(2)}`);

        }else {
            sumNeg -= cashArray[i];
            cash = Math.abs(cashArray[i]);
            console.log(`Decrease: ${cash.toFixed(2)}`);
        }

        i++;
    }
        
        var totalBalance = sumPos - sumNeg;
        console.log(`Balance: ${totalBalance.toFixed(2)}`);
    
  }
  
  accountBalance([500, 15.5, -80.35, 'End']);