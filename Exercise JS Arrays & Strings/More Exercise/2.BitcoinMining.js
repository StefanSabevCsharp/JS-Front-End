function CalculateMoney(array) {

    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let totalMoney = 0;
    let dayOfFirstBitcoin = 0;
    let countBitcoin = 0;
    let days = 1

    for (let index = 0; index < array.length; index++) {

        let moneyForThisDay = Number(array[index]) * goldPrice;
        if (days % 3 === 0) {
            moneyForThisDay *= 0.7;
        }
        totalMoney += moneyForThisDay;
        if (totalMoney >= bitcoinPrice && dayOfFirstBitcoin === 0) {
            dayOfFirstBitcoin = days;
        }
        while (totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice;
            countBitcoin++;
        }
        days++;

    }

    console.log(`Bought bitcoins: ${countBitcoin}`)
    if(countBitcoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)


}

CalculateMoney([100, 200, 300]);