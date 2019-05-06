// 可以直接用interface来声明一个全局类型
interface globalInter {
  methods?: 'GET' | 'POST';
  data?: any;
}

declare namespace JQuery {
  function ajax(url: string, settings?: globalInter): void;
}

JQuery.ajax('www.yongbuliao.com', {methods: 'POST', data: 231})
// 但是这个interface其他文件也可以用了，所以可以将它用命名空间包裹起来

// 命名空间包裹，防止全局污染
declare namespace nameJQ {
  interface partInter {
    name: 'Yubble' | 'Ronnieo';
    data?: any;
  }
  function ajax(url: string, settings?: partInter): void;
}

const settings: nameJQ.partInter = {
  name: 'Ronnieo',
  data: {
    jili: 'jjj'
  }
};
nameJQ.ajax('/api/post', settings)