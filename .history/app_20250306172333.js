// const catMe = require('cat-me')

// console.log(catMe())

// const http=require('http')

// const server = http.createServer((req,res)=>{
//     // console.log(req.url)
//     // res.end("Hello World")
//     if(req.url=="/about"){
//         res.end("The about Page")
//     }
//     if(req.url=="/profile") {
//         res.end("The profile Page")
//     }
//     if(req.url=="/"){
//         res.end("the home page")
//     }
// })

// server.listen(3000)


const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.end("Hello World")
})

app.get('/about',(req,res)=>{
    res.end("The about Page")
})
app.listen(3000)