const http = require('http')
const fs = require('fs')
const path = require('path')

const Server = http.createServer((req, resp) => {
    if(req.url == '/'){
        const filePath = path.join(__dirname, "form.html");

        fs.readFile(filePath,(err,data) => {
            if(err){
                resp.writeHead(500,{"content-type":'text/plain'});
                resp.end("Error Occured!!");
            }else{
                resp.writeHead(200,{"content-type":"text/html"});
                resp.end(data);
            }
        })
    }else{
        resp.end("File Not found.......!")
    }
})

Server.listen(4001,()=>{
    console.log("running on localhost:4001")
});

