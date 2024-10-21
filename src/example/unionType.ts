type BasicType = 'foo' | 'bar' | 'baz' | string

function myFun (arg: BasicType) {
  console.log('-- arg is --', arg)
}

myFun('')
// 不存在既能提示选项，又能随意输入参数的方案