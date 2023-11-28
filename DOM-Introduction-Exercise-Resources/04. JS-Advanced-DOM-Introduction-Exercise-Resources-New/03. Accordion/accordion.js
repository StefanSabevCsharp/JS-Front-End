function toggle() {
    let button = document.getElementsByClassName("button");
    let div = document.getElementById("extra");

    if (button[0].textContent === "More") {
        div.style.display = "block"
        button[0].textContent = "Less"
    } else if (button[0].textContent === "Less") {
        div.style.display = "none";
        button[0].textContent = "More";
    }

}