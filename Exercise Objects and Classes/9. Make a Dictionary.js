function makeDict(array){

    let dict = {};

    for (const line of array) {
        
        let obj = JSON.parse(line);
        let key = Object.keys(obj)[0];
        let value = Object.values(obj)[0];

        dict[key] = value;
    }

    let sorted = Object.entries(dict).sort((a,b) => a[0].localeCompare(b[0]));

    for (const [key,value] of sorted) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}

makeDict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )