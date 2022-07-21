import { Customer } from "../Customer/Customer";
import { IRule } from "./IRule";

export class SeniorRule implements IRule {
  calculateDiscountPercentage(customer: Customer): number {
    return customer.isSenior() ? 0.05 : 0;
  }
}
