function attachEvents() {
   
    let input = document.getElementById("location");
    let btn = document.getElementById("submit");

    let forecast = document.getElementById("forecast");
    let currentForecast = document.getElementById("current");
    let upcomingForecast = document.getElementById("upcoming");

    let baseUrl = "http://localhost:3030/jsonstore/forecaster/locations";

    let symbols = {
        "Sunny": "&#x2600;",
        "Partly sunny": "&#x26C5;",
        "Overcast": "&#x2601;",
        "Rain": "&#x2614;",
        "Degrees": "&#176;"
    }

    btn.addEventListener("click", getWeather);

    function getWeather(){

        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            let location = data.find(x => x.name.toLowerCase() == input.value.toLowerCase());
            if(location == undefined){
                throw new Error("Invalid location");
            }
            
            return location;
        })
        .catch(error => {
            forecast.style.display = "block";
            forecast.textContent = "Error";
        });



        // .then(data => {
        //     let current = fetch(`http://localhost:3030/jsonstore/forecaster/today/${data.code}`)
        //     .then(res => res.json());
            

        //     let upcoming = fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${data.code}`)
        //     .then(res => res.json());

        //     return Promise.all([current, upcoming]);
        // })
        
        // .catch(error => {
        //     forecast.style.display = "block";
        //     forecast.textContent = "Error";
        // })
            
        
    }

   

}

attachEvents();