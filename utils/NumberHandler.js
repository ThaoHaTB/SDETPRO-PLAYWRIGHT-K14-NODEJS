class NumberHandler{
    static divide(firstNumber,secondNumber){
        return Math.round(firstNumber/secondNumber); 
    }
    
    static isEvenNumber(number){
        return number%2===0;
    }
}

module.exports=NumberHandler;
// let result=divide(2);
// console.log('value: ', result);
// console.log(typeof(result));