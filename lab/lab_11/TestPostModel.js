const RequestHandler = require('./RequestHandler');

lab11();
// Function Declaration
async function lab11() {
    // Given params
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const SLUG = '/posts';
    const url = `${BASE_URL}${SLUG}`;
    const userId = 1;
    const postId = 2;

    const requestHandler = new RequestHandler();
    const post = await requestHandler.getTargetPost(userId, postId, url);
    const allPosts = await requestHandler.getAllPosts(userId, url);

    if (post) {
        //requestHandler.printPost(post);
        console.log(post.body);
    } else {
        throw new Error(`The post ID ${postId} is not existing for the user ID ${userId}\n`);
    }

    if (allPosts.length !== 0) {
        allPost.forEach(function (post) {
            requestHandler.printPost(post);
        });
    } else {
        throw new Error(`Please recheck user ID: ${userID}`);
    }

}
