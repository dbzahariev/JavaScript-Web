const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lockedStatus: {
        type: Boolean,
        default: false
    },
    edits: {
        type: [{
            String
        }],
        default: []
    }
})
module.exports = mongoose.model('Article', articleSchema)