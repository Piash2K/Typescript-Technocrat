class BankAccount {
  readonly userId: number;
  userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }
}

class StudentBankAccount extends BankAccount {
    test(){
        this.userBalance
    }
}

const PiashVaierAccount = new BankAccount(222, "Piash", 20);

PiashVaierAccount.addBalance(20);
PiashVaierAccount.addBalance(50);


console.log(PiashVaierAccount)