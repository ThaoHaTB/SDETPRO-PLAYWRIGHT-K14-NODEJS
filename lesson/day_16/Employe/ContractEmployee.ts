import Employee from "./Employee";

export default class ContractEmployee extends Employee {
    static contractSalary = 40000;
    constructor(name: string) {
        super(name);
        this.salary=40000;
    }
    getSalary(): number {
        return this.salary;
    }
    getSupportSalary(): number {
       return 0;
    }
}