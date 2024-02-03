const readline=require('readline-sync');
/**
 * ===Game menu===
 * "1. Generate a random number 0-100"
 * "0. Exist!"
*/
let isPlaying=true;
while(isPlaying){
    printGameMenu();
    let userOption=getUserOption();

    if(userOption==0){
        isPlaying= false;
    }else if(userOption==1){
        //generate a random number
        let randomNumber=Math.floor(Math.random()*10) +1;
        // print out
        console.log("The lucky number is: ",randomNumber);
    }else{
        console.log("Chuc may man lan sau!");
    }
}
console.log("Gap lai sau nha!");
function printGameMenu(){
    console.log("* ====Game menu====");
    console.log('1. Generate a random number 0-100');
    console.log('0. Exist!');
}
function getUserOption(){
    return readline.question('Please select an option:');
}