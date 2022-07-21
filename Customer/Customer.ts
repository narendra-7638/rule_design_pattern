import moment from "moment";

export class Customer {
  constructor(
    private dob: moment.Moment,
    private firstPurchase: moment.Moment,
    private newCustomer: boolean
  ) {}

  isBirthdayToday(): boolean {
    const today = moment();
    return (
      today.date() === this.dob.date() && today.month() === this.dob.month()
    );
  }

  isNewCustomer(): boolean {
    return this.newCustomer;
  }

  beenLoyalFor(): number {
    const years = moment().diff(this.firstPurchase, "years");
    return years > 0 ? years : 0;
  }

  isSenior(): boolean {
    return moment(this.dob).year() > 65;
  }
}
