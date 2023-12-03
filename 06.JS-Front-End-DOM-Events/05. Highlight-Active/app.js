function focused() {
    
 let inputs = Array.from(document.querySelectorAll('input'));
 
 inputs.forEach(i => {
     i.addEventListener('focus', onFocus);
     i.addEventListener('blur', onBlur);
 });

    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentNode.className = '';
    }
    

}