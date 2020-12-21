// ● Detergent quantity: 2 * 750 = 1500 ml
// ● 53 plates are loaded: 53 * 5 = 265 ml,
// ○ 1500 - 265 = 1235 ml. (leftover)
// ● 65 plates are loaded: 65 * 5 = 325 ml
// ○ 1235 - 325 = 910 ml (leftover)
// ● 55 pots are loaded: 55 * 15 = 825 ml
// ○ 910- 825 = 85 ml (leftover)
// ● We receive the command "End", therefore the corresponding message is printed: 118 plates and 55 pots
// were washed.
// ○ number of plates = 53 + 65 = 118
// ○ number of pots = 55

function dishwasher(detergent,dishwasherArray){
    var i = 0;
    var plates = 0;
    var pots = 0;
    var counter = 1;
    var addedPlates = 0;
    var addedPots = 0;
    var soapLeftOver = detergent * 750;
 
    while(dishwasherArray[i] != "End" && i < dishwasherArray.length){
    
         if(dishwasherArray[i] === "End"){
             break;
         
         }else if(counter % 3 == 0){//pots
            pots = dishwasherArray[i] * 15; 
            soapLeftOver -= pots;
            addedPots += dishwasherArray[i];

         }else {//plates
            plates = dishwasherArray[i] * 5;
            soapLeftOver -= plates;
            addedPlates += dishwasherArray[i];
            

         }
         counter++;
         i++;
    }
        if(soapLeftOver > 0){
                
         console.log(`Detergent was enough!`);
         console.log(`${addedPlates} dishes and ${addedPots} pots were washed.`);
         console.log(`Leftover detergent ${soapLeftOver} ml`)
        }else {
            console.log(`Not enough detergent, ${soapLeftOver   } ml more necessary`);
        }
     
}

dishwasher(2,[53,65,55,"End"]);