// this refer to the object of the class 


class Bank {
    balance = 0;
    constructor(balance){
        this.balance = this.balance + balance;
    }

     credit(balance){       // +
        // //Guard clause
        // if (balance <= 0) return;
        // this.balance = this.balance + balance;

        if (balance <= 0){
            console.log("negative value cannot be credit")
        }
        else {
            this.balance = this.balance + balance;
        }
    }; 
     debit(balance){     // - 
        // if (balance <= 0 && balance > this.balance ) return; 
        
        if (balance <= 0){
            console.log("negative value cannot be debit")
        }
        else if (balance > this.balance){
            console.log("enter the valid balance ");
            
        }
        else {
            this.balance = this.balance - balance;
        }

     };

     getbalance(){
        return this.balance;
     }

}

const user1 = new Bank(500);
user1.credit(100);
user1.credit(100);
user1.credit(100);
user1.credit(100);
user1.debit(1000);
// user1.debit(-500);   // Negative  debit are not allowed in bank account 



console.log("your balance is " + user1.getbalance());

