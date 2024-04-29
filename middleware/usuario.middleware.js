const {validarContraseniasIguales, validarCambioContrasenia} = require("../helpers/usuarios.validator");
const { findById } = require("../models/user.model");
const User = require("../models/user.model");

/**
 * comprobamos que password y repetirPassword son la misma contraseña, verificando así que el usuario tiene intención de registrarse con esa contraseña
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function pwdIguales(req, res, next){
 const resultadoValidacion = validarContraseniasIguales(req.body);
 if(resultadoValidacion.valido){
  next()
 } else {
  res.status(400).json({ msg: resultadoValidacion.mensaje });
 }
}

/**
 * middleware en el que comprobamos que la contraseña antigua es correcta, y que escribe 2 veces la misma contraseña
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
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