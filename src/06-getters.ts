export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
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
      this._day += amount;
    }
    if ( type === 'mouths') {
      this.month += amount;
    }
    if ( type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this._day;
  }

  get isLeapYear(): boolean {
    return this.year % 400 === 0 || (this.year % 100 !== 0 && this.year % 4 === 0);
  }
}

const myDate = new MyDate(2022, 3, 15);
console.log(myDate.printFormat());

console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 3, 15);
console.log(myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 3, 15);
console.log(myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 3, 15);
console.log(myDate4.isLeapYear);
