const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    displayName: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', index: true }],
});

const Product = model('Product', productSchema);

module.exports = Product;