export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7, month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if ( type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this._day;
  }

  get month() {
    return this._month
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
    this._month = newValue
  }

  get isLeapYear(): boolean {
    return this.year % 400 === 0 || (this.year % 100 !== 0 && this.year % 4 === 0);
  }
}

const myDate = new MyDate(2022, 3, 15);
console.log(myDate.printFormat());
myDate.month = 4;
console.log("🚀 ~ myDate.month 4:", myDate.month)

myDate.month = 49;
console.log("🚀 ~ myDate.month error:", myDate.month)
