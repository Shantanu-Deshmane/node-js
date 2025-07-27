const http = require('http')

const userData = [
    {
        name : "Shantanu",
        age : 21,
        city : "karad"
    },
    {
        name : "Rajesh",
        age : 45,
        city : "Satara"
    },{
        name : "Soham",
        age : 41,
        city : "Pune"
    },
]

http.createServer((req,resp) => {
    console.log(req.method)
    resp.setHeader("Content-Type","text/json")
    resp.write(JSON.stringify(userData))
    resp.end();
}).listen(1241)