const http = require('http')

const port = process.argv[2];
console.log("running on port: ",port)
console.log(process.argv[0])
console.log(process.argv[1])
http.createServer((req,resp) => {
    resp.end("Running Server!!"+port);
}).listen(port)  