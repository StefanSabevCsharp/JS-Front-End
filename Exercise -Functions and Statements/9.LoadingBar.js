function loading(num) {

    let array = [];
    let iterations = num / 10;
    for (let index = 0; index < iterations; index++) {
        array[index] = "%";
    }
    for (let index = iterations; index < 10; index++) {
        array[index] = ".";
    }
    let result = `${num}% [${array.join("")}]\nStill loading...`;
    if (num < 100) {
        console.log(result)
    } else {
        result = `100% Complete!\n${num}% [${array.join("")}]`;
        console.log(result)
    }
}

loading(100);