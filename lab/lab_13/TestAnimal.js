const Horse = require('./Horse');
const Tiger = require('./Tiger');
const Dog = require('./Dog');
const Racing = require('./Racing');

const horse = new Horse();
const tiger = new Tiger();
const dog = new Dog();

const winner = Racing.getWiner([horse, tiger, dog]);
console.log(horse);
console.log(tiger);
console.log(dog);

console.log(`Winner is ${winner.name}, with speed: ${winner.speed}`);