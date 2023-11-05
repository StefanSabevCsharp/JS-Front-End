function PascalSplitter(text){
    let path = /[A-Z][a-z]*/gm
    let matches = text.match(path);
    console.log(matches.join(', '));


}

PascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');