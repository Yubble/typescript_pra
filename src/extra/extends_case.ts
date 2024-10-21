// 约定一个泛型类型，但它是基于数字类型进行扩展的
type useLessType<T extends number> = T

// 这个范式为any
type Test1 = useLessType<any>

// 这种一定报错
// type Test1_1 = useLessType<number | string>


// 下面看看extend对对象的拆解是什么程度
type useLessType2<T extends {a:1, b:2}> = T
// 居然能跑通，所以extends在制定泛型时，只会约束好对象属性的基础关键字和值，在真正给到类型的时候是可以在这个基础上增加的
type Test2 = useLessType2<{a:1, b:2, c:3}>

// 一定报错，因为泛型时明确说到了，必须要a:1且b:2
// type Test3 = useLessType2<{[key: string]: number}>