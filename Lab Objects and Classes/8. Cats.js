function catCreator(array){

    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let catArray = [];
    for (const line of array) {
        let [catName,catAge] = line.split(" ");
        let cat = new Cat(catName,catAge);
        catArray.push(cat);
    }

    for (const cat of catArray) {
        cat.meow();
    }

}

catCreator(['Mellow 2', 'Tom 5'])