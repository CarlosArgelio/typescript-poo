import { Dog } from "./09-protected";

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }

function getValue<T>(value: T) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([1, 2, 3, 4]).map;
getValue<Dog>(new Dog('Firulais', 'Pastor Aleman')).greeting;
