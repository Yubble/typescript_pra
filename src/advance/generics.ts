/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-24 19:16:05
 */
// 普通泛型
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

console.log('-------- 普通泛型1 ---------')

// 泛型是在函数调用的时候去标准化传入的参数类型，用T去替代
// 多用于固定入参和出参需要同类型的情况
let scs = createArray<string>(3, 'x');
console.log(scs)
let scx = createArray<number>(4, 2);
console.log(scx)

console.log('-------- 普通泛型1 ---------')



// 多类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

let varp = swap([7, 'seven']);
console.log(varp)

// 泛型约束
// 单独的泛型无法确定类型，导致无法使用特别方法，所以可以用接口来做约束
interface Lengthwise {
  length: number;
}
function loggin<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg;
}

loggin('aafliwr')

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

let x = {a: 1, b: 2, c: 3, d: 4};

copyFields(x, {b: 10, d: 20})

// 