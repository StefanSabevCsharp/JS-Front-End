function solution() {
    let baseUrl = "http://localhost:3030/jsonstore/advanced/articles/list ";

    let main = document.getElementById("main");

    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(article => {

                console.log(article);
                let btn = document.createElement("button");
                btn.textContent = "More";
                btn.className = "button";
                btn.id = article._id;
                btn.addEventListener("click", showMore);
                let div = document.createElement("div");
                div.className = "accordion";
                let head = document.createElement("div");
                head.className = "head";
                let span = document.createElement("span");
                span.textContent = article.title;
                head.appendChild(span);
                head.appendChild(btn);
                let extra = document.createElement("div");
                extra.className = "extra";
                let p = document.createElement("p");
                extra.appendChild(p);
                div.appendChild(head);
                div.appendChild(extra);
                main.appendChild(div);


            });
        })

        async function showMore(){
            let id = this.id;
            let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
            let response = await fetch(url);
            let data = await response.json();
            let p = this.parentNode.parentNode.querySelector(".extra p");
            p.textContent = data.content;
            let btn = this.parentNode.parentNode.querySelector(".head button");
            if(btn.textContent == "More"){
                btn.textContent = "Less";
                p.parentNode.style.display = "block";
            }else{
                btn.textContent = "More";
                p.parentNode.style.display = "none";
            }
        }


}

solution();
