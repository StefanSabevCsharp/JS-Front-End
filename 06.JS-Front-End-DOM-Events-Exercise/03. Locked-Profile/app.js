function lockedProfile() {
   let buttons = Array.from(document.getElementsByTagName("button"));
   buttons.forEach(b => {
    b.addEventListener('click',reveal)
   })
    
   function reveal(e){

    let parent = e.currentTarget.parentNode;
    let unlock = parent.getElementsByTagName('input')[1];
    let lock = parent.getElementsByTagName('input')[0];
    let hidden = parent.getElementsByTagName('div')[0];
    let isUnlocked = unlock.checked;
    if(isUnlocked){
        if(e.currentTarget.textContent == 'Show more'){
            hidden.style.display = 'block';
            e.currentTarget.textContent = 'Hide it';
        }else{
            hidden.style.display = 'none';
            e.currentTarget.textContent = 'Show more';
        }
    }
   }
}