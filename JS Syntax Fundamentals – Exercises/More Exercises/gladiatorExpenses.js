function Gladiator(fights,helmetPrice,swordPrice,shieldPrice,armorPrice){

    let expenses=0;
    let lostHelments=0;
    let lostSwords=0;
    let lostShields=0;
    let lostArmors=0;

    for(let i=1;i<=fights;i++){
        if(i%2===0){
            lostHelments++;
        }
        if(i%3===0){
            lostSwords++;
        }
        if(i%2===0 && i%3===0){
            lostShields++;
            if(lostShields%2===0){
                lostArmors++;
            }
        }
    }
    expenses=helmetPrice*lostHelments+swordPrice*lostSwords+shieldPrice*lostShields+armorPrice*lostArmors;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

Gladiator(23,
    12.50,
    21.50,
    40,
    200
    );