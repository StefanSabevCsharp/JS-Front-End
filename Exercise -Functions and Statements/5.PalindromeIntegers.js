function palindrome(array){

    for (let index = 0; index < array.length; index++) {
        const currentNumber = array[index];
        let reversedNumber = parseInt(currentNumber.toString().split('').reverse().join(''));
        if(currentNumber === reversedNumber){
            console.log("true")
        }else{
            console.log("false")
        }
        
    }
}

palindrome([32,2,232,1010]);