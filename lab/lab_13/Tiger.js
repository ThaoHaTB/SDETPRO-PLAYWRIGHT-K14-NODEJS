const Animal = require('./Animals');
class Tiger extends Animal {
    static maxSpeed = 100;
    constructor() {
        super(Tiger.maxSpeed);
        this.name = super.getName();
    }
}
module.exports = Tiger;