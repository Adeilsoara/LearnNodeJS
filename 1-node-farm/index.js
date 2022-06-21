/*Blocking Synchronous mode */

const req = require('express/lib/request')
const res = require('express/lib/response')
const fs = require('fs')
const http = require('http')

/* const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./starter/txt/output.txt', textOut)
console.log('Text written') */
/* const hello = 'Hello World'
console.log(hello) */

/* Non-blocking, asynchronous way */
/* fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) =>{
    console.log(data)
})
console.log("Will read file!") */

/* HTTP Server */

const server = http.createServer((req, res) =>{
    res.end('Hello from the server!')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000')
})