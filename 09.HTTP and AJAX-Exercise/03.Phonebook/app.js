function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";
    const ul = document.getElementById("phonebook");
    document.getElementById("btnLoad").addEventListener('click', loadPhones);

    async function loadPhones() {

        ul.innerHTML = '';

        let promise = await fetch(baseUrl);
        let response = await promise.json();

        Object.values(response).forEach(person => {
            console.log(person);
            const li = document.createElement("li");
            li.textContent = `${person.person}: ${person.phone}`
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "DELETE";
            li.appendChild(deleteBtn);
            ul.appendChild(li);

            deleteBtn.addEventListener('click', deletePhone);

            async function deletePhone() {
                let personId = person._id;
                let deletePromise = await fetch(`${baseUrl}/${personId}`, {
                    method: "DELETE"
                });
                let deleteResponse = await deletePromise.json();
                li.remove();
            }
        })


    }

    document.getElementById("btnCreate").addEventListener('click', createPhone);

    function createPhone() {
        let person = document.getElementById("person").value;
        let phone = document.getElementById("phone").value;

        let newContact = {
            person,
            phone
        }

        fetch(baseUrl,{
            method:'POST',
            body: JSON.stringify(newContact)
        })
        .then(promise => promise.json)
        .then(result => console.log(result))
        .catch(err => console.log("There is a error"));
    }

}

attachEvents();