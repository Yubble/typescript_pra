// 可以用任意类型
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 4;

// 在任意类型的情况下可以加上属性
let anything: any = "hello";
anything.name = '132'
console.log(anything.name)

// 任意类型可以随意调用方法
let anyThing2: any = 'Tom';
let anypar: string = anyThing2.getNN('Jerry');
console.log(anypar)

// 不给定类型指的时候，默认是any类型
let something;
something = 'seven';
something = 7;
something.setName('Tom');