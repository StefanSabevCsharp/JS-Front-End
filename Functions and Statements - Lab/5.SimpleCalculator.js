function calculate(num1,num2,operator){

    let obj = {
        'add': num1 + num2,
        'subtract': num1 - num2,
        'multiply': num1 * num2,
        'divide': num1 / num2,
        
    };
    console.log(obj[operator]);
}

calculate(5,5,'multiply');