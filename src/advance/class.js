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
var Animal = /** @class */ (function () {
    function Animal(name) {
        // 用于测试集成的变量
        this.pubInher = 'pubPar';
        this.priInher = 'priPar';
        this.pubName = name;
        this.priName = name;
        this.proName = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log('Animate pubName is ', a.pubName);
// console.log('Animate proName is ', a.proName)  // 无法在外部访问protected
// console.log('Animate priName is ', a.priName)  // 无法在外部访问private
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log('继承了父级的pubName is ', _this.pubInher); // pubPar
        console.log('继承了父级的proName is ', _this.proName);
        return _this;
    }
    return Cat;
}(Animal));
var c = new Cat('Mimi');
console.log('pubName is ', c.pubName); // mimi
// console.log('priName is ', c.priName)  // 无法在外部访问private
