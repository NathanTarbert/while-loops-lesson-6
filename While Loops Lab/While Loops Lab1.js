function sumDigits(n){

    let sum = 0;
    let num = n % 0;

    while(num % 10 > 0){
        num = n % 10;
        n = Math.floor(n/10);
        sum += num;

    }
    console.log(sum);
}
sumDigits(5643);
sumDigits(120);