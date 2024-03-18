class Robot {
    //share value
    static id=0;
    constructor(){
        Robot.id++;
    }
    getID(){
        return Robot.id;
    }

    static doSthing(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

module.exports=Robot;

const robot1=new Robot();
robot1.doSthing();
console.log(robot1.getID());
const robot2=new Robot();
console.log(robot2.getID());
