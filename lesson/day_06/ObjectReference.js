let teo={
    name: "Teo",
    myAge:8,
    bankAccount:{
        accountNum:"123331111",
        balance:100000
    }
};
//Shallow copy -spread syntax - one level
//let ti={...teo};
//ti.name="ti";
//ti.bankAccount.balance=1; // change value of teo.bankAccount.balance

//console.log(teo);
//console.log(ti);

//Shallow copy - handle for nested object, array...
let ti=JSON.parse(JSON.stringify(teo));
ti.name="ti";
ti.bankAccount.balance=1;

// console.log(teo);
// console.log(ti);

let arr1=[1,2,3]
let arr2=[4,5,6]
let merge=[...arr1,...arr2]
//console.log(merge);

//Object.keys(targetObject)
console.log(Object.keys(teo));

//Object.values(targetObject)
console.log(Object.values(teo));

//Object.entries
console.log(Object.entries(teo));
