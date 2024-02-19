export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'mouths' | 'years') {
    if ( type === 'days') {
      this.day += amount;
    }
    if ( type === 'mouths') {
      this.month += amount;
    }
    if ( type === 'years') {
      this.year += amount;
    }
  }

  public getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2022, 3, 15);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log(myDate3.printFormat());
