const Actividad = require("../models/activity.model");

/**
 * 
 * @param {*} provinciaId 
 * @param {*} comunidad 
 * @returns Dependiendo de si se introduce provinciaId, la query de comunidad, o nada, nos devolverá actividadesPorProvincia, actividadesPorComunidad o todasLasActividades
 */
async function buscarActividadesPorProvinciaIdOComunidad(provinciaId, comunidad) {
  if(provinciaId){
    const actividadesPorProvincia = await Actividad.find({provinciaId: provinciaId})
    .populate("provinciaId", "nombre");
    return actividadesPorProvincia
  } else if (comunidad) {
    const actividadesPorComunidad = await Actividad.find({comunidad: comunidad})
    .populate("provinciaId", "nombre");
    return actividadesPorComunidad
  } else {
    const todasLasActividades = await Actividad.find()
    .populate("provinciaId", "nombre");;
    return todasLasActividades
  }
}

/**
 * 
 * @param {*} id 
 * @returns devuelve la actividad que corresponde a dicho id
 */
async function buscarActividadPorId(id) {
    const actividad = await Actividad.findById(id)
    .populate("provinciaId", "nombre");;
    return actividad;
}

/**
 * 
 * @param {*} actividad 
 * @returns devuelve la nueva Actividad
 */
async function crearActividad(actividad) {
  const nuevaActividad = new Actividad({
    nombre: actividad.nombre,
    img: actividad.img,
    descripcion: actividad.descripcion,
    provinciaId: actividad.provinciaId,
    comunidad: actividad.comunidad,
    tipo: actividad.tipo
  })  
  await nuevaActividad.save();
  return nuevaActividad;
}

/**
 * 
 * @param {*} id 
 * @returns deveulve la actividad borrada que tenía ese id
 */
async function borrarActividadPorId(id) {
  const actividadBorrada = await Actividad.findByIdAndDelete(id);
  return actividadBorrada;
}

/**
 * 
 * @param {*} id 
 * @param {*} actividad 
 * @returns devuelve la actividad de dicho id con las modificaciones
 */
async function cambiarActividad(id, actividad) {
    const modificacionActividad = {
      nombre: actividad.nombre,
      img: actividad.img,
      descripcion: actividad.descripcion,
      provinciaId: actividad.provinciaId,
      comunidad: actividad.comunidad,
      tipo: actividad.tipo,
    };
    const actividadModificada = await Actividad.findByIdAndUpdate(
      id,
      modificacionActividad
    );
    return actividadModificada;

}

module.exports = {
    buscarActividadesPorProvinciaIdOComunidad,
    buscarActividadPorId,
    crearActividad,
    borrarActividadPorId,
    cambiarActividad
}