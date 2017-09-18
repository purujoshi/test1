class BankAccount{
    private accBalance: number;
    public deposit(amount){
        this.accBalance+=amount;
    }
    public ShowBalance(){
        console.log("Balance is:" + this.accBalance);
    }
}
var c1=new BankAccount;
c1.deposit(1000);
c1.ShowBalance();