const mongoose = require('mongoose')

//Esse model veio do próprio Mongoose

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
    id: ObjectId,
    title: String,
    description: String,
    price: Number
})

const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel