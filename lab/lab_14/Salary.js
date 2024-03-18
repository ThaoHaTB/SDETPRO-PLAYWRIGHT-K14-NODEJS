"use strict";
exports.__esModule = true;
exports.sortByName = exports.sortBySalary = exports.minMaxSalary = exports.sumSalary = void 0;
function sumSalary(employeeList) {
    var sum = 0;
    employeeList.forEach(function (employeeList) {
        sum += employeeList.getSalary();
    });
    return sum;
}
exports.sumSalary = sumSalary;
function minMaxSalary(employeeList) {
    employeeList.sort(function (a, b) { return b.getSalary() - a.getSalary(); });
    console.log("Employee has highest salary: ".concat(employeeList[0].getName(), " and salary ").concat(employeeList[0].getSalary()));
    var lastIndex = employeeList.length - 1;
    console.log("Employee has lowest salary: ".concat(employeeList[lastIndex].getName(), " and salary ").concat(employeeList[lastIndex].getSalary()));
}
exports.minMaxSalary = minMaxSalary;
function sortBySalary(employeeList) {
    employeeList.sort(function (a, b) { return b.getSalary() - a.getSalary(); });
    employeeList.forEach(function (employee) {
        console.log("".concat(employee.getName(), " ").concat(employee.getSalary()));
    });
}
exports.sortBySalary = sortBySalary;
function sortByName(employeeList) {
    employeeList.sort(function (a, b) { return a.getName().localeCompare(b.getName()); });
    employeeList.forEach(function (employee) {
        console.log("".concat(employee.getName(), " ").concat(employee.getSalary()));
    });
}
exports.sortByName = sortByName;
