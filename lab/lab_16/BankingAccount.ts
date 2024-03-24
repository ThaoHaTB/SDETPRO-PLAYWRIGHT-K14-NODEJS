export default abstract class BankingAccount {
    protected bankingAcountId: string;
    protected balance: number;
    protected minAmount: number=0;

    constructor(bankingAcountId: string, balance: number) {
        this.bankingAcountId = bankingAcountId;
        this.balance = balance;
        this.minAmount
    }
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void
    abstract getBalance(): number;
}