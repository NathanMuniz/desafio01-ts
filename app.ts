import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { GuessAccount } from './class/GuessAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(200)
peopleAccount.withdraw(50)
peopleAccount.getName()
peopleAccount.setName('test')
peopleAccount.validateStatus()
peopleAccount.getBalance()





const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)

companyAccount.deposit(100)
companyAccount.withdraw(50)
companyAccount.getLoan(1000)
companyAccount.setName('test')
companyAccount.validateStatus()
companyAccount.getBalance



const guessAccount: GuessAccount = new GuessAccount('Guess', 30)
console.log(guessAccount)
guessAccount.depositPlusTen(100)
guessAccount.deposit(500)
guessAccount.withdraw(200)
guessAccount.setName('tes')
guessAccount.getBalance()
guessAccount.getName()

