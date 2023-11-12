function sumOfThree(num1, num2, num3) {

    let sum = function (num1, num2) {
        return num1 + num2;
    }
    let result = sum(num1, num2);

    let subtract = function (sum, num3) {
        return sum - num3;
    }
    result = subtract(result, num3);

    console.log(result);
}

sumOfThree(23, 6, 10);