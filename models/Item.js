const { model, Schema } = require('mongoose')

const ItemSchema = new Schema({
  text: String,
  isDone: Boolean
})

module.exports = model('Item', ItemSchema)
