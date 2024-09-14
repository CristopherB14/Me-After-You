function addPost() {
    var postContent = document.getElementById('forumPost').value;
    if (postContent.trim() !== "") {
        var postList = document.getElementById('postList');
        var newPost = document.createElement('li');
        newPost.className = 'list-group-item post-box';
        newPost.textContent = postContent;
        postList.prepend(newPost);  // Añade la nueva publicación al principio de la lista
        document.getElementById('forumPost').value = '';  // Limpia el área de texto
    } else {
        alert("Please enter some content to post.");
    }
}