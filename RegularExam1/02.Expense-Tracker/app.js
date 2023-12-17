window.addEventListener("load", solve);

function solve() {

    const addButton = document.getElementById("add-btn");
    const expenceFormElement = document.getElementById("expense");
    const ammountFormElement = document.getElementById("amount");
    const dateFormElement = document.getElementById("date");
    let deleteBtn = document.querySelector('.btn.delete');


    let ulPreviewList = document.getElementById("preview-list");

    addButton.addEventListener('click', addElement);

    function addElement(e) {

        e.preventDefault();

        let li = createElement();
        ulPreviewList.appendChild(li);
        expenceFormElement.value = "";
        ammountFormElement.value = "";
        dateFormElement.value = "";
        addButton.disabled = true;

    }

    function createElement() {

        let expence = expenceFormElement.value;
        let ammount = ammountFormElement.value;
        let date = dateFormElement.value;

        if(expence === "" || ammount === "" || date === ""){
            return;
        }

        let li = document.createElement("li");
        li.className = "expense-item";
        let article = document.createElement("article");
        let pType = document.createElement("p");
        pType.textContent = `Type: ${expence}`;
        let pAmmount = document.createElement("p");
        pAmmount.textContent = `Amount: ${ammount}$`;
        let pDate = document.createElement("p");
        pDate.textContent = `Date: ${date}`;
        let divButtons = document.createElement("div");
        divButtons.className = "buttons";
        let editButton = document.createElement("button");
        editButton.className = "btn edit";
        editButton.textContent = "edit";
        let okButton = document.createElement("button");
        okButton.className = "btn ok";
        okButton.textContent = "ok";

        editButton.addEventListener('click', () => {
            ulPreviewList.innerHTML = "";
            expenceFormElement.value = expence;
            ammountFormElement.value = ammount;
            dateFormElement.value = date;
            addButton.disabled = false;
        });

        okButton.addEventListener('click', () => {
            let ulExpenceList = document.getElementById("expenses-list");
            li.removeChild(divButtons);
            addButton.disabled = false;
            ulExpenceList.appendChild(li);


        });

        divButtons.appendChild(editButton);
        divButtons.appendChild(okButton);
        article.appendChild(pType);
        article.appendChild(pAmmount);
        article.appendChild(pDate);
        li.appendChild(article);
        li.appendChild(divButtons);
        return li;

    }

    deleteBtn.addEventListener('click', reloadApp);

    function reloadApp(e) {
        e.preventDefault();
        ulPreviewList.innerHTML = "";
        location.reload();
    }



    //When the  [Delete] button is clicked, you must reload the application.


}