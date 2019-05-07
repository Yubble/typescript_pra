let myNumber: string | number;
myNumber = 'sss';
myNumber = 321;

function getStr(something: string | number): string {
  return something.toString()
}

let resultGet: string = getStr(43223)
console.log(resultGet)