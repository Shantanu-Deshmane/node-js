const http = require('http')

const response = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.end("Response Complete!!")
    process.exit(0)
})

response.listen(3000);