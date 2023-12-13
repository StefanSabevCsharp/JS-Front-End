const baseUrl = "http://localhost:3030/jsonstore/tasks/"

let loadBtn = document.getElementById("load-history");
let addWeatherBtn = document.getElementById("add-weather");
let editWeatherBtn = document.getElementById("edit-weather");
const locationFieldElement = document.getElementById("location");
const degreesFieldElement = document.getElementById("temperature");
const dateFieldElement = document.getElementById("date");
const divList = document.getElementById("list");


loadBtn.addEventListener("click", loadWeather);
addWeatherBtn.addEventListener("click",createNewWeather);


async function loadWeather() {
    
    divList.innerHTML = "";

    let response = await fetch(baseUrl);
    let dataReceived = await response.json();
    console.log(dataReceived);

    let data = Object.values(dataReceived);
    

    data.forEach(city => {
        console.log(city._id);

        let weather = createWeather(city);
        divList.appendChild(weather);


    })

}

 function editWeather(city, divContainer) {
    locationFieldElement.value = city.location;
    degreesFieldElement.value = city.temperature;
    dateFieldElement.value = city.date;
    addWeatherBtn.disabled = true;
    editWeatherBtn.disabled = false;
    const url = baseUrl + city._id;
    let newLocation = locationFieldElement.value;
    let newTemperature = degreesFieldElement.value;
    let newDate = dateFieldElement.value;

    editWeatherBtn.addEventListener("click", () => {

       fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                location: newLocation,
                temperature: newTemperature,
                date: newDate,
                _id: city._id
            })
            
        })
        .then(response => response.json())
        .then(data => {
            console.log("success");
            addWeatherBtn.disabled = false
            editWeatherBtn.disabled = true
        }
        )
        .catch(error => console.log(error));
        
        loadWeather();
    });
    divContainer.remove();
   
}



function createWeather(city) {

    let divContainer = document.createElement("div");
    divContainer.className = "container"
    let h2Town = document.createElement("h2");
    h2Town.textContent = city.location;
    let h3Date = document.createElement("h3");
    h3Date.textContent = city.date;
    let h3Degrees = document.createElement("h3");
    h3Degrees.textContent = city.temperature;
    let div = document.createElement("div");
    div.className = "buttons-container";
    let btnChange = document.createElement("button");
    btnChange.className = "change-btn";
    btnChange.textContent = "Change";
    let btnDelete = document.createElement("button");
    btnDelete.className = "delete-btn";
    btnDelete.textContent = "Delete";
    div.appendChild(btnChange);
    div.appendChild(btnDelete);
    divContainer.appendChild(h2Town);
    divContainer.appendChild(h3Date);
    divContainer.appendChild(h3Degrees);
    divContainer.appendChild(div);

    btnChange.addEventListener("click", () => editWeather(city, divContainer));
    btnDelete.addEventListener("click", () => deleteWeather(city,divContainer));

    return divContainer;

}

async function deleteWeather(city,divContainer){

     let response = await fetch(baseUrl + city._id,{
            method:'DELETE'
        });
        let data = await response.json();
        
        divContainer.remove();
        loadWeather();


}

async function createNewWeather(){

    const location = locationFieldElement.value;
    const temperature = degreesFieldElement.value;
    const date = dateFieldElement.value;

    if(location == "" || temperature == "" || date == ""){
        return;
    }

    let obj ={
        location,
        temperature,
        date
    }
    
    let response = await fetch(baseUrl,{
        method:'POST',
        body: JSON.stringify(obj)
    });
    let data = await response.json();
    locationFieldElement.value = "";
    degreesFieldElement.value = "";
    dateFieldElement.value = "";
    loadWeather();
}

