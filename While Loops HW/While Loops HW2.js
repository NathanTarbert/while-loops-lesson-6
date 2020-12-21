function reportSystem(goal,cashCreditArray){
    let i = 0;
    let creditCard = 0;
    let cash = 0;
    let cashCounter = 0;
    let creditCardCounter = 0;
    let creditCardSum = 0;
    let cashSum = 0;
    let creditCardAvg = 0;
    let cashAvg = 0;
    let counter = 1;
 
    while(cashCreditArray[i] != "End" && i < cashCreditArray.length){
    
        if(cashCreditArray[i] === "End"){
            break;
        } 
        
        if(counter % 2 == 0){//Credit card transaction

            if(cashCreditArray[i] < 10){
                
                console.log("Error in transaction!");
            }else {
                creditCardSum += cashCreditArray[i];
                creditCardCounter++;
                console.log("Product sold!");
            }
        
        }else{

            if(cashCreditArray[i] > 100 ) {//Cash transaction
           
                console.log("Error in transaction!");
            
            }else {
                cashSum += cashCreditArray[i];
                cashCounter++;    
                console.log("Product sold!");
            }
        }
    i++;
    counter++;
    }

    if(cashCreditArray[i] === "End"){
        console.log("Failed to collect required money for charity.");

    }else if((cashSum + creditCardSum) >= goal){
        creditCardAvg = creditCardSum / creditCardCounter;
        cashAvg = cashSum / cashCounter;
        console.log(`Average CS: ${cashAvg.toFixed(2)}`);
        console.log(`Average CC: ${creditCardAvg.toFixed(2)}`);
        
        
    }else {
        console.log("Failed to collect required money for charity.");
    }
     
    
}

reportSystem(500,[120,8,63,256,78,317]);