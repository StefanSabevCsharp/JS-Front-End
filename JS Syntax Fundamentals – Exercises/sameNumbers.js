function solve(num){
    let isAllSame = true;
    let sum = 0;
    for(let i = 0; i < num.toString().length; i++){
        sum += Number(num.toString()[i]);
        if(num.toString()[0] == num.toString()[i] && isAllSame !== false){
            isAllSame = true;
        }else{
            isAllSame = false;
        }

    }
    if(isAllSame){
        console.log('true');
    }else{
        console.log('false');
    }
    console.log(sum);
    
}

solve(1234);