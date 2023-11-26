function extract(content) {

    let text = document.getElementById(content).textContent;
    const pattern = /\(([^)]+)\)/g;

    let matches = text.match(pattern);
    let wordsArr = [];

    if (matches) {
        matches.forEach(match => {
            let words = match.match(/\b\w+\b/g);
            if (words) {
                let concatenatedString = words.join(' ');
                wordsArr.push(concatenatedString);
            }
        });
    }

    return wordsArr.join("; ")
}