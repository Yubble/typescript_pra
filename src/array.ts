// 对数组的普通声明
let fiboArr: number[] = [1, 2, 1, 4]
console.log(fiboArr)

  // 给与数组不同内容类型，不然只有number的话会报错
let combinArr: (number | string)[] = [1, 3, 'wo', 9]
console.log(combinArr)

// 数组泛型表示数组
let genericArr: Array<number> = [1, 3, 2, 5, 3];
console.log(genericArr)

// 用接口表示数组
interface NumArr {
  [index: number]: (number | string);
}
let interArr: NumArr = [3, 1, 1 ,5 ,2, 0, 6, '4']
console.log(interArr)

// 写出Json类型的数组
let JsonArr: any[] = ['xcat', {'www': 123123}]
console.log(JsonArr)

// 获取类数组
function sum(a, ...c): void {
  let args: IArguments = arguments;

  console.log(args)
}
sum(3, 4, 'ji')