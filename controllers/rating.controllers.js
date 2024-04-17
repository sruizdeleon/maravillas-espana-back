const Valoracion = require("../models/activity.model");

async function buscarValoracionesActividad(actividadId){
    const valoracionesEncontradas = await Valoracion.find({actividadId: actividadId})
    .populate("usuario", "name");
    return valoracionesEncontradas;
}
async function buscarMisValoraciones(usuarioId){
    const valoracionesEncontradas = await Valoracion.find({usuario: usuarioId})
    .populate("usuario", "name");
    return valoracionesEncontradas;
}

async function buscarValoracionPorId(id){
    const valoracionEncontrada = await Valoracion.findById(id)
    .populate("usuario", "name");
    return valoracionEncontrada;
}

async function añadirValoracion(body) {
  const valoracion = new Valoracion({
    actividadId: body.actividadId, /* actividadEncontrada._id */
    usuario: body.usuario, /* usuarioId */
    valoracion: body.valoracion,
    comentario: body.comentario,
  });
  await valoracion.save();
  return valoracion;
}

async function borrarValoracion(id){
  const valoracionBorrada = await Valoracion.findByIdAndDelete(id);
  return valoracionBorrada;
}


module.exports = {
    buscarValoracionesActividad,
    buscarMisValoraciones,
    buscarValoracionPorId,
    añadirValoracion,
    borrarValoracion
}