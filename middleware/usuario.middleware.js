const {validarContraseniasIguales, validarCambioContrasenia} = require("../helpers/usuarios.validator");
const { findById } = require("../models/user.model");
const User = require("../models/user.model");

async function pwdIguales(req, res, next){
 const resultadoValidacion = validarContraseniasIguales(req.body);
 if(resultadoValidacion.valido){
  next()
 } else {
  res.status(400).json({ msg: resultadoValidacion.mensaje });
 }
}

async function middleWareVerifYCambioContrasena(req, res, next) {
  try {
    const usuarioEncontrado = await User.findById(req.params.id);
    const resultadoValidacion = validarCambioContrasenia(
      req.body,
      usuarioEncontrado.password
    );
    if (resultadoValidacion.valido) {
      next();
    } else {
      res.status(400).json({ msg: resultadoValidacion.mensaje });
    }
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
}; 

module.exports = {
  pwdIguales,
  middleWareVerifYCambioContrasena,
}