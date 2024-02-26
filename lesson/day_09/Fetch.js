//1. Send request 
//2. Process request
// 3. Validate

//Asynchronous
function sendRequest(url, callback) {
    console.log('1. Sending request to ', url);
    fetch(url).then(function (response) {
        callback(response)
    });

}
//Sync
function processResponse(response) {
    console.log('2. Processing response ', response);
    return response.status;
}
//Synchronous
function validateResponse(statusCode) {
    console.log('3. Validating... ');
    if (statusCode === 200) {
        console.log('Passed!');
    } else {
        console.log('Failed, status code: ', statusCode);
    }
}
const targetUrl = 'https://jsonplaceholder.typicode.com/todos/1';

sendRequest(targetUrl, function (response) {
    const statusCode = processResponse(response);
    validateResponse(statusCode)
})