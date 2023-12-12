window.addEventListener("load", solve);

function solve() {

    let addBtn = document.getElementById("add-btn");
    let playerNameField = document.getElementById("player");
    let scoreField = document.getElementById("score");
    let roundField = document.getElementById("round");

    let ul = document.getElementById("sure-list");


    addBtn.addEventListener('click', addEvent);



    function addEvent(e) {
        e.preventDefault();

        let playerName = playerNameField.value;
        let score = scoreField.value;
        let round = roundField.value;

        let li = document.createElement("li");
        li.className = "dart-item";
        let article = document.createElement("article");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        p1.textContent = playerName;
        p2.textContent = `Score: ${score}`;
        p3.textContent = `Round: ${round}`;
        let btnEdit = document.createElement("button");
        btnEdit.textContent = "edit";
        btnEdit.className = "btn edit"

        let btnOk = document.createElement("button");
        btnOk.className = "btn ok";
        btnOk.textContent = "ok";
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        li.appendChild(article);
        li.appendChild(btnEdit);
        li.appendChild(btnOk);
        ul.appendChild(li);

        playerNameField.value = "";
        scoreField.value = "";
        roundField.value = "";

        addBtn.disabled = true

        btnEdit.addEventListener('click', editForm);
        btnOk.addEventListener('click',addToScoreBoard);

        function editForm(e) {
            e.preventDefault();

            li.remove();
            addBtn.disabled = false;
            playerNameField.value = playerName;
            scoreField.value = score;
            roundField.value = round;
        }

        function addToScoreBoard(e){
            e.preventDefault();
            let ulScoreBoard = document.getElementById("scoreboard-list");
            li.removeChild(btnEdit);
            li.removeChild(btnOk);
            ul.removeChild(li);
            ulScoreBoard.appendChild(li);
            addBtn.disabled = false;

        }
        document.getElementsByClassName("btn clear")[0].addEventListener('click', clearScoreBoard);

        function clearScoreBoard(e){
            e.preventDefault();

            console.log("hello from clear");
            window.location.reload();
        }

    }

}
