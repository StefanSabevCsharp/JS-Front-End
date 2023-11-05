function printArray(array,step){

    let newArray = [];

    for (let index = 0; index < array.length; index+=step) {
        newArray.push(array[index]);
    }
    return newArray;

}

printArray(['5', '20', '31', '4', '20'], 2);