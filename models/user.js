const mongoose = require('mongoose')
const modelSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  lastLogin: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Number,
    default: Date.now()
  },
  updatedAt: {
    type: Number,
    default: Date.now()
  }
})
module.exports = mongoose.model('users', modelSchema)
