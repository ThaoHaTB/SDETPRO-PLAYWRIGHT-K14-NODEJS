let intArr = [8, 2, 3, 4, 5];
let min=intArr[0];
let max=intArr[0];
for(let index=1;index<intArr.length;index++){
    if(intArr[index]<min)
        min=intArr[index];
    if(intArr[index]>max)
        max=intArr[index];
}
console.log('Min:'+ min);
console.log('Max: '+ max);