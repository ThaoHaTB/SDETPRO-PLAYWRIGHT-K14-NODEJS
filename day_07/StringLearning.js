let myString="ffshakiee\\67757";
// console.log(myString);

//Length
const myStrLength= myString.length
// console.log(myStrLength);

// charAt - Get character at a position
for(let index=0; index<myStrLength;index++){
   // console.log(myString.charAt(index));
}
//Get Rid of spaces at start and the end
console.log(myString.trim().length);

//Replace
let toBeReplaceStr="tmomi mnay gmap mmnhaum 7g";
//g-gloabal
//console.log(toBeReplaceStr.replace(/M/gi,""));
console.log(toBeReplaceStr.replaceAll("m",""));

let containNumStr="200mins";
let num=containNumStr.replace(/[^0-9]/gi,"");
console.log(num);

//concatenation/ concat
console.log("Hello".concat(" Tui ten teo!"))

//Substring
let strToBeCut="Cut thu tau coi";
const startIndex=0;
const endIndex=5;
console.log(strToBeCut.substring(startIndex,endIndex));

let returnedDomain=getDomainName("https://sdetpro.com/");
console.log(returnedDomain);

function getDomainName(url){
    let domain;
    const indicator="://";
    const indexOfIndicator=url.indexOf(indicator);
    if(indexOfIndicator<0){
        const errMsg='Invalid url, provided url was: ${url}';
        throw Error(errMsg);
    }
    const domainStartIndex=indexOfIndicator+indicator.length;
    return url.substring(domainStartIndex).replace(/\//gi,"");
}


//Split
let googleUrl="https://google.com";
console.log(googleUrl.split(":"));