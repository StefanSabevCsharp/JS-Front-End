function deleteByEmail() {
   
    let input = document.querySelector('input[name="email"]');
    let email = input.value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for (let row of rows) {
        if (row.children[1].textContent == email) {
            row.remove();
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
    


}