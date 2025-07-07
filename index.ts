import { BankAccount } from "./banking/BankAccount";
import { CurrentAccount } from "./banking/CurrentAccount";
import { Person } from "./banking/Person";
import { SavingsAccount } from "./banking/SavingsAccount";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaSavingsAccount = new SavingsAccount(maria, 100, 2);

const david = new Person("David", "Rappa", new Date("1996-02-16"));
const davidCurrentAccount = new CurrentAccount(david, 100, 100);

console.log(mariaSavingsAccount.accountDetails);
console.log(davidCurrentAccount.accountDetails);

const accountNumber = "123456";

console.log(BankAccount.validateAccountNumber(accountNumber));
