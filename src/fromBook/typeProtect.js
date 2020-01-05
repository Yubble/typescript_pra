/**
 * 类型保护
*/
function getPerson() {
    return {
        speech: function () {
            console.log('我是教学的');
        },
        learn: function () {
            console.log('我可以学习');
        },
        teach: function () {
            console.log('我是教学的');
        }
    };
}
// 如果是函数使用接口，则必须要有两个接口的并集，且出现一个接口特有方法
var stu = getPerson();
stu.speech();
stu.learn();
stu.teach();
function isTeacher(person) {
    return person.teach !== undefined;
}
if (isTeacher(stu)) {
    stu.teach();
}
else {
    stu.learn();
}
