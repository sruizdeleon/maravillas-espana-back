const Actividad = require("../models/activity.model");

async function buscarActividadesPorTipoProvinciaOComunidad(tipo, proId, comunidad) {
	const filtro = {};

	tipo && tipo !== "" ? filtro.tipo = tipo : false;
	proId && proId !== "" ? filtro.provincia = proId : false;
	comunidad && comunidad !== "" ? filtro.comunidad = comunidad : false;

	const todasLasActividades = await Actividad.find(filtro).populate("provincia", "nombre imagenBandera");
	return todasLasActividades;
}


/**
 *
 * @param {*} id
 * @returns devuelve la actividad que corresponde a ese id
 */
async function buscarActividadPorId(id) {
	const actividad = await Actividad.findById(id).populate("provincia", "nombre imagenBandera");
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
		tipo: actividad.tipo,
	});
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
	const actividadModificada = await Actividad.findByIdAndUpdate(id, modificacionActividad);
	return actividadModificada;
}

module.exports = {
	buscarActividadesPorTipoProvinciaOComunidad,
	buscarActividadPorId,
	crearActividad,
	borrarActividadPorId,
	cambiarActividad,
};
