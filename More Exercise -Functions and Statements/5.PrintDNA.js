function generateDNAHelix(length) {
    const helixSymbols = 'ATCGTTAGGG';
    let helixIndex = 0;

    for (let row = 0; row < length; row++) {
        let line = '';
        if (row % 4 === 0) {
            line = `**${helixSymbols[0]}${helixSymbols[1]}**`;
            helixIndex = 2;
        } else if ((row - 1) % 4 === 0) {
            line = `*${helixSymbols[helixIndex]}--${helixSymbols[helixIndex + 1]}*`;
            helixIndex += 2;
        } else if ((row - 2) % 4 === 0) {
            line = `${helixSymbols[helixIndex]}----${helixSymbols[helixIndex + 1]}`;
            helixIndex += 2;
        } else if ((row - 3) % 4 === 0) {
            line = `*${helixSymbols[helixIndex]}--${helixSymbols[helixIndex + 1]}*`;
            helixIndex += 2;
        }

        console.log(line);
    }
}

// Example usage:
generateDNAHelix(10);
