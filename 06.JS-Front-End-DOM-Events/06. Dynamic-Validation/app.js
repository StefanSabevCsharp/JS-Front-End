function validate() {
   
    let input = document.getElementById('email');
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    input.addEventListener('change', () => {
        if (!regex.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
}