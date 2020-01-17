interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = (src, sub) => {
  let result = src.search(sub)
  return result > -1
}

const uSearch: SearchFunc = (src, sub) => {
  let result = src.search(sub)
  return result > -1
}
