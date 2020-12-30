//http server creation

/*const http = require('http')


const server = http.createServer((req,res)=>{
    res.write('Hello Mate')
    res.end()
})
server.listen(3000)
*/

/*
    creating a server using express

const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})

app.listen(3000)

*/

//using static assets
/*
const express = require('express')
const path = require('path')

const app = express()

app.use('/static',express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})

app.listen(3000)
*/

const express = require('express')
const path = require('path')

const app = express()

app.use('/',express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})
app.post('/data',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})

app.listen(3000)