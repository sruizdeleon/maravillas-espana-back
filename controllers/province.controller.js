const Provincia = require("../models/province.model");

async function buscarProvinciasYPorNombre(nombreProvincia){
    if(nombreProvincia){
        const provinciaEncontrada = await Provincia.findOne({nombre: nombreProvincia});
        return provinciaEncontrada;
    } else {
        const provinciasEncontradas = await Provincia.find();
        return provinciasEncontradas;
    }
}

async function buscarProvinciaPorId(id){
    const provinciaEncontrada = await Provincia.findById(id);
    return provinciaEncontrada;
}

async function crearProvincia(provincia) {
    const nuevaProvincia = new Provincia ({
        nombre: provincia.nombre,
        imagenBandera: provincia.imagenBandera
    })
    await nuevaProvincia.save();
    return nuevaProvincia;
}

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