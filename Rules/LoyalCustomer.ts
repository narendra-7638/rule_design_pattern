import { Customer } from "../Customer/Customer";
import { IRule } from "./IRule";
import { BirthdayDiscount } from "./BirthdayDiscount";

export class LoyalCustomer implements IRule {
  constructor(private yearAsCustomer: number, private discount: number) {}

  calculateDiscountPercentage(customer: Customer): number {
    const birthdayDiscount = new BirthdayDiscount();
    return customer.beenLoyalFor() === this.yearAsCustomer
      ? this.discount + birthdayDiscount.calculateDiscountPercentage(customer)
      : 0;
  }
}
