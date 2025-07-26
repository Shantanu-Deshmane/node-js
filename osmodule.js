const os = require('os')
const path = require('path')
console.log(os.platform())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.type())

console.log("BASENAME::"+path.basename('C:\\temp\\myfile.html'))