
function isPerfectNumber(number) {
    if (number <= 0) {
        console.log("It's not so perfect.");
        return;
    }

    let sum = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== 1 && i !== number / i) {
                sum += number / i;
            }
        }
    }
    if(sum === number){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");

    }
    
}

isPerfectNumber(28);