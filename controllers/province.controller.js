const Provincia = require("../models/province.model");

/**
 * 
 * @param {*} nombreProvincia 
 * @returns devuelve la provincia con ese nombre
 */
async function buscarProvinciasYPorNombre(nombreProvincia){
    if(nombreProvincia){
        const provinciaEncontrada = await Provincia.findOne({nombre: nombreProvincia});
        return provinciaEncontrada;
    } else {
        const provinciasEncontradas = await Provincia.find();
        return provinciasEncontradas;
    }
}

/**
 * 
 * @param {*} id 
 * @returns devuelve la provincia con ese id
 */
async function buscarProvinciaPorId(id){
    const provinciaEncontrada = await Provincia.findById(id);
    return provinciaEncontrada;
}

/**
 * 
 * @param {*} provincia 
 * @returns devuelve la nueva provincia
 */
async function crearProvincia(provincia) {
    const nuevaProvincia = new Provincia ({
        nombre: provincia.nombre,
        imagenBandera: provincia.imagenBandera
    })
    await nuevaProvincia.save();
    return nuevaProvincia;
}

/**
 * 
 * @param {*} id 
 * @param {*} modificacion 
 * @returns Devuelve la provincia que corresponde a ese id con las modificaciones realizadas
 */
async function modificarProvincia(id, modificacion) {
  const modificacionProvincia = {
    nombre: modificacion.nombre,
    imagenBandera: modificacion.imagenBandera,
  };
  const profinciaModificada = await Provincia.findByIdAndUpdate(
    id,
    modificacionProvincia
  );

  return profinciaModificada;
}

/**
 * 
 * @param {*} id 
 * @returns borra la provincia a la que corresponde ese id
 */
async function borrarProvinciaPorId(id) {
    const provinciaBorrada = await Provincia.findByIdAndDelete(id);
    return provinciaBorrada;
  }

  module.exports = {
    buscarProvinciasYPorNombre,
    buscarProvinciaPorId,
    crearProvincia,
    modificarProvincia,
    borrarProvinciaPorId
  }