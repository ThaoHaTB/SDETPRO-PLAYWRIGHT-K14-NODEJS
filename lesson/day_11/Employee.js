class Employee{
    constructor(salary){
        this._salary=salary;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }
}
module.exports=Employee;