const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const User = model('User', userSchema);

module.exports = User;