import { CreditCard } from "./banking/CreditCard";
import { CurrentAccount } from "./banking/CurrentAccount";

import { Person } from "./banking/Person";
import { ProcessPayment } from "./banking/ProcessPayment";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaCurrentAccount = new CurrentAccount(maria, 100, "123", 2);

const david = new Person("David", "Rappa", new Date("1996-02-16"));
const davidCreditCard = new CreditCard("555 555", 5000);

const payment = new ProcessPayment(davidCreditCard, 400);

payment.execute();
