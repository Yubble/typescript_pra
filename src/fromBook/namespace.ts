/**
 * 单文件命名空间
*/

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return numberRegexp.test(s)
    }
  }
}

let strings = ['hello', '92845', '101']

// 给validators设置属性标准：
// validators是一个对象，他有属性，属性名是字符串，属性值是Validation中的StringValidator接口标注
let validators: { [r: string]: Validation.StringValidator } = {}
validators["ZIP code"] = new Validation.ZipCodeValidator()
validators["Letters only"] = new Validation.LettersOnlyValidator()

for (let s of strings) {
  for (let name in validators) {
    console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`)
  }
}
