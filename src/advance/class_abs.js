var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类
var absAnimal = /** @class */ (function () {
    function absAnimal(name) {
        this.name = name;
    }
    absAnimal.prototype.eat = function () { console.log('我会吃吃吃吃'); };
    ;
    return absAnimal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log('Cat name is ', this.name);
    };
    Cat.prototype.attack = function () {
        console.log(this.name + " \u5F00\u59CB\u653B\u51FB");
    };
    return Cat;
}(absAnimal));
var cat = new Cat('Tom');
cat.sayHi();
cat.attack();
cat.eat();
