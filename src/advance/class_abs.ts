// 抽象类
abstract class absAnimal {
  public name: string;
  public constructor(name) {
    this.name = name
  }
  public eat(): void { console.log('我会吃吃吃吃') };
  public abstract attack(): void;   // 如果有抽象方法就必须要继承下来
}

class Cat extends absAnimal {
  public constructor(name) {
    super(name)
  }
  public sayHi() {
    console.log('Cat name is ', this.name)
  }
  public attack() {
    console.log(`${this.name} 开始攻击`)
  }
}

let cat = new Cat('Tom')
cat.sayHi()
cat.attack()
cat.eat()