import Employee from "./Employee";

export default class FulltimeEmployee extends Employee {
    static fulltimeSalary = 50000;
    
    constructor(name: string) {
        super(name, FulltimeEmployee.fulltimeSalary);
    }
    getSupportSalary():number{
        return 5000;
    }
}