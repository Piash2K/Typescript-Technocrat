// getter ---> get korbe

// setter ----> set korbe

/* Without using set and get */

// access >> modify

// class BankAccount {
//   readonly userId: number;
//   userName: string;
//   private userBalance: number;

//   constructor(userId: number, userName: string, userBalance: number) {
//     this.userId = userId;
//     this.userName = userName;
//     this.userBalance = userBalance;
//   }

//   addBalance(balance: number) {
//     return (this.userBalance = this.userBalance + balance);
//   }
//   getBalance() {
//     return this.userBalance;
//   }
// }

// const PiashVaierAccount = new BankAccount(222, "Piash", 20);

// PiashVaierAccount.addBalance(20); //function k call korte hocche
// PiashVaierAccount.addBalance(50);

// console.log(PiashVaierAccount.getBalance());  //function k call korte hocche

/* Without using set and get */

class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // balance k set korteche
  set addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  //balance get korbo
  get getBalance() {
    return this.userBalance;
  }
}

const PiashVaierAccount = new BankAccount(222, "Piash", 20);

PiashVaierAccount.addBalance = 20;   //set use kore function k call korte hocche na

console.log(PiashVaierAccount.getBalance);  //get use kore function k  call korte hocche na
