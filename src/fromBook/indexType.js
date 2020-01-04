/**
 * 索引类型
 * */
function pluck(obj, names) {
    return names.map(function (name) { return obj[name]; });
}
var person = {
    name: 'Yubble',
    age: 28
};
var arrName = pluck(person, ['name']);
// const arrProfession = pluck(person, ['profession'])  // 会报错，因为Person接口中没有定义profession
console.log('arrname is ', arrName);
