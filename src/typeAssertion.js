// 当传入类型为混合类型时，可以指定其为一个更准确地类型，即为类型断言
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
var res1 = getLength(42345252);
console.log('res1 is ', res1);
var res2 = getLength('sjfdqo');
console.log('res2 is ', res2);
