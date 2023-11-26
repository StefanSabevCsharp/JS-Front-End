function phoneBook(info) {

     let array = [];

     for (const contact of info) {
          let line = contact.split(" ");
          let name = line[0];
          let phone = line[1];

          let person = {
               name,
               phone
          }

          let searchedPerson = array.find(p => p.name === name);

          if (searchedPerson) {
               searchedPerson.phone = phone;
          }
          else {
               array.push(person);
          }

     }

     array.forEach(p => {
          console.log(`${p.name} -> ${p.phone}`);
     })

}

phoneBook(['Tim 0834212554',
     'Peter 0877547887',
     'Bill 0896543112',
     'Tim 0876566344']
);