function createPerson(firstname,lastname,age){
   let person = {
    firstname,
    lastname,
    age
   }
   console.log(person);
   return person;
}

createPerson("John","Doe",25);