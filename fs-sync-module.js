const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./first/first.txt', 'utf8')
const second = readFileSync('./first/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./first/result.txt', `Hello ${first},${second}`)
console.log(readFileSync('./first/result.txt', 'utf8'))
