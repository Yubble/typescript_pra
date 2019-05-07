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
