/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-03-07 15:00:40
 */

interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

function trainAnimal(animal: Bird | Dog) {
  // 用断言来保护类型，如果会飞则断定是鸟儿
  if (animal.fly) {
    (animal as Bird).sing()
  } else {
    // 否则断定为狗儿
    (animal as Dog).bark()
  }
}

function trainAnimals(animal: Bird | Dog) {
  // 或者使用in关键字来做断言
  if ('sing' in animal) {
    animal.sing()
  } else {
    animal.bark()
  }
}

function add (first: string | number, second: string | number) {
  // 使用typeof来做类型断言
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// 如果类型是类的话，可以使用instanceof来做类型保护
class NumberObj {
  count: number
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0
}

