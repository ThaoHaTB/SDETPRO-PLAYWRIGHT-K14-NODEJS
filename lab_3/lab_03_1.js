const {filterEvenNumber,
    filterOddNumber}= require('../utils/ArrayHelper');
let countEven=0;
let countOdd=0;
let intArr = [1, 2, 3, 4, 5];
for (let index = 0; index < intArr.length; index++) {
    if(intArr[index]%2==0)
        countEven++;
}
countOdd=intArr.length-countEven;
console.log("Number of even number in array: "+countEven);
console.log("Number of odd number in array: "+countOdd);

//Second approach
console.log("Second approach");
let totalEvenNumber=intArr.filter(filterEvenNumber).length;
let totalOddNumber=intArr.filter(filterOddNumber).length;
console.log("Number of even number in array: "+totalEvenNumber);
console.log("Number of odd number in array: "+totalOddNumber);