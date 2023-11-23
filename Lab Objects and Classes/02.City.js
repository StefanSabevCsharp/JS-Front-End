function printCity(city) {

    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);
    }

}


printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)