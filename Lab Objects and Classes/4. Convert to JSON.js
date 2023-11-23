function convertObjToJson(name, lastName, hairColor) {

    const obj = {
        name,
        lastName,
        hairColor
    }

    let string = JSON.stringify(obj);
    console.log(string);

}

convertObjToJson('George', 'Jones', 'Brown')