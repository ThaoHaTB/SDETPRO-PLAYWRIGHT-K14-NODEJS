const Animal = require('./Animals');
const Tiger = require('./Tiger');
class Hourse extends Animal {
    static maxSpeed = 75;
    constructor(){
        super(Hourse.maxSpeed);
        this.name=super.getName();
    }
}
module.exports = Hourse;