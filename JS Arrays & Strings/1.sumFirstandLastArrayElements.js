function SumElements(array){
    let firstElement = Number(array[0]);
    let lastElement = Number(array[array.length - 1]);
    let sum = firstElement + lastElement;
    console.log(sum);
}

function SumElements2(array){
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    let sum = firstElement + lastElement;
    console.log(sum);
}