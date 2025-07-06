import { CompositionBankAccount } from "./banking/CompositionBankAccount";

import { Person } from "./banking/Person";

import {
  OverdraftWithdrawal,
  StandardWithdrawal,
} from "./banking/WithdrawalStrategy";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaSavingsAccount = new CompositionBankAccount(
  maria,
  100,
  "123",
  new StandardWithdrawal()
);

const david = new Person("David", "Rappa", new Date("1996-02-16"));
const davidCurrentAccount = new CompositionBankAccount(
  david,
  100,
  "1111",
  new OverdraftWithdrawal(100)
);

/**
 *
 * @param sender envia
 * @param receiver recebe
 * @param amount quantidade
 */
function transaction(
  sender: CompositionBankAccount,
  receiver: CompositionBankAccount,
  amount: number
) {
  try {
    sender.withdraw(amount);
    receiver.deposit(amount);
    console.log("Transaction successful");
  } catch (error) {
    console.log(error.message);
  }
}

// enviar 50 do David para a Maria
transaction(davidCurrentAccount, mariaSavingsAccount, 200);
