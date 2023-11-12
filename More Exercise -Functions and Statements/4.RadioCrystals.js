function crystalThickness(array) {
    let desiredThickness = array[0];

    for (let index = 1; index < array.length; index++) {
        let currentThickness = array[index];
        console.log(`Processing chunk ${currentThickness} microns`);
        processCrystal(desiredThickness, currentThickness, index);

        function processCrystal(desiredThickness, currentThickness, index) {
            let cut = 0;
            let lap = 0;
            let grind = 0;
            let etch = 0;
            let xRay = 0;
            let transportAndWash = 0;

            while (desiredThickness < currentThickness) {
                if (currentThickness / 4 >= desiredThickness) {
                    currentThickness /= 4;
                    cut++;
                } else if (currentThickness * 0.8 >= desiredThickness) {
                    currentThickness *= 0.8;
                    lap++;
                } else if (currentThickness - 20 >= desiredThickness) {
                    currentThickness -= 20;
                    grind++;
                } else if (currentThickness - 2 >= desiredThickness) {
                    currentThickness -= 2;
                    etch++;
                } else {
                    currentThickness += 1;
                    xRay++;
                }
                transportAndWash++;
            }
            print(index, cut, lap, grind, etch, xRay, transportAndWash);
        }

        function print(index, cutCount, lapCount, grindCount, etchCount, xRayCount, transportAndWashCount) {
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log('Transporting and washing');
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log('Transporting and washing');
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log('Transporting and washing');
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log('Transporting and washing');
            }
            if (xRayCount > 0) {
                console.log(`X-ray x${xRayCount}`);
            }
            console.log(`Finished crystal ${desiredThickness} microns`);
        }
    }
}

crystalThickness([1000, 4000, 8100]);
