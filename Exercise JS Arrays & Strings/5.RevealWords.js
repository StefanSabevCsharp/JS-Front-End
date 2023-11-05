function ReveilWords(words,text){
    let array = words.split(', ');
    let textArray = text.split(' ');

    for (let index = 0; index < array.length; index++) {

        for (let j = 0; j < textArray.length; j++) {
            
            let isMatch = array[index].length === textArray[j].length && textArray[j].includes("*");

            if(isMatch){
                textArray[j] = array[index];
            }
            
        }
        
    }

    console.log(textArray.join(' '));


}

ReveilWords('great, learning',
'softuni is ***** place for ******** new programming languages'

);