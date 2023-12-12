function getInfo() {

    const baseUrl = "http://localhost:3030/jsonstore/bus/businfo/";
    
 const input = document.getElementById('stopId'); 
 const btn = document.getElementById('submit');

    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    btn.addEventListener('click', chechBusStop);

    function chechBusStop() {

        const stopId = input.value;
        buses.innerHTML = '';
        stopName.textContent = '';

        fetch(baseUrl + stopId)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            stopName.textContent = data.name;
            Object.entries(data.buses).forEach(([bus, time]) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${time} minutes`;
                buses.appendChild(li);
            })
        
        })
       .catch(error => {
           stopName.textContent = 'Error';
       })

    }

}