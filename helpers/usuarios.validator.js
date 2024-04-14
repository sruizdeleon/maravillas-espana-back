const bcrypt = require("bcrypt");

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
function validarCambioContrasenia(body, hashPwd) {
    if (
      body.nuevaPassword !== undefined &&
      body.nuevaPassword !== "" &&  
      (bcrypt.compare(body.password, hashPwd)) === true &&
      body.nuevaPassword === body.repetirNuevaPassword
    ) {
      return {
        valido: true,
        mensaje: "la contraseña ha sido modificada con éxito",
      };
    } else if (
      (bcrypt.compare(body.password, hashPwd)) === true &&
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