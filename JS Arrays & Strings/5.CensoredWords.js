// function ReplaceText(input, word) {

   
//     let censored = input.replace(word, '*'.repeat(word.length));
//     console.log(censored);
// }

// ReplaceText('A small sentence with some words', 'small');

// // Compare this snippet from 4.%20substring.js:
// function ReplaceText(text, word) {
//     /
//     var words = text.split(' ');

//     
//     var replacedWords = words.map(function (w) {
//         return w === word ? '*'.repeat(word.length) : w;
//     });

//     
//     var replacedText = replacedWords.join(' ');

//     console.log(replacedText);
//     return replacedText;
// }

function ReplaceText(text, word) {
    
    let regex = new RegExp(word, 'g');
    var replacedText = text.replace(regex, '*'.repeat(word.length));
    console.log(replacedText);
}

ReplaceText('A small sentence with some words', 'small');