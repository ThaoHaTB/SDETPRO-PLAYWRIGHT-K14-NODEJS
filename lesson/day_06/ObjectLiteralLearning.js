//Create
let teo={
    name: "Teo",
    "my age":8
};
//read: dot notation, [] syntax
console.log(teo.name);
console.log(teo["my age"]);
//Update
teo.name="Tun";
teo["my age"]=22;
teo.gender="M";

// delete properties
delete teo["my age"];
console.log(teo);

//delete 
delete teo;
console.log(teo);