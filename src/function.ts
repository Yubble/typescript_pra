// 函数声明
function sumDeclar(x: number, y:number): number {
  return x + y;
}

const resDec: number = sumDeclar(3, 4)
console.log(resDec)

// 函数表达式
const sumExpress: (x: number, y: number) => number = function (x: number, y: number): number {
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


// 重载
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

console.log(reverse('123456'))