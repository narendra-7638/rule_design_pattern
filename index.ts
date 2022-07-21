import moment from "moment";
import { Customer } from "./Customer/Customer";
import { DiscountCalculator } from "./Calculator/DiscountCalculator";

const dob = moment("1994-07-21");
const firstPurchase = moment("2021-07-21");
const newCustomer = false;

const customer = new Customer(dob, firstPurchase, newCustomer);

const discountCalculator = new DiscountCalculator();

console.log(
  "DISCOUNT: ",
  discountCalculator.calculateDiscountPercentage(customer)
);
