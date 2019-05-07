// 声明一个基本类型
declare let JQuery: (selector: string) => any;

// 对声明进行赋值
JQuery = function (selector) {
  return selector
}
console.log(JQuery('#fn'))

// 声明一个函数类型
declare function JQfn(selector: string): any;
// function JQfn(selector: string): string {
//   return selector
// }
JQfn('re JQ Fn')