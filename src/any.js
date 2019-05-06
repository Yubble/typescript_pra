// 可以用任意类型
var myFavoriteNumber = 'seven';
myFavoriteNumber = 4;
// 在任意类型的情况下可以加上属性
var anything = "hello";
anything.name = '132';
console.log(anything.name);
// 任意类型可以随意调用方法
var anyThing2 = 'Tom';
var anypar = anyThing2.getNN('Jerry');
console.log(anypar);
// 不给定类型指的时候，默认是any类型
var something;
something = 'seven';
something = 7;
something.setName('Tom');
