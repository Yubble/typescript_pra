/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-08 12:32:39
 */
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

console.log(getName('this is Yubble'))