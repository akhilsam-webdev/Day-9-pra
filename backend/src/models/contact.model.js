const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:String,
    number:Number,
    email:String
})

const contactModel = mongoose.model("Contacts",contactSchema)

module.exports = contactModel