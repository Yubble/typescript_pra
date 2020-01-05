function createSquar(config) {
    return config;
}
// 对象字面量会被特殊对待，不会去考虑接口中的可选属性，全部严格区分
var mySquare = createSquar({ size: 4, width: 100 }); // 会报错
function printLabel(labelObj) {
    console.log('label is ', labelObj.label);
}
var myobj = { size: 10, label: 'Size 10 obj' };
// 如果使用变量来保存对象，就不会有这种情况
printLabel(myobj);
