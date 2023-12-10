function registerUser(){

    let baseUrl = "http://localhost:3030/users/register";
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const rePass = document.querySelector('input[name="rePass"]').value;
    const button = document.querySelector(`button`);

    if(password !== rePass){
        return;
    }

    let obj = {
        email,
        password

    }

    button.addEventListener('click',register);

    async function register(e){
        e.preventDefault();

        let promise = await fetch(baseUrl,{
            method:'POST',
            body: JSON.stringify(obj)
        });
        let response = promise.json();
        console.log(response);
        
    }


 

}
registerUser();