function towns(array){

    for (const line of array) {
        
        let [townName,latitude,longitude] = line.split(" | ");
        let town = {
            town:townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        
        console.log(town)
    }

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)