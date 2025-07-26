const fs = require('fs')
// fs.readFile('one.txt','utf8',(err,data)=>{
//     err?console.log(err):console.log(data)
// })

const data = fs.readFileSync('one.txt')
console.log(data.toString())
