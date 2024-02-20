export class Animal {
  constructor(
    public name: string,
  ) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
    // this.move();
  }
}


const felipe = new Animal('Felipe');
felipe.move();
console.log(felipe.greeting())

const Gar = new Dog('Gar', 'Carlos');
Gar.move();
console.log(Gar.greeting())
Gar.woof(3);
console.log(Gar.owner);

