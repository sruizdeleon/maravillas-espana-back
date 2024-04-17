const Valoracion = require("../models/activity.model");

/**
 * 
 * @param {*} actividadId 
 * @returns las valoraciones encontradas con el mismo actividadId
 */
async function buscarValoracionesActividad(actividadId){
    const valoracionesEncontradas = await Valoracion.find({actividadId: actividadId})
    .populate("usuario", "name");
    return valoracionesEncontradas;
}

/**
 * 
 * @param {*} usuarioId 
 * @returns las valoraciones encontradas para ese uduario
 */
async function buscarMisValoraciones(usuarioId){
    const valoracionesEncontradas = await Valoracion.find({usuario: usuarioId})
    .populate("usuario", "name");
    return valoracionesEncontradas;
}

/**
 * 
 * @param {*} id 
 * @returns la valoración correspondiente al id
 */
async function buscarValoracionPorId(id){
    const valoracionEncontrada = await Valoracion.findById(id)
    .populate("usuario", "name");
    return valoracionEncontrada;
}

/**
 * 
 * @param {*} body 
 * @returns la valoración que ha guardado en la colección.
 */
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

/**
 * 
 * @param {*} id 
 * @returns la valoración borrada que correspondía a ese id.
 */
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