export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printForma(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'mouths' | 'years') {
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
}

const myDate = new MyDate(2022, 3, 15);
console.log("🚀 ~ myDate:", myDate.day)
myDate.day = 20;
console.log("🚀 ~ myDate.day:", myDate.day)
