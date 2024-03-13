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

    console.log(`Print postID ${postId} of userID ${userId}`);
    if (post) {
        requestHandler.printPost(post);
    } else {
        throw new Error(`Please recheck userTD ${userId} and postID ${postId}`);
    }
    console.log('+++++++++++++++++++++++++++++++');
    console.log(`Print all post of userID ${userId}`);
    if (allPosts.length !== 0) {
        allPosts.forEach(post => {
            requestHandler.printPost(post);
            console.log('=============================');
        });
    } else {
        throw new Error(`Please recheck user ID: ${userID}`);
    }

}
