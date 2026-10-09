const { name } = require('ejs');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  price: Number,

});

const Product = mongoose.model('Product', userSchema);

module.exports = Product;