import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount {
  depositWithBonus = (amount: number): void => {
    this.deposit(amount + 10)
  }
}
