function grade(grade){

    let result = '';

    if(grade < 3){
        result = "Fail";
    }else if(grade >= 3 && grade < 3.5){
        result = "Poor";
    }else if(grade >= 3.5 && grade < 4.5){
        result = "Good";
    }else if(grade >= 4.5 && grade < 5.5){
        result = "Very good";
    }else{
        result = "Excellent";
    }
    console.log(`${result} (${grade.toFixed(2)})`)
}

grade(2.99);