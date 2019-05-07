// 简单枚举，取默认值
enum Days {sun, mon, tue, wed, thu, fri = <any>'243', sat = 483};
console.log(Days["sun"])  // 0
console.log(Days.mon)  // 1
console.log(Days.fri)      // fri

// 计算所得项
enum Color {Red, Green, Blue = "12345".length}  // 可以写在后面不能写在前面
console.log('计算所得项: ', Color["Blue"])

// 常数枚举 会在编译阶段被删除
const enum DirectionsCon {
  Up = 422, Down, Left = 32, Right
}
let directCon = [DirectionsCon.Up, DirectionsCon.Down, DirectionsCon.Left, DirectionsCon.Right];
console.log('常数枚举: ', directCon)

// 外部枚举
declare enum DirectionsDec {
  Up, Down, Left = 444, Right = 'sss'
}
let directDec = [DirectionsDec.Up, DirectionsDec.Down, DirectionsDec.Left, DirectionsDec.Right];
console.log('外部枚举: ', directDec)