const Post = require('./Post');
const  {sendRequest } = require('../lab_9/RequestHelpers');
class RequestHandler {
    async getTargetPost(userId, postId, url) {
        const filterPosts = await this._getAllPosts(userId,url);
        const targetPost = filterPosts.filter(function (posts) {
            return posts.id === postId;
        })[0];

        if (targetPost) {
            return new Post(targetPost.userId, targetPost.id, targetPost.title, targetPost.body);
        } else {
            return null;
        }
    }

    async getAllPosts(userId, url) {
        const filterPosts = await this._getAllPosts(userId,url);
        let constructedPosts = [];
        filterPosts.forEach(function (post) {
            constructedPosts.push(new Post(post.userId, post.id, post.title, post.body));
        });
        return constructedPosts;
    }

    async _getAllPosts(userId,url) {
        const posts = await sendRequest(url);
        return posts.filter(function (posts) {
            return posts.userId === userId;
        });
    }
    printPost(post) {
        console.log(post.body);
    }
}
module.exports = RequestHandler;