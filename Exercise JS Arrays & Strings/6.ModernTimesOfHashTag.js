function FindWordsWithHashTag(text){

    let regexPath = /#[A-Za-z]+/gm;

    let matches = text.match(regexPath);
    for (let word of matches) {
        console.log(word.substring(1));
        
    }
}

FindWordsWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');