function SortedArray(array){
    array.sort((a,b) => a-b);

    let result = [];

   while(array.length > 0){
       result.push(array.shift());
       result.push(array.pop());
   }
   return result;
}

SortedArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])