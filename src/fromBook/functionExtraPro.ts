interface Squar {
  color?: string,
  width: number,
  // [propName: string]: any  // 解决方案二
}

function createSquar (config: Squar) {
  return config
}

// 对象字面量会被特殊对待，不会去考虑接口中的可选属性，全部严格区分
let mySquare = createSquar({size: 4, width: 100});   // 会报错
// let mySquare = createSquar({size: 4, width: 100} as Squar);  // 解决方案一


interface LabelValue {
  label: string
}

function printLabel(labelObj: LabelValue): void {
  console.log('label is ', labelObj.label)
}

let myobj = {size: 10, label: 'Size 10 obj'}
// 如果使用变量来保存对象，就不会有这种情况
printLabel(myobj)
