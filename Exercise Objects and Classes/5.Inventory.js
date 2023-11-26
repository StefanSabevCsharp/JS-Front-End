function heroes(array){

    let heroes = [];

    for (const line of array) {
        let [name,level,items] = line.split("/");

        let newHero = {
            name,
            level: Number(level),
            items
        }
        heroes.push(newHero);
    }

    let sortedHeroesByLevel = heroes.sort((a,b) => a.level - b.level);

   for (const hero of sortedHeroesByLevel) {
 
    console.log(`Hero: ${hero.name.trim()}`)
    console.log(`level => ${hero.level}`)
    console.log(`items => ${hero.items.trim()}`)
    
   }
}

heroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )