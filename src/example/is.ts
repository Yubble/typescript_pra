// 判断参数是否为string类型, 返回布尔值
// 明确返回值为string类型，is的场景通常为不确定入参类型，但是这个入参在后续存在类型方法的调用的情况
function isString(s:unknown): s is string{
  return typeof s === 'string'
}

// 参数转为大写函数
// 直接使用转大写方法报错, str有可能是其他类型
function upperCase(str:unknown){
  str.toUpperCase()
  // 类型“unknown”上不存在属性“toUpperCase”。
}

// 判断参数是否为字符串,是在调用转大写方法
function ifUpperCase(str:unknown){

  if(isString(str)){
    str.toUpperCase()
    // (parameter) str: unknown
    // 报错:类型“unknown”上不存在属性“toUpperCase”
  }
}
