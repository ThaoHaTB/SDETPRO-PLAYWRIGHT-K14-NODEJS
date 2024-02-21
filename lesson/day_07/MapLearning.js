// CRUD - Create|Read|Update|Delete
let emergencyList=new Map();
emergencyList.set('113','Police Dept');
emergencyList.set('114','Fire Dept');
emergencyList.set('115','Hospital Dept');
emergencyList.set('116','Others');

// Read a single value
console.log(emergencyList.get(113));
console.log(`Is 113 key existing?: ${emergencyList.has('113')}`);

//Lop the map entries
console.log("=====Loop the map entries viva keys");
for(const key of emergencyList.keys()){
    console.log(`${key}: ${emergencyList.get(key)}`);
}

console.log("=====Loop the map entries viva values");
for(const value of emergencyList.values()){
    console.log(`Value:  ${value}`);
}

console.log("=====Iterator | keys=======");
console.log(Array.from(emergencyList.keys())[0]);

console.log(`Map size: ${emergencyList.size}`);

// Delete
emergencyList.delete('116');
console.log(`Map size: ${emergencyList.size}`);
printTheMap(emergencyList);

function printTheMap(emergencyList){
    for(const key of emergencyList.keys()){
        console.log(`${key}: ${emergencyList.get(key)}`);
    }
}
