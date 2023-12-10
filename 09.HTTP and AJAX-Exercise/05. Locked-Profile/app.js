async function lockedProfile() {

    const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles";
    const main = document.getElementById("main");

    let promise = await fetch(baseUrl);
    let profiles = await promise.json();
    

    Object.values(profiles).forEach(profile => {

        let div = document.createElement("div");

        console.log(profile);
        div.className = "profile";
        div.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
    <label>Lock</label>
    <input type="radio" name="${profile.username}" value="lock" checked="true">
    <label>Unlock</label>
    <input type="radio" name="${profile.username}" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="${profile.username}" value="${profile.username}" disabled="" readonly="">
    <div class="hidden">
        <hr>
        <label>Email:</label>
        <input type="email" name="${profile.email}" value="${profile.email}" disabled="" readonly="">
        <label>Age:</label>
        <input type="text" name="${profile.age}" value="${profile.age}" disabled="" readonly="">
        
    </div>`;
        let button = document.createElement("button");
        button.textContent = "Show more";
        let hidden = div.querySelector(".hidden");
        hidden.style.display = "none";
        div.appendChild(button);
        main.appendChild(div);

        button.addEventListener('click', showMore);

        

    });

    function showMore(e) {

        let inputs = e.target.parentNode.querySelectorAll("input");
        let lock = inputs[0];
        let unlock = inputs[1];
        let hidden = e.target.parentNode.querySelector(".hidden");
        if(unlock.checked){
            if(e.target.textContent == "Show more"){
                hidden.style.display = "block";
                e.target.textContent = "Hide it";
            }else{
                hidden.style.display = "none";
                e.target.textContent = "Show more";
            }
        }
    }
}

lockedProfile()
