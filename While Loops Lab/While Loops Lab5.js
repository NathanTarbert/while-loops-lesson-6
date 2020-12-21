function specialBonus(stopNum,nums){


    let previousNum = stopNum;

    while(true){
        let number = nums.shift();
        if(number == stopNum || number == undefined){
            break;
        }
        previousNum = number;
    }
    console.log(previousNum * 1.2);

}
specialBonus(25,[20,30,25]);