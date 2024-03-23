export default class Employee{

    protected name: string;
    protected salary: number;

    constructor (name: string, salary:number){
            this.name=name;
            this.salary=salary;
    }

    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
}