import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "Silva", new Date("1996-01-15"));

  maria.updateFirstName("Maria Clara");

  console.log(maria.getFullName());
}

main();
