class Animals{
    constructor(maxSpeed){
        this.name=this._setName();
        this.speed=this._randomSpeed(maxSpeed);
    }
    getSpeed(){
        return this.speed;
    }
    getName(){
        return this.name;
    }
    _randomSpeed(maxSpeed) {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }
    _setName(){
        return this.constructor.name;
    }
}

module.exports=Animals;