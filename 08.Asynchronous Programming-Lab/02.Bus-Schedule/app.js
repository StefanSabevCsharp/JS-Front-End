function solve() {

    let info = document.querySelector('#info > span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let id = "depot";

    let baseUrl = "http://localhost:3030/jsonstore/bus/schedule/";


    function depart() {

        fetch(baseUrl + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                debugger;
                info.textContent = `Next stop ${data.name}`;
                id = data.next;
            })
            .catch(error => {
                info.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                
            })

        departBtn.disabled = true;
        arriveBtn.disabled = false;
        
    }

    async function arrive() {
        

        let response = await fetch(baseUrl + id);
        let data = await response.json();
        info.textContent = `Arriving at ${data.name}`;
        id = data.next;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();