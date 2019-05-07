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
// tom.readName = 'modify this';  // 不可修改
tom.age = 32;
var simObj = {
    doorWhistle: function () {
        return '点击了防盗门铃';
    },
    interAlarm: function () {
        console.log('触发了接口报警');
    }
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.interAlarm = function () {
        console.log('触发了警报');
    };
    return Car;
}());
var c = new Car();
c.interAlarm();
function getCounter() {
    var Cou = function (start) { return 'str'; };
    Cou.interval = 324;
    Cou.reset = function () {
        console.log('show reset');
    };
    return Cou;
}
var cc = getCounter();
console.log(cc(122));
cc.reset();
console.log(cc.interval);
