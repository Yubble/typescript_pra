/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-03-09 16:23:50
 */

// 由于泛型的加持，testDecorator只能作为类的构造器来使用
function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    constructor (...args: any[]) {
      super()
      console.log('运行装饰器类构造函数')
    }
    name = 'lu'
    getName = () => {
      return this.name
    }
  };
}

@testDecorator
class Test1 {
  name: string;
  constructor(name: string) {
    console.log('运行原本类构造函数')
    this.name = name
  }
}

const test = new Test1('dell')
console.log('name is ', test.name)
console.log('getName is ', (test as any).getName())

/*-------------------------------------------*/

// 更高级写法，将函数继承伪装成装饰器，实际上是用子类继承的方式对父类进行劫持

const nbDecorator = () => {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      constructor (...args: any[]) {
        super(...args)
        this.name = 'lu ' + this.name
      }
      // name = 'lu' + super.name;
      getName = () => {
        return this.name
      }
    };
  }
}

const nTest = nbDecorator()(class {
  name: string;
  constructor(name: string) {
    console.log('给原本类name属性赋值：', name)
    this.name = name
  }
})

const stest = new nTest('lili')
// console.log('stest is ', stest)
console.log('getName is ', stest.getName())
