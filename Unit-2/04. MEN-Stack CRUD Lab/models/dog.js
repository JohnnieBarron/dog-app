const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  description: String,
  Image: String,
})

const dog = mongoose.model('dog', dogSchema)
module.exports = dog
