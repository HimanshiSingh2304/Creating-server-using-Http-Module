var http = require("http");
var fs = require("fs");
var path = require("path")

const server = http.createServer((req,res) => {
    let filePath = path.join(__dirname,req.url ==="/"?"index.html":req.url)

    fs.readFile(filePath,function(err,content){
        if (err){
            fs.readFile(path.join(__dirname,"404.html"),function(error,content){
                res.end(content)
            })
        }else{
            res.end(content)
        }
    })
})
server.listen(4000,()=>{
    console.log("listening to 4000 port")
})
