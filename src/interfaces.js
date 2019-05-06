// 使用接口来定义对象的类型
// 对行为抽象
var tom = {
    name: 'Tom',
    age: 23,
    gender: 'male',
    address: 'jaslfsljfsjj',
    id: 'sss',
    readName: 'not Modify'
};
// tom.readName = 'modify this';
tom.age = 32;
// 实例化出来的对象必须要符合接口编写的内容规范，多一些少一些属性都是不允许的
// 
