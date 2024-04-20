const mongoose = require("mongoose")

const actividadSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    img: {type: String, required: true},
    descripcion: {type: String, required: false},
    provincia: {
        type: mongoose.Types.ObjectId,
        ref: "provincias",
        required: true,
      },
    comunidad: {type: String, required: true},  
    tipo: {type: String, required: true},
})

module.exports = mongoose.model("actividades", actividadSchema)