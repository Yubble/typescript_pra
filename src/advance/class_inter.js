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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.intAlert = function () {
        console.log('启动了防盗门的报警');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.intAlert = function () {
        console.log('启动了车的报警');
    };
    Car.prototype.turnOn = function () {
        console.log('启动了车灯');
    };
    return Car;
}());
var c = new Car();
c.intAlert();
