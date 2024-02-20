export class Animal {
  constructor(
    protected name: string,
  ) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('doooo');
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
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(): void {
    // code
    console.log('Moving as a dog');
    super.move(); // llamar al método de la clase padre
  }
}

const Gar = new Dog('Gar', 'Carlos');
Gar.move();
console.log(Gar.greeting())
Gar.woof(3);
console.log(Gar.owner);
// Gar.doSomething();
Gar.move();
