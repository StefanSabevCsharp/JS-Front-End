function FindIfTextContainsWords(word, text) {

    let output = `${word} not found!`;

    let textAsArray = text.toLowerCase().split(' ');

    for (let wordinText of textAsArray) {

        if(wordinText=== word.toLowerCase()){
            output = wordinText;
            break;
        }
    }


    console.log(output);
}

FindIfTextContainsWords('javascript',
    'JavaScript is the best programming language'
);