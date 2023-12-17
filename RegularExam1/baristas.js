function solve(array){

    let numberOfBaristas = Number(array.shift());
    let allBaristas = [];

    for (let index = 0; index < numberOfBaristas; index++) {
        let currentBarista = array.shift().split(" ");
        let name = currentBarista.shift();
        let shift = currentBarista.shift();
        let drinks = currentBarista.shift().split(",");
        let barista = {
            name,
            shift,
            drinks
        }
        allBaristas.push(barista);
    }
   
    let line = array.shift();

    while(line !== "Closed"){

        let [command, name, shift, drink] = line.split(" / ");
        let currentBarista = allBaristas.find(x => x.name === name);
        let baristasDrinks = currentBarista.drinks;
        let baristaShift = currentBarista.shift;

        if(command === "Prepare"){
            if(shift === baristaShift && baristasDrinks.includes(drink)){
                console.log(`${currentBarista.name} has prepared a ${drink} for you!`);
            }else{
                console.log(`${currentBarista.name} is not available to prepare a ${drink}.`);
            }

        }else if(command === "Change Shift"){

            let newShift = shift;
            currentBarista.shift = newShift;
            console.log(`${currentBarista.name} has updated his shift to: ${newShift}`);
        }else if(command === "Learn"){
            let newCoffeeType = shift;
            if(baristasDrinks.includes(newCoffeeType)){
                console.log(`${currentBarista.name} knows how to make ${newCoffeeType}.`);
            }else{
                currentBarista.drinks.push(newCoffeeType);
                console.log(`${currentBarista.name} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }



        line = array.shift();
    }

    

    for (const barista of allBaristas) {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.drinks.join(", ")}`);
    }


}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );