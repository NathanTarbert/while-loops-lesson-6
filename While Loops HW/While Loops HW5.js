function examPreperation(grades,gradesArray){
    let i = 0;
    let sumAvg = 0;
    let sum = 0;
    let gradesCounter = 0;
    let poorGradesCounter = 0;
    let counter = 0;
    let className = 0;
   
 
    while(gradesArray[i] != "Enough" && i < gradesArray.length){
    
        if(gradesArray[i] === "Enough" || poorGradesCounter > grades){
             break;
        } 
            if(counter % 2 == 0){//odd classes
            className = gradesArray[i];

        }else {//even grades
           
            if(gradesArray[i] > 4){
            sum += gradesArray[i];
            gradesCounter ++;

        }else {
            sum += gradesArray[i];
            poorGradesCounter ++;
            gradesCounter ++;
            
        }
        }    
         
        counter++;
        i++;
    }

    if(gradesArray[i] == "Enough"){
        sumAvg = sum / gradesCounter;
        console.log(`Average score: ${sumAvg}`);
        console.log(`Number of problems: ${gradesCounter}`);
        console.log(`Last problem: ${className}`);
    }
    else{
        console.log(`You need a break, ${poorGradesCounter} poor grades.`);
    }

}


examPreperation(3,["Money",6,"Story",4,"Spring Time",5,"Bus",6,"Enough"]);