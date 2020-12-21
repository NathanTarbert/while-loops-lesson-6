function favoriteBook(favoriteBook,books){

    var j = 0;

    while(books[j] != favoriteBook || j >= books.length){
        console.log(`Invalid book: ${books[j]}`);
        j++;
    }
        if(books[j] == favoriteBook){
            console.log("Book found!")
        }

}
favoriteBook("Alice in Wonderland",["Winnie the Pooh","Alice in Wonderland"]);