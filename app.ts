import { CompanyAccount } from './class/CompanyAccount'
import { EspecialAccount } from './class/EspecialAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(500)
peopleAccount.getBalance()
peopleAccount.getName()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(2000)
companyAccount.getBalance()
companyAccount.getLoan(1000)
companyAccount.getBalance()
console.log(companyAccount)

const especialAccount: EspecialAccount = new EspecialAccount('Luiz', 30)
especialAccount.deposit(100)
especialAccount.getBalance()
especialAccount.depositWithBonus(300)
especialAccount.getBalance()
especialAccount.getName()
console.log(especialAccount)

