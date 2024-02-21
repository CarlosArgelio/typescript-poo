export class MyServices {
  static instance: MyServices | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyServices.instance === null) {
      console.log('deberia entrar 1 vez');

      MyServices.instance = new MyServices(name)
    }
    return MyServices.instance
  }
}

const myServices01 = MyServices.create('Carlos 1');
console.log("🚀 ~ myServices01:", myServices01.getName())

const myServices02 = MyServices.create('Carlos 2');

const myServices03 = MyServices.create('Carlos 3');

console.log(myServices01 === myServices02);
