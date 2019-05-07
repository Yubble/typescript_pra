
class Animal {
  // public 公有属性
  public pubName;
  // private 私有属性，不能在外部调用，也不能通过继承获取
  private priName;
  // 用于测试集成的变量
  public pubInher = 'pubPar';
  private priInher = 'priPar';
  // protected 保护属性，不能在外部被调用，但是可以通过继承获取
  protected proName;
  public constructor(name) {
    this.pubName = name
    this.priName = name
    this.proName = name
  }
}

let a = new Animal('Jack');
console.log('Animate pubName is ', a.pubName)
// console.log('Animate proName is ', a.proName)  // 无法在外部访问protected
// console.log('Animate priName is ', a.priName)  // 无法在外部访问private

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log('继承了父级的pubName is ', this.pubInher)  // pubPar
    console.log('继承了父级的proName is ', this.proName)  
  }
}

let c = new Cat('Mimi')
console.log('pubName is ', c.pubName) // mimi
// console.log('priName is ', c.priName)  // 无法在外部访问private
