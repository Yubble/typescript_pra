// 对数组的普通声明
var fiboArr = [1, 2, 1, 4];
console.log(fiboArr);
// 给与数组不同内容类型，不然只有number的话会报错
var combinArr = [1, 3, 'wo', 9];
console.log(combinArr);
// 数组泛型表示数组
var genericArr = [1, 3, 2, 5, 3];
console.log(genericArr);
var interArr = [3, 1, 1, 5, 2, 0, 6, '4'];
console.log(interArr);
// 写出Json类型的数组
var JsonArr = ['xcat', { 'www': 123123 }];
console.log(JsonArr);
// 获取类数组
function sum(a) {
    var c = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        c[_i - 1] = arguments[_i];
    }
    var args = arguments;
    console.log(args);
}
sum(3, 4, 'ji');
