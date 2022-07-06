const EventEmitter = require("events")

/* const myEmitter = new EventEmitter() */

class Sales extends EventEmitter {
    constructor(){
        super()
    }
}

const myEmitter = new Sales()

myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
})

myEmitter.on('newSale', () => {
    console.log('Costumer name: Adeilson')
})

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock.`)
})

myEmitter.emit("newSale", 9)