/*
 * @Name: 
 * @Description: 解析interface与type两关键字的区别
 * @Author: 刘燕保
 * @Date: 2021-12-08 12:12:20
 */

// 区别一：两者都可以用来描述对象或函数类型，但语法不通

interface interPoint {
  x: number;
  y: number;
}

interface interSetPoint {
  (x: number, y: number): void
}

type typePoint = {
  x: number;
  y: number;
}

type typeSetPoint = (x: number, y: number) => void

