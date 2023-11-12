function calculateNumbers(array){
    let oddSum = 0;
    let evenSum = 0;
    let arr = [...String(array)].map(Number);

    // let numArray = array.toString().split('').map(Number); alternative

    for (let index = 0; index < arr.length; index++) {

        const currentNum = arr[index];

        if(currentNum % 2 == 0){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
} 

calculateNumbers(1000435)