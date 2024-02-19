export class MyDate {
  public year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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
// myDate.addPadding(12) ERROR

const getDay = myDate.getDay();
console.log("🚀 ~ getDay:", getDay)
