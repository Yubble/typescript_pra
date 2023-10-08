// item 的类型取决于使用类型时传入的泛型参数
type Callback<T> = (item: T) => void;

// 在声明阶段就已经确定了 callback 接口中的泛型参数为外部传入的
const forEach = <T>(arr: T[], callback: Callback<T>) => {
  for (let i = 0; i < arr.length - 1; i++) {
    callback(arr[i]);
  }
};

// 自然，我们在调用forEach时显式声明泛型参数为 string | number 类型
// 所以根据forEach的函数类型定义时，
// 自然 callback 的 item 也会在定义时被推导为 T 也就是所谓的 string | number 类型
forEach<string | number>(['1', 2, 3, '4'], (item) => {
  console.log('--- item is ---', item)
});
