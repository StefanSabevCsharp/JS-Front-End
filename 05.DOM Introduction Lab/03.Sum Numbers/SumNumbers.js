function calc() {
   let firstNum = Number(document.getElementById("num1").value);
   let secondNum = Number(document.getElementById("num2").value);
    let result = firstNum + secondNum;
    console.log(result);
    document.getElementById("sum").value = result;
}
