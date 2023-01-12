import { DioAccount } from "./DioAccount"

export class GuessAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  depositPlusTen(amount: number): void {
    if (this.validateStatus()) {
      let deposVal: number = (amount + 10)
      this.balance += deposVal
      console.log(`Depósito de ${deposVal} relizado com sucesso. Valor Atual: R${this.balance}`)
      return;
    }

    throw new Error("Depósito NÃO REALIZADO. (status) inválido.")

  }


} 
