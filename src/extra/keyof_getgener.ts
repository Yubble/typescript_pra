// keyof 配合泛型使用
type testGener = {
  name: string,
  age: number
}

// 可以规范到第二个参数必须是第一个的属性
function getProperty<T, K extends keyof T>(obj: T, key: K, ext: boolean): T[K] | void {
  if (ext) {
    return obj[key]
  } else {
    console.log('--- 无邪 ---')
  }
}

const per: testGener = {
  name: 'yubble',
  age: 23
}

const pName = getProperty(per, 'name', false)
// console.log('---- name is ---', pName)