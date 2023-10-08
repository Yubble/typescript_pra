interface Person {
    name: string,
    age: number,
    gender: string
}

type P = keyof Person

class Student {
    constructor(private info: Person) {}

    // 此处为了将T提取出来，用作后面的泛型
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key]
    }
}

const student = new Student({
    name: 'ly',
    age: 39,
    gender: 'female'
})

const test = student.getInfo('name')

console.log('--- test name is ---', test)