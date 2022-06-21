/*Blocking Synchronous mode */

const fs = require('fs')

/* const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./starter/txt/output.txt', textOut)
console.log('Text written') */
/* const hello = 'Hello World'
console.log(hello) */

/* Non-blocking, asynchronous way */
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) =>{
    console.log(data)
})
console.log("Will read file!")