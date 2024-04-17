const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  actividadId: { type: String, required: true },
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: "valoraciones",
    required: true,
  },
  valoracion: { type: Number, required: true },
  comentario: { type: String, required: false },
});


module.exports = mongoose.model("valoraciones", ratingSchema)