import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount{

    constructor(bankingAcountId: string, balance: number){
        super(bankingAcountId,balance);
        this.minAmount=0;
    }
    deposit(amount: number): void {
        this.balance=this.balance+amount;
    }
    withdraw(amount: number): void {
        if(this.balance-amount>this.minAmount){
            this.balance=this.balance-amount;
        }
        else{
            throw new Error('Amount shoubd be less than your current balance!');
        }
    }
    getBalance(): number {
       return this.balance;
    }
    
}