const mongoose = require('mongoose');

const customerschema = new mongoose.Schema({
    name: String,
    age: Number
});

const Customer = mongoose.model('customer', customerschema);

module.exports = Customer;