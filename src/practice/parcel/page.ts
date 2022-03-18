/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-03-17 16:03:18
 */
const teacher: string = 'dells'
console.log('teacher is ', teacher)

$(() => {
  $('body').html('<div>载入第三方插件练习</div>')
  new $.fn.init()
})

// 此处JQ会报错，因为全局没有JQ这个函数的声明，在编译时未报错只是因为ts认识当前代码
JQ(() => {
  console.log('JQ 初始化完成')
})