function extractWords(str) {
 let array = str.split(/\W+/).filter(s => s.length > 0).map(s => s.toUpperCase()) || [];

 const result = array.join(', ');
    console.log(result);
}

extractWords('Hi, how are you?');



function extractWords(str) {
    let array = str.split(/\W+/).filter(s => s.length > 0).map(s => s.toLowerCase()) || [];
       
    const uppercaseWords = array.map(word => word.toUpperCase());
    const result = uppercaseWords.join(', ');
       console.log(result);
   }