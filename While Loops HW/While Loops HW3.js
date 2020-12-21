function graduation(student,graduationArray){
    let avgGrade = 0;
    let counter = 0;
    let gradeSum = 0;
    let i = 0;

    while(graduationArray[i] < graduationArray.length){
    
        if(graduationArray[i] < 4){

        break;
            
        }else {
        
            if(graduationArray[i] >= 4){
            gradeSum += graduationArray[i];
            counter++;    
            }
        }
         
    i++;
    }
    
        if(graduationArray[i] < 4){
            console.log("repeat class");
        }
        else {
            avgGrade = gradeSum / counter;
            console.log(`${student} graduated. Average grade: ${avgGrade.toFixed(2)}`);
        }
}
graduation("John",[4,5.5,6,5.43,4.5,6,5.55,5,6,6,5.43,5]);