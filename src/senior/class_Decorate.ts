/*
 * @Name: 类的装饰器
 * @Description: 装饰器本身是一个函数，通过@符号来使用
 * @Author: 刘燕保
 * @Date: 2022-03-09 11:20:43
 */

// 类装饰器接收的是构造函数本身
function testDeco(constructor: any) {
  console.log('testDeco')
}

function testDeco1(constructor: any) {
  console.log('testDeco1')
}

// 装饰器工厂，可以编写逻辑来控制装饰器的装饰内容
function decoFac(flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      console.log('decoFac')
      constructor.prototype.getName = () => {
        console.log('输出名字为 yub')
      }
    }
  } else {
    return function () {}
  }
}

@testDeco
@testDeco1
@decoFac(false)
class Test {
}

// 同文件夹内常量名不可相同
const test123 = new Test()
