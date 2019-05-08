// 函数声明
function sumDeclar(x: number, y:number): number {
  return x + y;
}

const resDec: number = sumDeclar(3, 4)
console.log(resDec)

// 函数表达式，需要在sumExpress: 加上函数类型(x: number, y: number) => number
const sumExpress: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
// 如果这样写恶心的话也可以借用ts的类型推断
const sumExpressSim: (x: number, y: number) => number = function (x, y) {
  return x + y;
}

const sumExp: number = sumExpress(5, 1)
console.log(sumExp)

// 接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}
console.log(mySearch('believe', 'lie'))

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
console.log('tomcat is ', tomcat);
console.log('tom is ', tom)

// 参数默认值
function buildNameDef(firstName: string, lastName: string = 'lastName') {
  return firstName + ' ' + lastName;
}

console.log(buildNameDef('curry'))

// 剩余参数
function surplusParams(a, ...items: any): void {
  console.log('a is ', a)
  console.log('items is ', items)
}
surplusParams('sr', 3, 41)


// 重载 不可以用|，这样无法保证x和y是同一种类型
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

console.log(reverse('123456'))

// 只有使用|的时候才能用类型断言
function reloadFn(x: number, y: number): number;
function reloadFn(x: string, y: string): string;
function reloadFn(x: any, y: any): any {
  if (typeof x == 'number') {
    console.log('输入了数字，返回123')
    return 123
  } else if (<string>x || <string>y) {
    console.log("输入了字符串，返回'123")
    return '123'
  }
}
console.log(reloadFn(34, 22))
console.log(reloadFn('fs', '32'))

