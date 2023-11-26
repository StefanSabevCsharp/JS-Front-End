function adressBook(array) {

    let phones = {};

    for (const line of array) {

        let [key, value] = line.split(":");
        phones[key] = value;

    }

    let sortedKeys = Object.keys(phones).sort();
    let sortedObject = {};

    sortedKeys.forEach(k =>{
        sortedObject[k] =phones[k];
    })

    for (const key in sortedObject) {
        console.log(`${key} -> ${phones[key]}`)
    }

}

adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)