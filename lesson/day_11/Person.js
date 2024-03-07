class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    //getter
    get name() {
        return this._name;
    }
    set name(name) {
        this._name=name;
    }

    get age() {
        return this._age;
    }
}

module.exports=Person;