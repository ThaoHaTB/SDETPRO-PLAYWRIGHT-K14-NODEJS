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
        requestHandler.printPost(post);
    } else {
        throw new Error(`Please recheck userTD ${userId} and postID ${postId}`);
    }

    if (allPosts.length !== 0) {
        allPosts.forEach(function (post) {
            requestHandler.printPost(post);
        });
    } else {
        throw new Error(`Please recheck user ID: ${userID}`);
    }

}
