//1. Send request 
//2. Process request
// 3. Validate

//Asynchronous
function sendRequest(url, callback) {
    console.log('1. Sending request to ', url);
    return setTimeout(function () {
        callback({ status: 200 });
    }, 100)

}
//Asynchronous
function processResponse(response, callback) {
    console.log('2. Processing response ', response);
    setTimeout(function () {
        callback(response.status);
    }, 1000)
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
const targetUrl='htts://sdetpro.com';
//Callback hell
sendRequest(targetUrl, function(response){
    processResponse(response, function(statusCode){
        validateResponse(statusCode);
    })
})