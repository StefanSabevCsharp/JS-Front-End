function addItem() {


    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');
    
    if(newText.value === '' && newValue.value === ''){
        return;

    }

    let option = document.createElement('option');
    option.textContent = newText.value;
    option.value = newValue.value;

    let select = document.getElementById('menu');
    select.appendChild(option);
    
    newText.value = '';
    newValue.value = '';
    

}