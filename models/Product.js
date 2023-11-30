const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "product must have a name"]


    },
    img: {
        type: String,
        trim: true,
        required: [true, "product must have a image"]

    },
    price: {
        type: Number,
        min: 0,
        required: [true, "product must have a price"]
    },
    desc: {
        type: String,
        trim: true,
        required: [true, "product must have a desc"]

    },

    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]

});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;