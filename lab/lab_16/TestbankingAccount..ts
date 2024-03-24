import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";


const checkingAccount= new CheckingAccount('15272',7000);
const savingAccount= new SavingAccount('7872292',443);


checkingAccount.withdraw(322);
console.log(`Balance is ${checkingAccount.getBalance()}`);
checkingAccount.deposit(366);
console.log(`Balance is ${checkingAccount.getBalance()}`);


savingAccount.deposit(366);
console.log(`Balance is ${savingAccount.getBalance()}`);
savingAccount.withdraw(1000);
console.log(`Balance is ${savingAccount.getBalance()}`);