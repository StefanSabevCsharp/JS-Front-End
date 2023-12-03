function addItem() {
    
    let field = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = field.value;
    list.appendChild(li);
    field.value = '';
    


}