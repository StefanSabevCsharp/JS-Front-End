function printWords(array) {
  let searchedWords = array.splice(0, 1)[0].split(" ");
  let counter = {};

  for (const word of searchedWords) {
    counter[word] = 0;

    for (const w of array) {
      if (w === word) {
        counter[w]++;
      }
    }
  }
  let sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}

printWords([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
