const Post = require('../../lab/lab_11/Post.js');
// Function declaration
function addEventListener(a, b) {
    return a + b;
}

//Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(1));


//No params
const sayHello = () => {
    console.log("Hello");
}
console.log(sayHello());

const intArray = [1, 2, 3, 4, 5];
const filterArray = intArray.filter(value => value % 2 !== 0);
console.log(filterArray);

//Destructure/Destructuring{}
const tempPost = { id: 1, body: "this is post body" };
const convertPost = ({ id, body }) => new Post(id, body);
console.log(convertPost(tempPost));

//Lexical this binding
const person = {
    name: "Teo",
    sayHello: function () {
        setTimeout(function () {
            //Back tick <--- String literal
            console.log(`Hello, tui thên ${this.name}`);
        },500);

        setTimeout(() => {
            //Back tick <--- String literal
            console.log(`Hello, tui thên ${this.name}`);
        },1000);
    }
}
person.sayHello();