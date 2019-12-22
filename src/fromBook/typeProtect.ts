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
  return {} as Teacher
}

let stu = getPerson()

stu.speech();
(<Student>stu).learn();
(<Teacher>stu).teach();
