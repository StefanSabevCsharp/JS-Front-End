function printReversed(char1, char2, char3){
    let arr = [char1, char2, char3];
    let reversedArr = arr.reverse();
    console.log(reversedArr.join(" "));
}

printReversed('A', 'B', 'C');