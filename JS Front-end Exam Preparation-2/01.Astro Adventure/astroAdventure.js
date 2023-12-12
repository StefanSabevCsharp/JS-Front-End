function solve(array) {

    let numberOfAustronafts = Number(array.shift());
    let team = [];

    for (let index = 0; index < numberOfAustronafts; index++) {
        const austronaftInfo = array.shift().split(" ");
        let obj = {
            name: austronaftInfo[0],
            oxygen: Number(austronaftInfo[1]),
            energy: Number(austronaftInfo[2])
        }
        
        team.push(obj);

    }
    for (const item of array) {
        
    }

    let line = array.shift().split(" - ");
    let command = line[0];

    while (command !== "End") {

        let austronaftName = line[1];
        let austronaft = team.find(x => x.name === austronaftName);

        switch (command) {


            case "Explore":
                let energy = Number(line[2]);
                if(austronaft.energy >= energy){
                    austronaft.energy -= energy;
                    console.log(`${austronaft.name} has successfully explored a new area and now has ${austronaft.energy} energy!`);
                }else{
                    console.log(`${austronaft.name} does not have enough energy to explore!`);
                }
                break;
            case "Refuel":
                let amount = Number(line[2]);
                let oldEnergy = austronaft.energy;
                austronaft.energy += amount;
                if(austronaft.energy > 200){
                    austronaft.energy = 200;
                }
                let recovered = austronaft.energy - oldEnergy;
                console.log(`${austronaft.name} refueled their energy by ${recovered}!`);


                break;
            case "Breathe":
                let amountOfOxigen = Number(line[2]);
                let oldOxigen = austronaft.oxygen;
                austronaft.oxygen += amountOfOxigen;
                if(austronaft.oxygen > 100){
                    austronaft.oxygen = 100;
                }
                let recoveredOxigen = austronaft.oxygen - oldOxigen;
                console.log(`${austronaft.name} took a breath and recovered ${recoveredOxigen} oxygen!`);

                break;
        }



        line = array.shift().split(" - ");
        command = line[0];
    }


    for (const austronaft of team) {
        console.log(`Astronaut: ${austronaft.name}, Oxygen: ${austronaft.oxygen}, Energy: ${austronaft.energy}`);
    }

}

solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
);