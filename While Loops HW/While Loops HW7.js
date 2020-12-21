function streamOfLetters(lettersArray){


let emptyString = '';
let j = 0;
let n = 0;
let o = 0;
let c = 0;




    while(lettersArray[j] != "End" && j < lettersArray.length){
    
        if(lettersArray[j] == "End"){
            break;
        }
        if(lettersArray[j] == "n" || lettersArray[j] == "o" || lettersArray[j] == "c"){

            if(lettersArray[j] == "n"){
                n++;
                if(n >= 2){
                    emptyString += lettersArray[j] + '';
            }
            }else if(lettersArray[j] + '' == "o"){
                o++;
                if(o >= 2){
                    emptyString += lettersArray[j] + '';
            }
            }else if(lettersArray[j] + '' == "c"){
                c++;
                if(c >= 2){
                    emptyString += lettersArray[j] + '';
            }
            }

        }else {

            emptyString += lettersArray[j] + '';
        }
    j++;
        
    }
        console.log(emptyString);
}

streamOfLetters(["H","n","e","l","l","o","o","c","End"]);