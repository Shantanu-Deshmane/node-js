const http = require('http')

http.createServer((request,response) => {
    if(request.url=='/help'){
        response.write("<h1>Help Page</h1>")
    }else if(request.url=='/about'){
        response.write("<h1>About us Page</h1>")
    }else{
        response.write("<h1>Home Page</h1>")
    }
    response.end();
}).listen(4000)