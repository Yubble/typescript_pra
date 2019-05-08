// 普通泛型
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var scs = createArray(3, 'x');
console.log(scs);
// 多类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var varp = swap([7, 'seven']);
console.log(varp);
function loggin(arg) {
    console.log(arg.length);
    return arg;
}
loggin('aafliwr');
// 多个类型参数之间也可以互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
