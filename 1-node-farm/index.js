/*Blocking Synchronous mode */

const req = require('express/lib/request')
const res = require('express/lib/response')
const fs = require('fs')
const http = require('http')
const url = require('url')

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
const replaceTemplate = (temp, product) =>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%ORIGIN%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)


    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    return output
}

const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)


const server = http.createServer((req, res) =>{
    const pathName = req.url
   
    //overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type' : 'text/html'})

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCTS_CARDS%}', cardsHtml)

        res.end(output)
    
    // product page
    }else if(pathName === '/product'){
        res.end('This is the Product!')
    
    //API
    }else if (pathName === '/api'){
        res.writeHead(200, {'Content-type' : 'application/json'})
        res.end(data)
    
    //Not found
    }else{
        res.writeHead(404, {
            'Content-type':'text/html'
        })
        res.end('<h1>This page not exist!</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000')
})