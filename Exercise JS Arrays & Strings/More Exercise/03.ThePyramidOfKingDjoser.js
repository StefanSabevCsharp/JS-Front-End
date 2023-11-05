function PiramidBuilder(size,increment){

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let counter = 1;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;

    while (size > 2) {
        stone = (size - 2) * (size - 2) * increment;
        totalStone += stone;
        if (counter % 5 === 0) {
            lapis = (size * 4 - 4) * increment;
            totalLapis += lapis;
        } else {
            marble = (size * 4 - 4) * increment;
            totalMarble += marble;
        }
        size -= 2;
        counter++;
    }
    gold = size * size * increment;
    totalGold += gold;
    height = Math.floor(counter * increment);
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${height}`);

}

PiramidBuilder(11,1);
PiramidBuilder(11,0.75);
PiramidBuilder(12,1);