console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6));

class MyMath {
  static readonly PI = 3.14

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item)
  }
}

// const math = new MyMath()
// math.PI

console.log('My Math ==> ', MyMath.PI);
// MyMath.PI = 10 ERROR

const numbers = [-1, -2, -3]
console.log('My Math MAX ==> ', MyMath.max(...numbers))
