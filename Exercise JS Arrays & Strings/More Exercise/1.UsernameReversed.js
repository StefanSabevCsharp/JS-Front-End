function Login(array){
    let username = array[0];
    let password = username.split('').reverse().join('');
    let tries = 0;

    for (let index = 1; index < array.length; index++) {

        if (array[index] == password) {
            console.log(`User ${username} logged in.`)
        } else {
            tries++;
            if (tries == 4) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }
    }
}

Login(['Acer','login','go','let me in',"dasda",'recA']);