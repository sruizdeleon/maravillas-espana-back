const bcrypt = require("bcrypt");

/**
 * Este validador confirma que las dos contraseñas de registro coinciden
 * @param {*} body 
 * @returns validación true o false y mensaje
 */
function validarContraseniasIguales(body){
  if(
    body.password !== undefined &&
    body.password !== "" &&
    body.password === body.repetirPassword
  ){
    return{
      valido: true,
      mensaje: "las contraseñas coinciden"
    }
  } else{
    return{
      valido: false,
      mensaje: "las contraseñas no coinciden"
    }
  }
}

/**
 * Este validador confirma que la contraseña es válida y la nueva contraseña coincide en los dos campos
 * @param {*} body 
 * @returns validación true o false y mensaje
 */
function validarCambioContrasenia(body, hashPwd) {
    if (
      body.nuevaPassword !== undefined &&
      body.nuevaPassword !== "" &&  
      (bcrypt.compare(body.password, hashPwd)) &&
      body.nuevaPassword === body.repetirNuevaPassword
    ) {
      return {
        valido: true,
        mensaje: "la contraseña ha sido modificada con éxito",
      };
    } else if (
      (bcrypt.compare(body.password, hashPwd)) &&
      body.nuevaPassword !== undefined &&
      body.nuevaPassword !== "" &&
      body.nuevaPassword !== body.repetirNuevaPassword
    ) {
      return {
        valido: false,
        mensaje:
          "error al modificar la contraseña, la nueva contraseña no coincide en los dos campos",
      };
    } else {
      return {
        valido: false,
        mensaje: "error al modificar la contraseña",
      };
    }
  }

module.exports = {
  validarContraseniasIguales,
  validarCambioContrasenia
}