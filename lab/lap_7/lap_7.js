const readline = require('readline-sync');

const givenStr = getUserInput();

let spareWord= givenStr.replace(/,/gi,"").split(" ");
console.log(spareWord);

const returnedGroupWordMap=groupWordMapByObject(spareWord);
console.log(returnedGroupWordMap);

function groupWordMapByObject(spareWord) {
    let wordObj = {};
    for (const word of spareWord) {
        if (wordObj.hasOwnProperty(word)) {
            wordObj[word]++;
        } else {
            wordObj[word] = 1;
        }
    }
    return wordObj;
}
function getUserInput() {
    return readline.question('Please enter your sentence: ');
}