export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
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

console.log("🚀 ~ format:", myDate.printFormat())

const addDays = myDate.add(3, 'days');
console.log("🚀 ~ addDays:", myDate.printFormat())

const addMouths = myDate.add(3, 'mouths');
console.log("🚀 ~ addMouths:", myDate.printFormat())

const addYears = myDate.add(3, 'years');
console.log("🚀 ~ addYears:", myDate.printFormat())


console.log("🚀 ~ myDate:", myDate.day)
console.log("🚀 ~ myDate:", myDate.month)
console.log("🚀 ~ myDate:", myDate.year)
