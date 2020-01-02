/**
 * 联合类型
 * */

function fn1 (arg: string | number) {
  /**
   * 此时内部便可以根据不同类型参数写不同逻辑
   * */
}

interface A {
  a: number,
  b: string
}

interface B {
  b: string,
  c: number
}

interface D {
  b: number,
  f: number
}

let obj1: A | B | D

// obj1.a = 3 //报错，联合属性中取交集
// 如果一个知识联合类型，我们只能访问他们共有的属性

// 因为b在接口中存在string和number两种形态，所以给它这两种赋值都可以
obj1.b = '32'
obj1.b = 2
// obj1.f = 33  f访问不到
