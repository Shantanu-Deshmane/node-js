const fs = require('fs')

fs.writeFileSync('data.txt','This is the nodeJS Tutorial notes!!')

const data = fs.readFileSync("data.txt")
console.log(data.toString())