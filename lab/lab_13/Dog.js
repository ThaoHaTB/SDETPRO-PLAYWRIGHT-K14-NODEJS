const Animals = require('./Animals');
class Dog extends Animals {
    static maxSpeed = 60;
    constructor(){
        super(Dog.maxSpeed);
        this.name=super.getName();
    }
}
module.exports = Dog;