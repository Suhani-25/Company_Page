const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
     fullName: {
        type :String,
        required: true,
        trim: true,
     },

     workEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
     },

     phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },

     company: {
        type: String,
        required: true,
        trim: true,
     },

     
     message: {
        type: String,
        required: true,
        trim: true,
     },
     
     

})

const ClientModel = mongoose.model("Client",ClientSchema)
module.exports = ClientModel