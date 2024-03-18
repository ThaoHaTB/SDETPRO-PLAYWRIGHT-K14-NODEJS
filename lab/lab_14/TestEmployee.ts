import Employee from './Employee';
import ContractEmployee from './ContractEmployee';
import FulltimeEmployee from './FulltimeEmployee';
import {sumSalary,minMaxSalary,sortBySalary,sortByName} from'./Salary'


const emp_1 = new ContractEmployee('Mai');
const emp_2 = new ContractEmployee('Binh');
const emp_3 = new FulltimeEmployee('Ti');
const emp_4 = new FulltimeEmployee('Linh');
const emp_5 = new FulltimeEmployee('Co');


let employeeList: Employee[];
employeeList = [emp_1,emp_2,emp_3,emp_4,emp_5];

console.log(`Sum salary: ${sumSalary(employeeList)}`);
console.log('================================');
console.log(minMaxSalary(employeeList));
console.log('================================');
console.log('Sort by salary:')
sortBySalary(employeeList);
console.log('================================');
console.log('Sort by name:')
sortByName(employeeList);

