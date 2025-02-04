// xhr request
let user_id = document.getElementById('user_id');
let post_id = document.getElementById('post_id');
let post_title = document.getElementById('post_title');
let post_text = document.getElementById('post_text');

let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
request.send();

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let post = JSON.parse(request.responseText);
        user_id.innerText = post.userId;
        post_id.innerText = post.id;
        post_title.innerText = post.title;
        post_text.innerText = post.body;
    }else if (this.readyState == 4) {
        let table = document.getElementById("table");
        table.style.visibility = "hidden";
        document.getElementById("error").innerHTML = "404 not found";
    }
};

// request.onload = function() {
//   let post = JSON.parse(request.responseText);
//   user_id.innerText = post.userId;
//   post_id.innerText = post.id;
//   post_title.innerText = post.title;
//   post_text.innerText = post.body;
// };
