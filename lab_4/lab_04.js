const readline = require('readline-sync');

let bankAccount1 = {
    accountNumber: "1",
    routingNumber: "536",
    balance: 456
};

let bankAccount2 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount2.accountNumber = "2";
bankAccount2.routingNumber = "413";
bankAccount2.balance = 222;

let bankAccount3 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount3.accountNumber = "3";
bankAccount3.routingNumber = "5553";
bankAccount3.balance = 112;

const bankAccounts = [bankAccount1, bankAccount2, bankAccount3];

let isControl = true;
while (isControl = true) {
    printMenu();
    let userOption = getUserOption();

    if (userOption == 0) {
        isControl=false;
        console.log('Go away kkk');
    } else if (userOption == 1) {
        findAnAccount(bankAccounts);
    }
    else if (userOption = 2) {
        updateBalance(bankAccounts);
    } else {
        console.log('Please recheck your option!');
    }
}

function findAnAccount(bankAccounts) {
    let userInputAccount = getUserAccountNumber();
    let count = 0;
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === userInputAccount) {
            console.log("Routing Number: " + bankAccount.routingNumber);
            console.log("Balance: " + bankAccount.balance);
            break;
        }
        else
            count++;
    }
    if (count === bankAccounts.length)
        console.log("Your account number is incorrect!");
}

function updateBalance() {
    let userInputAccount = getUserAccountNumber();
    let count = 0;
    
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === userInputAccount) {
            let userInputMoney = getUserMoney();
            if (userInputMoney < bankAccount.balance) {
                bankAccount.balance = bankAccount.balance - userInputMoney;
                console.log('You can withdraw money!')
                console.log('Your current balance is:' + bankAccount.balance)
            }
            else {
                console.log('Your balance is not enough: ' + bankAccount.balance + ', please retry later!')
            }
            break;
        }
        else
            count++;
    }
    if (count === bankAccounts.length)
        console.log("Your account number is incorrect!");
}

function getUserOption() {
    return readline.question('Please enter your Option:');
}

function getUserAccountNumber() {
    return readline.question('Please enter your Account:');
}

function getUserMoney() {
    return readline.question('Please enter your Money:');
}

function printMenu() {
    console.log("=== Banking application===");
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exist!');
}