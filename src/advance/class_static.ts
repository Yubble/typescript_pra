/*
 * @Name: 练习静态属性
 * @Description: 练习静态属性
 * @Author: 刘燕保
 * @Date: 2022-03-06 23:33:53
 */


class Demo {
  // 必须要使用static，否则getInstance上访问不到
  private static instance: Demo;
  private constructor() {}

  static getInstance () {
    if (!this.instance) {
      console.log('不存在instance')
      this.instance = new Demo()
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
