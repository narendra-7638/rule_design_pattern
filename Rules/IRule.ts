import { Customer } from "../Customer/Customer";

export interface IRule {
  calculateDiscountPercentage(customer: Customer): number;
}
