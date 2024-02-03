const readline=require('readline-sync');
/** *
 * 1. do sth before checking the condition for the First iteration
 * 
 */
let guessingTime=0;
let randomNumber=getRandomNumber();
console.log('Random Number:' +randomNumber);
do{
    //Do the guessing game
    let userNum=getUserNum();
    //console.log(userNum);
    //console.log(typeof(userNum));
    userNum=Number(userNum);
    if(userNum === randomNumber){
        console.log("Hooray!");
        break;
    }
    guessingTime++;
} while(guessingTime < 3)

if(guessingTime === 3){
    console.log('Chuc ban may man lan sau!');
}
function getRandomNumber(){
    return Math.floor(Math.random()*10)+1;
}

function getUserNum(){
    return readline.question('Please enter your number:');
}