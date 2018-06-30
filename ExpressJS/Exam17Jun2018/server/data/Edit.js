const mongoose = require('mongoose')
const editSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    creationDate: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    articleID:{
        type: String,
        required:true
    }
})
module.exports = mongoose.model('Edit', editSchema)