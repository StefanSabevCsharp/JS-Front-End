function printEmployees(array){

    let employees = [];

    for (const line of array) {
    
        let obj = {
            name:line,
            personalNumber: Number(line.length)
        }
        employees.push(obj);

    }

    employees.forEach(person => {
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)
    })

}


printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )