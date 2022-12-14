// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})
// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

{ toJSON: { virtuals: true }}



// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker

