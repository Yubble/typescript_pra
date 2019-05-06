// 使用接口来定义对象的类型
// 对行为抽象

interface Person {
  name: string;
  age: number;
  selectable?: boolean;  // 带问号的是可选择的属性，非必写
  [pName: string]: any;   // 任意属性，可以让使用者任意创建各种属性，各种值
  readonly readName: string;
}

let tom: Person = {
  name: 'Tom',
  age: 23,
  gender: 'male',
  address: 'jaslfsljfsjj',
  id: 'sss',
  readName: 'not Modify'
}

// tom.readName = 'modify this';  // 不可修改
tom.age = 32

// 实例化出来的对象必须要符合接口编写的内容规范，多一些少一些属性都是不允许的

// 

