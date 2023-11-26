function movieList(array){

 let movies = [];

    for (const line of array) {
        
        if(line.includes("addMovie")){
            let movieName = line.substring(9);
            let movie = {
                name:movieName
            }
            movies.push(movie);
        }else if(line.includes("directedBy")){
            let [movieName,director] = line.split(" directedBy ");
            let movie = movies.find(x => x.name === movieName);
            if(movie){
                movie.director = director;
            }
        }else if(line.includes("onDate")){
            let [movieName,date] = line.split(" onDate ");
            let movie = movies.find(x => x.name === movieName);
            if(movie){
                movie.date = date;
            }
        }
    }

    movies.forEach(movie => {
        if(movie.hasOwnProperty("name") && movie.hasOwnProperty("director") && movie.hasOwnProperty("date")){
            console.log(JSON.stringify(movie))
        }
    })
}

movieList([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )