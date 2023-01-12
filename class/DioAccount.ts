export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount
      console.log("Depósito realizado com sucesso. Valor Atual: R$" + this.balance)
      return;
    }

    throw new Error("Depósto NÃO REALIZADO, (status) inválido")

  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount < this.balance) {
        this.balance -= amount
        console.log(`Você retirou ${amount}, da sua conta. Valor Autal: R${this.balance}`)
        return;
      }
      throw new Error("Você não pode retirar mais do que você tem em sua conta.")
    }

    throw new Error("Saque não autorizado, (status) inválido")

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
