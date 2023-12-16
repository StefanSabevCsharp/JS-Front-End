function solve(array) {

    let ridersCount = Number(array.shift());

    let ridersObj = [];

    for (let index = 0; index < ridersCount; index++) {
        let currentRider = array.shift().split('|');
        let currentRiderObj = {
            name: currentRider[0],
            fuelCapacity: Number(currentRider[1]),
            position: Number(currentRider[2])
        };
        ridersObj.push(currentRiderObj);
    };

    let line = array.shift();

    while (line !== 'Finish') {

        let command = line.split(' - ')[0];


        if (command === "StopForFuel") {
            let currentRider = line.split(' - ')[1];
            let fuel = Number(line.split(' - ')[2]);
            let changedPosition = Number(line.split(' - ')[3]);
            let riderObj = ridersObj.find(x => x.name === currentRider);

            if (riderObj.fuelCapacity < fuel) {
                riderObj.position = changedPosition;
                console.log(`${riderObj.name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${riderObj.name} does not need to stop for fuel!`);
            }
        } else if (command === "Overtaking") {
            let rider1 = line.split(' - ')[1];
            let rider2 = line.split(' - ')[2];

            let rider1Obj = ridersObj.find(x => x.name === rider1);
            let rider2Obj = ridersObj.find(x => x.name === rider2);

            if (rider1Obj.position < rider2Obj.position) {
                let temp = rider1Obj.position;
                rider1Obj.position = rider2Obj.position;
                rider2Obj.position = temp;
                console.log(`${rider1Obj.name} overtook ${rider2Obj.name}!`);
            }
        } else if (command === "EngineFail") {
            let rider1 = line.split(' - ')[1];
            let rider1Obj = ridersObj.find(x => x.name === rider1);
            let lapsLeft = Number(line.split(' - ')[2]);
            console.log(`${rider1Obj.name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            let riderIndex = ridersObj.indexOf(rider1Obj);
            ridersObj.splice(riderIndex, 1);
        }

        line = array.shift();
    }

    let sortedRiders = ridersObj.sort((a, b) => a.position - b.position);

    for (const rider of sortedRiders) {
        console.log(rider.name);
        console.log(` Final position: ${rider.position}`);
    }
}

solve((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]))