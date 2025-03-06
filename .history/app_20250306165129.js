// const catMe = require('cat-me')

// console.log(catMe())

const http=require('http')

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end("Hello World")
    if(req.url=="/about"){
        res.end("The about Page")
    }
    if(req.url=="/profile") {
        res.end("The profile Page")
    }
})

server.listen(3000)