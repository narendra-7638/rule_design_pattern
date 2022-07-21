import { Customer } from "../Customer/Customer";
import { IRule } from "./IRule";

export class BirthdayDiscount implements IRule {
  calculateDiscountPercentage(customer: Customer): number {
    return customer.isBirthdayToday() ? 0.1 : 0;
  }
}
