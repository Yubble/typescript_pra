// 普通泛型
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

let scs = createArray(3, 'x');
console.log(scs)

// 多类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

let varp = swap([7, 'seven']);
console.log(varp)