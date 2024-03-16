const Request=require('./Request')
class GetRequest extends Request{
    setMethod(method){
        //this.headers={...this.header, method:'GET'}
        //console.log('setMethod in Get request');
        super.setMethod('GET');
    }
}
module.exports=GetRequest