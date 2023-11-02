function Solve(text,searchedWord) {
    let count = 0;
    let array = text.split(" ");

    for (const word of array) {
        
        if(word === searchedWord){
            count++;
        }
    }
    console.log(count);

    
}

Solve('softuni is great place for learning new programming languages',
'softuni'

);