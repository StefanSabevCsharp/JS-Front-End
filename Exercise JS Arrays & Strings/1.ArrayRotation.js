function ArrayRotation(array,rotations){
    for (let index = 0; index < rotations; index++) {
        let element = array.shift();
        array.push(element)
        
    }
    console.log(array.join(' '))

}

ArrayRotation([51, 47, 32, 61, 21], 2)
//32 61 21 51 47