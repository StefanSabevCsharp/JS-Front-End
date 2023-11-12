function factorial(num1, divider) {

    let result = 1;
    calculate(num1)


    function calculate(num1) {

        if (num1 == 1) {
            return 1;
        }
        result *= num1;
        calculate(--num1);
    }
    let finalResult = result/divider;
    console.log(finalResult.toFixed(2))
}
factorial(5, 2);