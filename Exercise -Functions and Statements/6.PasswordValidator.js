function validPassword(pass) {

   
    let array = pass.split('');

    let shortPassword = false;
    let noDigits = false;
    let onlyLettersAndDigits = false;

    if (array.length < 6 || array.length > 10) {
        shortPassword = true;
    }

    onlyLettersAndDigits = isNotANumberOrLetter(pass);
    noDigits = hasTwoDigits(pass);
  

   
    if(shortPassword){
        console.log("Password must be between 6 and 10 characters");
    }
    if(onlyLettersAndDigits){
        console.log("Password must consist only of letters and digits");
    }
    if(noDigits){
        console.log("Password must have at least 2 digits");
    }
    if(!shortPassword && !onlyLettersAndDigits && !noDigits){
        console.log("Password is valid")
    }

    function hasTwoDigits(password) {
        let path = /\d/gm;
        let matches = password.match(path);
        if(matches != null && matches.length >= 2){
           return false;
        }else{
            return true;
        }
     }
     function isNotANumberOrLetter(password){
         let path = /[^a-zA-z0-9]/gm;
         let matches = password.match(path);
         if(matches == null){
            return false;
         }else{
            return true;
         }
     }

}

validPassword("MyPass123")