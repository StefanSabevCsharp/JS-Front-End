
const baseUrl = "http://localhost:3030/jsonstore/tasks"

const loadBtnElement = document.getElementById("load-vacations");
const divListElement = document.getElementById("list");
const addVacationElement = document.getElementById("add-vacation");
const editVacationElement = document.getElementById("edit-vacation");

let nameField = document.getElementById("name");
let dateField = document.getElementById("from-date");
let daysField = document.getElementById("num-days");

loadBtnElement.addEventListener("click", loadVacations);
addVacationElement.addEventListener("click", addNewVacation);

 function loadVacations() {

    divListElement.innerHTML = "";

    // fetch(baseUrl)
    // .then(response => response.json())
    // .then(res => {
    //   let data = Object.values(res);
    //   console.log(data);
    //   data.forEach(obj => {
    //     let newDiv = createLiElement(obj);
    //     divListElement.appendChild(newDiv);
    //   })
    // })
    // .catch(err => console.log("ima greshka pri loadVacations"))

    fetch(baseUrl)
    .then(response => response.json())
    .then(res => {
        let data = Object.entries(res);
        data.forEach(([id, obj]) => {
            let newDiv = createLiElement(obj);
            newDiv.dataset.id = id; 
            divListElement.appendChild(newDiv);
        });
    })
    .catch(err => console.log("ima greshka pri loadVacations"))

}

function addNewVacation(e) {
    e.preventDefault();

    let newObj = {
        name: nameField.value,
        date: dateField.value,
        days: daysField.value
    }

    fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj)
    })
        .then(response => response.json())
        .then(res => loadVacations())
        .then(clearFields());
}

function createLiElement(obj) {

    let divContainer = document.createElement("div");
    divContainer.className = "container";
    let h2 = document.createElement("h2");
    h2.textContent = obj.name;
    let h3Date = document.createElement("h3");
    h3Date.textContent = obj.date;
    let h3Days = document.createElement("h3");
    h3Days.textContent = obj.days;
    let btnChange = document.createElement("button");
    btnChange.textContent = "Change";
    btnChange.className = "change-btn";
    let btnDone = document.createElement("button");
    btnDone.textContent = "Done";
    btnDone.className = "done-btn";
    divContainer.appendChild(h2);
    divContainer.appendChild(h3Date);
    divContainer.appendChild(h3Days);
    divContainer.appendChild(btnChange);
    divContainer.appendChild(btnDone);

    btnChange.addEventListener("click", () => changeObject(obj, divContainer));
     btnDone.addEventListener("click", () => deleteObj(obj,divContainer));
  

    return divContainer;

}

function deleteObj(obj,divContainer){

    divContainer.remove();
    let objId = divContainer.dataset.id;

    fetch(`${baseUrl}/${objId}`,{
        method:"DELETE"
    })
    .then(console.log("delete"))
    .then(loadVacations)
}

function changeObject(obj, divContainer) {
    nameField.value = obj.name;
    dateField.value = obj.date;
    daysField.value = obj.days;
    addVacationElement.disabled = true;
    editVacationElement.disabled = false;
   
    let objId = divContainer.dataset.id;
    divContainer.remove();

    editVacationElement.addEventListener("click", (e) => {
        e.preventDefault()

        fetch(`${baseUrl}/${objId}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:nameField.value,
                date: dateField.value,
                days:daysField.value,
            })

        })
        .then(loadVacations)
        .then(clearFields)
        .then( r => {
            addVacationElement.disabled = false;
            editVacationElement.disabled = true;
        })
    });
}

function clearFields() {

    nameField.value = "";
    dateField.value = "";
    daysField.value = "";
}

