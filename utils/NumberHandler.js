function divide(firstNumber,secondNumber){
    return Math.round(firstNumber/secondNumber); 
}

function isEvenNumber(number){
    return number%2===0;
}
module.exports={
    divide:divide,
    isEvenNumber:isEvenNumber
}
// let result=divide(2);
// console.log('value: ', result);
// console.log(typeof(result));