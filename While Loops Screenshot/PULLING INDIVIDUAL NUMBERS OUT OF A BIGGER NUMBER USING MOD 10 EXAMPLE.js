
// function oddNum(numArray){

//     var number = numArray.shift()

//     while (number % 2 == 0){
        
//         number = numArray.shift();
//     }
//     console.log(number);
// }

// oddNum([2,4,8,3]);

function specialDivision(number){

    let digits = number;
    let isDivisable = false;
    
    while(digits > 0){
        let onesPlaceNum = digits % 10;

        if( onesPlaceNum == 0 || number % onesPlaceNum == 0){
            isDivisable = true;
        }else{
            isDivisable = false;
            break;
        }
        digits = Math.floor(digits/10);
    }

    if(isDivisable){
        console.log(`${number} is special`);
    }else{
        console.log(`${number} is not special`);
    }

}

specialDivision(204);