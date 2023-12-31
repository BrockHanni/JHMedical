const { Schema, model } = require('mongoose');
const reviewSchema = require('./review')

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        min: 0,
        max: 300
    },
    reviews: [reviewSchema]
});

const Product = model('Product', productSchema);

module.exports = Product;