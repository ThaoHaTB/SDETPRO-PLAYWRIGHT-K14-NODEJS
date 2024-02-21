let myArray=[12, 34, 1, 16, 28];
let unSortPosition=myArray.length-1;

while(unSortPosition>0){
    for(let index=0;index<unSortPosition;index++){
        const leftValue=myArray[index];
        const rightValue=myArray[index+1];
        if(leftValue>rightValue){
            myArray[index]=rightValue;
            myArray[index+1]=leftValue;
        }
    }
    unSortPosition --;

}
console.log(myArray);