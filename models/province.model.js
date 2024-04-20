const mongoose = require("mongoose")

const provinceSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    imagenBandera: {type: String, required: true},
})

module.exports = mongoose.model("provincias", provinceSchema) 