function pluck (obj, names) {
  return names.map(name => obj[name])
}

const arr = pluck({
  name: 'Yubble',
  age: 23,
  married: true
}, ['name', 'age'])

console.log('arr is ', arr)
