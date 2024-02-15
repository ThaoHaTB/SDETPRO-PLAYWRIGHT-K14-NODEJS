const givenStr="Hey, mai di an pizza khum, pizza ngon lam"
let spareWord= givenStr.replace(/,/gi,"").split(" ");
console.log(spareWord);
const returnedGroupWordMap=groupWordMap(spareWord);
console.log(returnedGroupWordMap);
function groupWordMap(spareWord){
    let wordMap=new Map();
    for(const word of spareWord){
        if(!wordMap.has(word)){
            wordMap.set(word,1)
        }else{
            wordMap.set(word,wordMap.get(word) +1);
        }

    }
    return wordMap
}