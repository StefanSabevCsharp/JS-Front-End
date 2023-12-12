function login() {

    let loginBtn = document.querySelector('button');
    loginBtn.addEventListener('click', letsLogIn);
    let isLogedIn = false;

    async function letsLogIn(e) {
        isLogedIn = false;
        e.preventDefault();

        let email = document.querySelector('input[name="email"]').value;
        let password = document.querySelector('input[name="password"]').value;
        let obj = { email, password };

        let response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });

        let data = await response.json();
        console.log(data);
        let receivedEmail = data.email;
        if (receivedEmail == email) {
            console.log('You are logged in!');
            isLogedIn = true;
            if (isLogedIn) {
                // •	Keep the user data in the browser's session or locale storage. 
                // •	Redirect to the home page.
                sessionStorage.setItem('userToken', data.accessToken);
                sessionStorage.setItem('userId', data._id);
                sessionStorage.setItem('email', data.email);
                
                window.location.href = 'index.html';
            }
        }
    }
}


login();