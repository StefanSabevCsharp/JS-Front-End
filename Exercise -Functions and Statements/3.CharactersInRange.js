function printCharacters(char1, char2) {

    let start = char1.charCodeAt();
    let end = char2.charCodeAt();
    let result = '';

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let index = start + 1; index < end; index++) {
        let currentChar = String.fromCharCode(index);
        result += currentChar + ' ';

    }
    console.log(result);

}

printCharacters('C',
'#'

);