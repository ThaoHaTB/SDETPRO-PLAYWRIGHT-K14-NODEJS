const {filterEvenNumber}= require('../utils/ArrayHelper')
/**
 * *LOOP: for 
 * */
//Literal declaration
let myNewArray=[1,2,3,4,5]
//infinity loop
//for(;;){
  //  console.log(0);
//}
let i=0;
for(;i<5;i++){
    console.log(i);
}
console.log('Last value of i: '+i);

let arrayLength=myNewArray.length;
console.log('arrayLength: ',arrayLength);
for (let index = 0; index < arrayLength; index++) {
    myNewArray[index]=myNewArray[index]*2;
}

