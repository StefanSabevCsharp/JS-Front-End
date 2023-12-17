
const baseUrl = "http://localhost:3030/jsonstore/tasks/";

let loadMealsBtn = document.getElementById("load-meals");
let divToAddMeals = document.getElementById("list");

loadMealsBtn.addEventListener("click", addAllMeals);

let addMealBtnElement = document.getElementById("add-meal");
let editMealBtnElement = document.getElementById("edit-meal");

let foodFormElement = document.getElementById("food");
let timeFormElement = document.getElementById("time");
let caloriesFormElement = document.getElementById("calories");

addMealBtnElement.addEventListener("click", () => addNewMeal());

function addAllMeals() {

    divToAddMeals.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(r => {
            let data = Object.values(r)
            data.forEach(d => {
                let divElement = createDiv(d);

                divToAddMeals.appendChild(divElement);

            })
        })
        // .catch(err => console.log("Vuv erora na addmeals sym"))
}

function addNewMeal() {

    let obj = {
        food: foodFormElement.value,
        time: timeFormElement.value,
        calories: caloriesFormElement.value
    };

    fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(addAllMeals)
        .then(clearFields)
        // .catch(err => console.log("Vuv erora na NEWMEALS sym"))


}

function createDiv(obj) {

    let food = obj.food;
    let calories = obj.calories;
    let time = obj.time;
    let id = obj._id;


    let divElement = document.createElement("div");
    divElement.className = "meal";
    let h2Element = document.createElement("h2");
    h2Element.textContent = food;
    let h3ElementTime = document.createElement("h3");
    h3ElementTime.textContent = time;
    let h3ElementCalories = document.createElement("h3");
    h3ElementCalories.textContent = calories;
    let divElementButtons = document.createElement("div");
    divElementButtons.id = "meal-buttons";
    let buttonChange = document.createElement("button");
    buttonChange.className = "change-meal";
    buttonChange.textContent = "Change";
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "delete-meal";
    buttonDelete.textContent = "Delete";
    divElementButtons.appendChild(buttonChange);
    divElementButtons.appendChild(buttonDelete);




    divElement.appendChild(h2Element);
    divElement.appendChild(h3ElementTime);
    divElement.appendChild(h3ElementCalories);
    divElement.appendChild(divElementButtons);
    divElement.dataset.id = id;

    buttonChange.addEventListener("click", () => {

    let objId = obj._id;
    let food = obj.food;
    let calories = obj.calories;
    let time = obj.time;

    foodFormElement.value = food;
    timeFormElement.value = time;
    caloriesFormElement.value = calories;

    addMealBtnElement.disabled = true;
    editMealBtnElement.disabled = false;
    divElement.remove();

    editMealBtnElement.addEventListener("click",() => editMeal(obj, divElement));
    });

    buttonDelete.addEventListener("click", () => deleteMeal(obj, divElement));

    return divElement;

}

function editMeal(obj, divElement) {

    let updateFood = foodFormElement.value;
    let updateTime = timeFormElement.value;
    let updateCalories = caloriesFormElement.value;

    let objId = obj._id;

    let newObj = {
        food: updateFood,
        time: updateTime,
        calories: updateCalories,
        _id: objId
    }

    divElement.remove();

    fetch(baseUrl + objId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj)
    })
        
        .then(addAllMeals)
        .then(clearFields)
        .then( () => {
            addMealBtnElement.disabled = false;
            editMealBtnElement.disabled = true;
        })
        // .catch(err => console.log("Vuv erora na edit sym"))

   

}

function deleteMeal(obj, divElement) {

    divElement.remove();

    fetch(baseUrl + obj._id, {
        method: "DELETE"

    })
    .then(addAllMeals)

        // .catch(err => console.log("Vuv erora na delete sym"))


}


function clearFields() {


    foodFormElement.value = "";
    timeFormElement.value = "";
    caloriesFormElement.value = "";
}

