// interface接口声明之后如果类继承，则必须实现其中方法
interface Alarm {
  intAlert(): void
}

interface Light {
  turnOn(): void
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  public intAlert() {
    console.log('启动了防盗门的报警')
  }
}

class Car implements Alarm, Light {
  public intAlert() {
    console.log('启动了车的报警')
  }
  public turnOn() {
    console.log('启动了车灯')
  }
}

let c = new Car()
c.intAlert()
