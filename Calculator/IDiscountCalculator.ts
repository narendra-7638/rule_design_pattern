import { Customer } from "../Customer/Customer";

export interface IDiscountCalculator {
  calculateDiscountPercentage(customer: Customer): number;
}
