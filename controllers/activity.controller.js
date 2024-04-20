const Actividad = require("../models/activity.model");

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

async function buscarActividadPorId(id) {
    const actividad = await Actividad.findById(id)
    .populate("provinciaId", "nombre");;
    return actividad;
}

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

async function borrarActividadPorId(id) {
  const actividadBorrada = await Actividad.findByIdAndDelete(id);
  return actividadBorrada;
}

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