/*
 * @Name: 类泛型
 * @Description: 类泛型
 * @Author: 刘燕保
 * @Date: 2022-03-07 17:38:34
 */

class DataManager<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data = new DataManager<number>([1])
data.getItem(0)

// 类中使用接口作为泛型
interface Item {
  name: string;
}

// 需要将泛型标识T继承自Item，因为泛型只是个名称，不能直接写Item
class DataManager1<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number) {
    return this.data[index].name
  }
}

const data1 = new DataManager1([
  {
    name: 'dell'
  }
])

// 泛型只允许数组或字符串的情况
class DataManager2<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number) {
    return this.data[index]
  }
}

const data2 = new DataManager2([1])