"use strict";
exports.__esModule = true;
var GuessAccount_1 = require("./class/GuessAccount");
/*
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(200)

peopleAccount.withdraw(50)


*/
// peopleAccount.withdraw(200)
/*
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)

companyAccount.getLoan(1000)

companyAccount.withdraw(200)

*/
var guessAccount = new GuessAccount_1.GuessAccount('Guess', 30);
console.log(guessAccount);
guessAccount.depositPlusTen(100);
console.log(guessAccount);
