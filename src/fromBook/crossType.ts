/**
 * 第一阶段
 * 交叉类型
 *  */ 

// 基本类型是不存在交叉类型的
// type newType = number & string
// let a: newType
// 会报错

interface A {
  d: number,
  z: string
}

interface B {
  f: string,  // 这里不能出现A中的属性，不然会报错，联合属性用来解决这个问题
  g: string
}

type C = A & B
let c: C

c.d = 3


