export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log('Voce depositou')
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus()){
      if(this.balance < amount) {
        throw new Error(`Valor de R$ ${amount} não pode ser sacado pelo motivo de saldo insuficiente.`)
      }

      this.balance -= amount

      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
