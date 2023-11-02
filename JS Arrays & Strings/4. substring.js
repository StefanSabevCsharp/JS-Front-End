function printResult(string,num1,num2){
    let result = "";

    result = string.substring(num1,num2 + num1);
    console.log(result);
}
printResult('SkipWord', 4, 7);