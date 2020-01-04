/**
 * 索引类型
 * */

function pluck<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(name => obj[name])
}

/**
 * 泛型T代表obj
 * K代表T中的key
 * K[]代表以K为内容的数组
 * T[K][]代表obj[name]为内容的数组
 * */

interface Person {
  name: string,
  age: number
}

const person: Person = {
  name: 'Yubble',
  age: 28
}

const arrName = pluck(person, ['name'])
// const arrProfession = pluck(person, ['profession'])  // 会报错，因为Person接口中没有定义profession
console.log('arrname is ', arrName)
