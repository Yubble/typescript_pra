/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-24 19:16:05
 */
// 抽象类
abstract class absAnimal {
  public name: string;
  public constructor(name: any) {
    this.name = name
  }
  public eat(): void { console.log('我会吃吃吃吃') };
  public abstract attack(): void;   // 如果有抽象方法就必须要继承下来
}

class Cat extends absAnimal {
  public constructor(name: any) {
    super(name)
  }
  public sayHi() {
    // super同时指向父类，如果想调用父类某个方法，则可以使用super
    super.eat()
    console.log('Cat name is ', this.name)
  }
  public attack() {
    console.log(`${this.name} 开始攻击`)
  }
}

let cat = new Cat('TTT')
cat.sayHi()
cat.attack()
cat.eat()