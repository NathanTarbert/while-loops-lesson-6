// function decreasingNumbers(n){

//     while(n>=1){
//         console.log(n);
//         n--;
//     }

// }
// decreasingNumbers(5);

// function timesNumber(n){

//     let result = 1;
//     while(result <= n){
       
//         console.log(result);
//         result = 2 * result + 1;
//     }


// }
// timesNumber(8);
// timesNumber(15);

// function oddNumber(inputNumbers){
//     let number = inputNumbers.shift();
//     while(number != undefined){
//         if(number % 2 == 0){
//          console.log(number);
//     }
//     number = inputNumbers.shift();
// } 


// }
// oddNumber([2,4,8,3,2,5,6,7]);

// function incrementOrDecrement(startValue,commandsArray){
//     let command = commandsArray.shift();
//     while(command != "End"){
//         if(command == "Inc"){
//             startValue++;
//         }else {
//             startValue--;
//         }
//         command = commandsArray.shift();

//     }
//         console.log(startValue);

// }
// incrementOrDecrement(5,["Inc","End"]);
// incrementOrDecrement(5,["Dec","End"]);

// function sumNumbers(nums){

//     let sum = 0;
//     while(true){
//         let nextNum = nums.shift();
//         if(nextNum == undefined) {
//             break;
//         }
//         sum += nextNum;
//         console.log("Sum",sum);
//     }
//   }
// sumNumbers([10,20,30]);

// function sumNumbers(number){
//     let sum = 0;
//     while(number > 0){
//         let onesPlace = number % 10;
//         sum += onesPlace;
//         number = Math.floor(number / 10);
//     }
//     console.log(sum);

// }
// sumNumbers(5634);

// function favoriteBook(bookToFind, booksLibrary){
//     let book = booksLibrary.shift();
//     while(book != bookToFind || book != undefined){
    
//         console.log("Invalid book:" + book);
//         book = booksLibrary.shift();
//     }
//     if(book == bookToFind){
//         console.log("Book Found!");
//     } 
// }
// favoriteBook("Alice in Wonderland",["Winnie The Pooh","Alice in Wonderland"]);

// function minMax(numbersArray){
//     let num = numbersArray.shift();
//     let min = Infinity;
//     let max = -Infinity;
//     while(num != "END"){
//         if(num > max);

//     }
//     if(num < min){
//         min = num;
    
//     num = numbersArray.shift;
    
//     console.log(`Min number:${min}`);
//     console.log(`Max number: ${max}`);
// }
// }
// minMax([10,20,304,0,50,"END"]);

