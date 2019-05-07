// 整体赋值 只有两个值
let xcat: [string, number] = ['Xcat Liu', 24];
console.log(xcat)

// 也可以单独赋值
let scat: [string, number];
scat[0] = 'ssssss'
scat[1] = 22
console.log(scat)

// 只赋值一个的时候会报错
let ocat: [string, any] = ['ocat'];
