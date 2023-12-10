function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const textArea = document.getElementById("messages");
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");

    refreshBtn.addEventListener('click',loadPosts);

    async function loadPosts(){

        let arr = [];

        const promise = await fetch(baseUrl);
        const posts = await promise.json();
        
        Object.values(posts).forEach(posts =>{
            arr.push(`${posts.author}: ${posts.content}`);
        })
        textArea.value = arr.join('\n');

    }
    sendBtn.addEventListener('click',sendComment);

    function sendComment(){
        let author = document.querySelector('input[name="author"]').value;
        let content = document.querySelector('input[name="content"]').value;

        let obj = {
            author,
            content
        }
     
        fetch(baseUrl,{
            method:'POST',
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        document.querySelector('input[name="author"]').value = '';
        document.querySelector('input[name="content"]').value = '';
        loadPosts();
    }

}

attachEvents();