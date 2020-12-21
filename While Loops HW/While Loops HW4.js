function oldBooks(bookFound,library,oldBooksArray){

    let bookCounter = 0;
    let i = 0;

    while(oldBooksArray[i] != bookFound && i < oldBooksArray.length){
    
        if(oldBooksArray[i] == bookFound){
            bookCounter++;
            break;
        }else if(oldBooksArray[i] != bookFound){
            bookCounter++;
        }
    i++;     
    }
        if(oldBooksArray[i] == bookFound){
        console.log(`You checked ${bookCounter} books and found it.`);

        }else {
        console.log("The book you searched for is not here!");
        console.log(`You checked ${bookCounter} books.`);
        }

}

oldBooks("Troy",8,["Stronger","Life Style","Troy"]);