const mongose = require('mongoose')

let catSchema = new mongose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    color: {
        type: String
    }
})

catSchema.methods.sayHello = function () {
    return `Hello from ${this.name}!`
}

let Cat = mongose.model('Cat', catSchema)

module.exports = Cat