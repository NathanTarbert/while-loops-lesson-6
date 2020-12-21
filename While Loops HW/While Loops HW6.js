function walking(walkingArray){

let stepsCounter = 0;
let stepsGoal = 10000;
let goal = 0;
let homeSteps = 0;
let i = 0;

    while(walkingArray[i] != undefined && i < walkingArray.length){

        if(walkingArray[i] == "Going home"){
            i++;
            homeSteps = walkingArray[i];//200
            stepsCounter += homeSteps;
            goal = stepsGoal - stepsCounter;
            console.log(`${goal} more steps to reach the goal.`);
            break;
        }else {

            if(stepsCounter >= stepsGoal){
            stepsCounter += walkingArray[i];
            

            }else{

            if(stepsCounter < walkingArray[i]);
            stepsCounter +=walkingArray[i];
            
        }

        }

    i++;
    }

    if(stepsCounter >= stepsGoal){
        console.log("Goal reached! Good job!");
    }

}

// walking(1000,[1500,2000,6500]);
walking([1500,300,2500,3000,"Going home",200]);
// walking(5078,[ 3368, 5719, 2725, 1734, 2678]);