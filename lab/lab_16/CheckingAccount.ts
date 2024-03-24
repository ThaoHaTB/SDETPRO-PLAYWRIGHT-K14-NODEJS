import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount{

    constructor(bankingAcountId: string, balance: number){
        super(bankingAcountId,balance);
        this.minAmount=50;
    }
    deposit(amount: number): void {
        this.balance=this.balance+amount;
    }
    withdraw(amount: number): void {
        if(this.balance-amount>this.minAmount){
                this.balance=this.balance-amount;
        }
        else{
            throw new Error(`Current balance should equal ${this.minAmount}`);
        }
    }
    getBalance(): number {
       return this.balance;
    }
    
}