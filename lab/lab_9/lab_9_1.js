const readline = require('readline-sync');

const postID=getPostID();
const userID=getUserID();
let targetUrl= 'https://jsonplaceholder.typicode.com/posts/'+postID;

function fetchPostContent(postId) {
    return fetch(targetUrl)
        .then(response => {
            if (response.body==null) {
                console.log('Please check your Post ID');
            }
            return response.json();
        })
        .then(data => data.body);
}

function getPostID() {
    return readline.question('Please enter PostID: ');
}
function getUserID() {
    return readline.question('Please enter User ID: ');
}