const Request=require('./Request')
class PostRequest extends Request{
    setMethod(method){
        //this.headers={...this.header, method:'GET'}
        //console.log('setMethod in Post request');
        super.setMethod('POST');
    }
}
module.exports=PostRequest