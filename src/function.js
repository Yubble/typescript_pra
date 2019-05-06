// 函数声明
function sumDeclar(x, y) {
    return x + y;
}
var resDec = sumDeclar(3, 4);
console.log(resDec);
// 函数表达式
var sumExpress = function (x, y) {
    return x + y;
};
var sumExp = sumExpress(5, 1);
console.log(sumExp);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
console.log(mySearch('believe', 'lie'));
// 可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
console.log('tomcat is ', tomcat);
console.log('tom is ', tom);
// 参数默认值
function buildNameDef(firstName, lastName) {
    if (lastName === void 0) { lastName = 'lastName'; }
    return firstName + ' ' + lastName;
}
console.log(buildNameDef('curry'));
// 剩余参数
function surplusParams(a) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    console.log('a is ', a);
    console.log('items is ', items);
}
surplusParams('sr', 3, 41);
// 重载
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse('123456'));
