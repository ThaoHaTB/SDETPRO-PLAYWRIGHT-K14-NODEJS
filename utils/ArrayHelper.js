const filterEvenNumber=function (value){
    //Logic
    //console.log('Processing at index: '+index);
    return value %2===0;
}
const filterOddNumber=function (value){
    return value %2!==0;
}
const convertToEvenNumber=function (value){
    if(value %2 !==0)
        return value *2;
    else 
        return value;
}
const sortNumberASC=function sortNumberASC(firstNumber, secondNumber){
   return firstNumber-secondNumber;
}
const sortNumberDSC=function sortNumberDSC(firstNumber, secondNumber){
    return secondNumber-firstNumber;
 }
 
module.exports={
    filterEvenNumber:filterEvenNumber,
    filterOddNumber:filterOddNumber,
    convertToEvenNumber:convertToEvenNumber,
    sortNumberASC:sortNumberASC,
    sortNumberDSC:sortNumberDSC
}