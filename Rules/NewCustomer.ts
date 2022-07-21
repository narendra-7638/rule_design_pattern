import { Customer } from "../Customer/Customer";
import { IRule } from "./IRule";

export class NewCustomer implements IRule {
  calculateDiscountPercentage(customer: Customer): number {
    return customer.isNewCustomer() ? 0.15 : 0;
  }
}
