const PostRequest=require('./PostRequest');
const GetRequest=require('./GetRequest');
const url='https://my-api.com/api';

//Get
const request=new GetRequest(url);
request.setMethod();
request.send();
request.verifyResponseStatus();

//Post
const postRequest=new PostRequest(url);
postRequest.setMethod();
postRequest.send();
postRequest.verifyResponseStatus();

postRequest.sayHello();