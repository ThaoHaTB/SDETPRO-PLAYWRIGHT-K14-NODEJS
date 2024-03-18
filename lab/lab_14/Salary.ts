import Employee from "./Employee";

export function sumSalary(employeeList: Employee[]) {
    let sum=0;
    employeeList.forEach(employeeList => {
        sum += employeeList.getSalary();
    });
    return sum;
}

export function minMaxSalary(employeeList: Employee[]) {
    employeeList.sort((a,b)=>b.getSalary()-a.getSalary());

    console.log(`Employee has highest salary: ${employeeList[0].getName()} and salary ${employeeList[0].getSalary()}`);

    let lastIndex=employeeList.length-1;
    console.log(`Employee has lowest salary: ${employeeList[lastIndex].getName()} and salary ${employeeList[lastIndex].getSalary()}`);
}

export function sortBySalary(employeeList: Employee[]) {
    employeeList.sort((a,b)=>b.getSalary()-a.getSalary());
    employeeList.forEach(employee=>{
        console.log(`${employee.getName()} ${employee.getSalary()}`)
    });
}
export function sortByName(employeeList: Employee[]) {
    employeeList.sort((a,b)=>a.getName().localeCompare(b.getName()));
    employeeList.forEach(employee=>{
        console.log(`${employee.getName()} ${employee.getSalary()}`)
    });
}