const readline = require('readline-sync');
const { sendRequest } = require('./RequestHelpers');

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`;

let userID = readline.question("Please input user id: ");
userID=Number(userID);
let postID = readline.question("Please input post id: ");
postID=Number(postID);
// -> still pending, need then or async/ await to return result
// const filterPosts = sendRequest(url).then(function(posts){
//     posts.filter(function(posts){
//         return posts.userId===userId;
//     })
// })
printTargetPost(userID, postID);

printAllPost(userID);

function printTargetPost(userID, postID) {
    _getAllPost(userID).then(function (filterPosts) {
        if (filterPosts.length !== 0) {
            const targetPost = filterPosts.filter(function (posts) {
                return posts.id === postID;
            })[0]
            if (targetPost) {
                console.log(targetPost);
            } else {
                console.log(`The post ID :${postID} is not correct for user ID: ${userID}`);
            }
        } else {
            console.log(`Please recheck user ID: ${userID}`);
        }

    })
}

function printAllPost(userID) {
    _getAllPost(userID).then(function (filterPosts) {
        if (filterPosts.length !== 0) {
            console.log(filterPosts);
        }
        else {
            console.log(`Please recheck user ID: ${userID}`);
        }
    })
}

function _getAllPost(userID) {
    return sendRequest(url).then(function (posts) {
        return posts.filter(function (posts) {
            return posts.userId = userID;
        })
    })
}