const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  actividad: {
    type: mongoose.Types.ObjectId,
    ref: "actividades",
    required: true,
  },
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
  },
  valoracion: { type: Number, required: true },
  comentario: { type: String, required: false },
});


module.exports = mongoose.model("valoraciones", ratingSchema)