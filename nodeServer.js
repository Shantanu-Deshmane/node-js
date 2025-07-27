const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello First Node Server....Nice to meet you!!</h1>");
    res.end()
}).listen(2177)

http.createServer((req,res)=>{
    res.write("<h1>Hello Second Node Server.......!! Feeling Great</h1>");
    res.end()
}).listen(2175)