type Age = number
type AgeCreator = () => Age

function getAge(arg: AgeCreator): Age {
  return arg();
}



type Person<T> = {
  age: T
}

const obj1:Person<number> = {
  age: 23
}

console.log('age is ', obj1.age)


// 字面量类型

type Profession = 'student' | 'teacher' | 'security'
function changeProfession (person: Profession) {
  return person
}

changeProfession('security')
// changeProfession('aaasi')  // 这个会报错，选项中没有aaasi这个参数
