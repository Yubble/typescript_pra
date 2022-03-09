/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-03-08 11:20:28
 */

namespace Components {
  export class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is Header'
      document.body.appendChild(elem)
    }
  }
  export class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is Content'
      document.body.appendChild(elem)
    }
  }
  export class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is Footer'
      document.body.appendChild(elem)
    }
  }
}
