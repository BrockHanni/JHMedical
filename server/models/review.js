const { Schema } = require('mongoose');


const reviewSchema = new Schema({
    reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: String,
        required: true
    },
})

module.exports = reviewSchema;