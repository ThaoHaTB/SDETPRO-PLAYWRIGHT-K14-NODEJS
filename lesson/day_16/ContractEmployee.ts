import Employee from "./Employee";

export default class ContractEmployee extends Employee {
    static contractSalary = 40000;
    constructor(name: string) {
        super(name, ContractEmployee.contractSalary);
    }
}