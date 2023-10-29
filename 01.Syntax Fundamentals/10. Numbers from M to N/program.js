function solve(number1,number2){
    let n1 = Number(number1);
    let n2 = Number(number2);

    for(let i = n1; i >= n2; i--){
        console.log(i);
    }
}

solve(6,2);