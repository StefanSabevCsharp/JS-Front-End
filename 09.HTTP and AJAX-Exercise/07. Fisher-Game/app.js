function solve(){
    
    
    let loginA = document.getElementById("login");
    loginA.addEventListener('click',loginPage);

    function loginPage(){
        loginA.href = "src/login.html";
    }

    let registerA = document.getElementById("register");
    registerA.addEventListener('click',registerPage);
    function registerPage(){
        registerA.href = "src/register.html";
    }

}
solve();



// function solve(){
// let main = document.getElementsByTagName("main")[0];
// let sectionLogin = document.getElementById("login-view");
// let sectionRegister = document.getElementById("register-view");

// let loginBtn = document.getElementById("login");
// let registerBtn = document.getElementById("register");

// loginBtn.addEventListener('click',showLoginPage);
// registerBtn.addEventListener('click',showRegisterPage);

// function showLoginPage(){
//     main.innerHTML = "";
//     main.appendChild(sectionLogin);

//     let email = document.querySelector('input[name="email"]').value;
//     let password = document.querySelector('input[name="password"]').value;
// }

// function showRegisterPage(){
//     main.innerHTML = "";
//     main.appendChild(sectionRegister);
// }



// };

// solve();    