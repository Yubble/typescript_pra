/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-09-24 19:16:05
 */
// 使用接口来定义对象的类型
// 对行为抽象

interface Person {
  name: string;
  age: number;
  selectable?: boolean;  // 带问号的是可选择的属性，非必写
  [pName: string]: any;   // 任意属性，可以让使用者任意创建各种属性，各种值
  readonly readName: string;
}

let tom: Person = {
  name: 'Tom',
  age: 23,
  gender: 'male',
  address: 'jaslfsljfsjj',
  id: 'sss',
  readName: 'not Modify'
}

// tom.readName = 'modify this';  // 不可修改
tom.age = 32

// 实例化出来的对象必须要符合接口编写的内容规范，多一些少一些属性都是不允许的

// 接口也可以继承接口
interface Alarm {
  interAlarm(): void
}

interface DoorAlarm extends Alarm {
  doorWhistle(): string
}

// 如果使用接口加固这个simObj对象，则对象必须返回接口中定义的两个属性
let simObj: DoorAlarm = {
  doorWhistle() {
    return '点击了防盗门铃'
  },
  interAlarm() {
    console.log('触发了接口报警')
  }
}

interface mobileAlarm {
  brand: string,
  interAlarm(): void
}

// 类继承接口则需要声明接口中所有的方法
class Car implements mobileAlarm {
  public brand = 'str'; // 如果没有brand这个公有属性，这个类不成立
  public constructor() {
  }

  public interAlarm() {
    console.log('触发了警报')
  }
}

let c = new Car();
c.interAlarm()

// 接口同样也可以继承类，此处不演示了

// 混合类型
interface mixCounter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): mixCounter {
  let Cou = <mixCounter>function(start: number) { return 'str' };
  Cou.interval = 324;
  Cou.reset = () => {
    console.log('show reset')
  }

  return Cou
}

let cc = getCounter()
console.log(cc(122))
cc.reset()
console.log(cc.interval)
