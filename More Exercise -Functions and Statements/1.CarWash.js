function carWash(commandsArray) {
    let result = 0;

    for (let index = 0; index < commandsArray.length; index++) {
        const element = commandsArray[index];
        switch (element) {
            case "soap":
                result += 10;
                break;
            case "water":
                result *= 1.2;
                break;
            case "vacuum cleaner":
                result *= 1.25;
                break;
            case "mud":
                result *= 0.9;
                break;

            default:
                break;
        }

    }
    console.log(`The car is ${result.toFixed(2)}% clean.`)
}


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);