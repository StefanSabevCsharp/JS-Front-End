function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');

    const select = document.getElementById('posts');
    

    loadPostsBtn.addEventListener('click', loadPosts);

    function loadPosts() {

        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(post => {
                    const option = document.createElement('option');
                    option.value = post.id;
                    option.textContent = post.title;
                   select.appendChild(option);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    viewPostsBtn.addEventListener('click', viewPosts);

    function viewPosts(){
        const postId = select.value;
        const postBody = document.getElementById('post-body');
        const postComments = document.getElementById('post-comments');

        fetch('http://localhost:3030/jsonstore/blog/comments')
            .then(res => res.json())
            .then(data => {
                postComments.innerHTML = '';
                Object.values(data).forEach(comment => {
                    if(comment.postId === postId){
                        const li = document.createElement('li');
                        li.textContent = comment.text;
                        postComments.appendChild(li);
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });

        fetch(`http://localhost:3030/jsonstore/blog/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                postBody.innerHTML = '';
                const h1 = document.createElement('h1');
                h1.textContent = data.title;
                const p = document.createElement('p');
                p.textContent = data.body;
                postBody.appendChild(h1);
                postBody.appendChild(p);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

attachEvents();