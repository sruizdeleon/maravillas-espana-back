const Actividad = require("../models/activity.model");

async function buscarActividadesPorTipoProvinciaOComunidad(tipo,proId, comunidad) {
  if(proId){
    console.log(proId)
    const actividadesPorProvincia = await Actividad.find({provincia: proId})
    .populate("provincia", "nombre");

    return actividadesPorProvincia
  } else if (comunidad) {
    const actividadesPorComunidad = await Actividad.find({comunidad: comunidad})
    .populate("provincia", "nombre");
    return actividadesPorComunidad
  } else if (tipo) {
    const actividadesPorTipo = await Actividad.find({tipo: tipo})
    .populate("provincia", "nombre");
    return actividadesPorTipo
  } else {
    const todasLasActividades = await Actividad.find()
    .populate("provincia", "nombre");;
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
    .populate("provincia", "nombre");;
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
    provincia: actividad.provincia,
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
      provincia: actividad.provincia,
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
    buscarActividadesPorTipoProvinciaOComunidad,
    buscarActividadPorId,
    crearActividad,
    borrarActividadPorId,
    cambiarActividad
}