/**
 * 类型保护
*/

interface Teacher {
  speech(): void,
  teach(): void
}

interface Student {
  speech(): void,
  learn(): void
}

function getPerson(): Teacher | Student {
  return {
    speech() {
      console.log('我是教学的')
    },
    learn() {
      console.log('我可以学习')
    },
    teach() {
      console.log('我是教学的')
    }
  }
}

// 如果是函数使用接口，则必须要有两个接口的并集，且出现一个接口特有方法

let stu = getPerson()

stu.speech();
(<Student>stu).learn();
(<Teacher>stu).teach();

// 必须要加person is Teacher主谓宾，不然之后无法使用stu直接调用teach和learn方法
function isTeacher(person: Teacher | Student): person is Teacher {
  return (<Teacher>person).teach !== undefined
}

if (isTeacher(stu)) {
  stu.teach()
} else {
  stu.learn()
}
