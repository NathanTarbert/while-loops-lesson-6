function minAndMax(numbersArray){

    var maxNum = -Infinity;
    var minNum = Infinity;
    var j = 0;

    while(numbersArray[j] != "END" && j < numbersArray.length){

        if(numbersArray[j] > maxNum){
            maxNum = numbersArray[j];
        }
        if(numbersArray[j]< minNum){
            minNum = numbersArray[j];
        }
        j++;
        }
        
        console.log(`Min number: ${minNum}`);
        console.log(`Max number: ${maxNum}`);

}
minAndMax([10,20,304,0,50,"END"]);