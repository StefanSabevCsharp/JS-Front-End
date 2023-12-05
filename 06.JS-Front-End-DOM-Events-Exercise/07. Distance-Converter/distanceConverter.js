function attachEventsListeners() {

    let inputDistance = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputDistance = document.getElementById('outputDistance');
    let outputUnits = document.getElementById('outputUnits');
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    function convert(){

        let obj = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        }
        let result = inputDistance.value * obj[inputUnits.value] / obj[outputUnits.value];
        outputDistance.value = result;
        

    }

    
}