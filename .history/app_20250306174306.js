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
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.set('view engine','ejs')

app.use((req,res,next)=>{
    res.send("middleware")
    const a =7 
    const b = 7
    console.log(a+b)
    return next()
})

app.get('/',(req,res,next)=>{
    const a =7
    const b = 7 
    console.log(a+b)},  
    (res,req) =>{ res.render('index')
})

app.get('/about',(req,res)=>{
    res.end("About Page")
})

app.get('/profile',(req,res)=>{
    res.end("Profile Page")
})
app.listen(3000)