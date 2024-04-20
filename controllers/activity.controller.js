const Actividad = require("../models/activity.model");

async function buscarActividadesPorProvinciaOComunidad(proId, comunidad) {
  if(proId){
    console.log(proId)
    const actividadesPorProvincia = await Actividad.find({provincia: proId})
    .populate("provincia", "nombre");
    return actividadesPorProvincia
  } else if (comunidad) {
    const actividadesPorComunidad = await Actividad.find({comunidad: comunidad})
    .populate("provincia", "nombre");
    return actividadesPorComunidad
  } else {
    const todasLasActividades = await Actividad.find()
    .populate("provincia", "nombre");;
    return todasLasActividades
  }
}

async function buscarActividadPorId(id) {
    const actividad = await Actividad.findById(id)
    .populate("provincia", "nombre");;
    return actividad;
}

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

async function borrarActividadPorId(id) {
  const actividadBorrada = await Actividad.findByIdAndDelete(id);
  return actividadBorrada;
}

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
    buscarActividadesPorProvinciaOComunidad,
    buscarActividadPorId,
    crearActividad,
    borrarActividadPorId,
    cambiarActividad
}