const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    description: {
        type: String,
    },
    tags: [{
        type: mongoose.SchemaTypes.ObjectId
    }]
})

module.exports = mongoose.model('Image', imageSchema)