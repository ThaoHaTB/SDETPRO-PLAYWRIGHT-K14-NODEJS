/**
 * DRY: to group same logic into same place -> reusable*
 * Group same logic category into same place
 * -> Maintainable -> extendable -> reliable */

//Function declaration| It's hoisting to the top of scope
function functionName(){
    return 2
}

let myReturnvalue=functionName();
console.log(myReturnvalue);

// function expression| It's not hoisted like Function declaration
const addNumber=function(firstNum, secondNum){
    return firstNum+secondNum;
}
console.log(addNumber(1,2));