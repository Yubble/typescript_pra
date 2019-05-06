// 当传入类型为混合类型时，可以指定其为一个更准确地类型，即为类型断言
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

let res1: number = getLength(42345252)
console.log('res1 is ', res1)
let res2: number = getLength('sjfdqo')
console.log('res2 is ', res2)