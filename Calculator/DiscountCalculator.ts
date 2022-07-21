import { Customer } from "../Customer/Customer";
import { BirthdayDiscount } from "../Rules/BirthdayDiscount";
import { IDiscountCalculator } from "./IDiscountCalculator";
import { IRule } from "../Rules/IRule";
import { LoyalCustomer } from "../Rules/LoyalCustomer";
import { NewCustomer } from "../Rules/NewCustomer";
import { SeniorRule } from "../Rules/SeniorRule";

export class DiscountCalculator implements IDiscountCalculator {
  private rules: Array<IRule>;
  constructor() {
    this.rules = [
      new BirthdayDiscount(),
      new SeniorRule(),
      new LoyalCustomer(1, 0.1),
      new LoyalCustomer(5, 0.12),
      new LoyalCustomer(10, 0.2),
      new NewCustomer(),
    ];
  }

  calculateDiscountPercentage(customer: Customer): number {
    let discount = 0;

    for (const rule of this.rules) {
      const d2 = rule.calculateDiscountPercentage(customer);
      discount = Math.max(d2, discount);
    }

    return discount;
  }
}
