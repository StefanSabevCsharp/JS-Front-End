function CalculateDifference(array){
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < array.length; index++) {
       if(array[index] % 2 === 0){
           evenSum += array[index];
       }else{
           oddSum += array[index];
       }
        
    }
    console.log(evenSum - oddSum);
}

CalculateDifference([1,2,3,4,5,6]);