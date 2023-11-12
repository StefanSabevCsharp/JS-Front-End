function printMatrix(number){
    
    let line = "";
    for (let index = 0; index < number; index++) {

        line += `${number} `
       
    }
    for (let index = 0; index < number; index++) {
        
        console.log(line);
    }
}

printMatrix(3)