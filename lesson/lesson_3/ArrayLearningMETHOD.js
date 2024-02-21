const {filterEvenNumber,
convertToEvenNumber,
sortNumberASC,
sortNumberDSC}= require('../utils/ArrayHelper');
/**
 * Method to process array 
 * */
//Literal declaration
let myNumArray=[1,2,3,4,5]

//1. most of methods to process array can accept a function as a param
let evenNumber=myNumArray.filter(filterEvenNumber) // => ham filter

//2. The function to process the array:(value, index, array)
// function filterEvenNumber(value, index, array){
//     //Logic
//     console.log('Processing at index: '+index);
//     return value >3;
// }
// for(const value of evenNumber){
//     console.log(value)
// }
const evenNumberArray=myNumArray.map(convertToEvenNumber); //=> map
for(const value of evenNumberArray){
    console.log(value);
}
// sort
let myString=['B','C','A']
myString.sort();
console.log(myString);
myString.reverse();
console.log(myString);

let complexNumber=[100,20,15];
complexNumber.sort(sortNumberASC);
complexNumber.sort(sortNumberDSC);
console.log(complexNumber);

myNumArray.forEach(convertToNoSpaces);
var targetStr='';
function convertToNoSpaces(value,index, array){
    console.log(index);
    targetStr=targetStr+value;
}


console.log(targetStr);