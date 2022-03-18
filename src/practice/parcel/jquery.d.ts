/*
 * @Name: 
 * @Description: 使用d.ts来模拟全局变量
 * @Author: 刘燕保
 * @Date: 2022-03-17 16:29:39
 */
// 定义全局变量
// declare const $: (p: () => void) => void

// 定义全局函数
declare function $(params: () => void): void;
// 全局变量$可以重复定义
// declare function $(
//   params: string
// ): {
//   html: (html: string) => {}
// };

// 上面代码可以进行以下优化
interface JqueryInstance {
  html: (html: string) => JqueryInstance
}
declare function $(params: string): JqueryInstance
// 定义对象类型，以及类的类型
declare namespace $ {
  namespace fn {
    class init {
      constructor() {}
    }
  }
}


// 或者使用interface的特性，来进行全局声明

interface JQ {
  (readyFn: () => void): void;
  (selector: string): JqueryInstance
}
// 此处应该换成 $: JQ
declare const JQ: JQ
