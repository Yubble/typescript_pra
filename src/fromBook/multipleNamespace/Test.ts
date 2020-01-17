/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
/**
 * 其实和单文件命名空间一样，不过是将命名空间内的方法分文件放置了
*/

let strings = ["Hello", "284576", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {}
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
  for (let name in validators) {
    console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`)
  }
}
