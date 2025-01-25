const mongoose = require('mongoose')

const ApplicantSchema = new mongoose.Schema({
     fullname: {
        type :String,
        required: true,
        trim: true,
     },

     role: {
        type: String,
        required: true,
        trim: true,
     },

     email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
     },

     phone: {
         type: String,
         required: true,
         trim: true,
     },

     resume: {
        filePath: { type:String, required: false},
        fileType: { type: String},
        fileName:{ type: String},
     },

})

const ApplicantModel = mongoose.model("Applicants",ApplicantSchema)
module.exports = ApplicantModel