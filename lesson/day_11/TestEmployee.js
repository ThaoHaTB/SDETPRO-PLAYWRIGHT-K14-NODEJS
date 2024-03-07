const Employee=require("./Employee.js");
const SalaryController=require("./SalaryController.js");

const teo=new Employee(50);
const ti=new Employee(40);

const salaryController= new SalaryController();
const totalSalary=salaryController.getTotalSalary([teo,ti]);
console.log(totalSalary);