type candidate = {
  name: string,
  age: number
}

type keysOfCandy = keyof candidate
// 约等于联合类型 'name' | 'age'
// 顾名思义，就是找到对象的key

const niu: keysOfCandy = 'name'

type obja = {
  key: number,
  name: string
}

// ta 能获取到obja这个对象所有属性的类型的联合类型
type ta = obja[keyof obja]
// ta 拿到的是obja对象的'key'的属性类型
type tb = obja['key']