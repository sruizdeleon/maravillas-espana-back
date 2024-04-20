const User = require("../models/user.model");
const bcrypt = require("bcrypt");

/**
 * 
 * @param {*} mail 
 * @returns devuelve el usuario al que le corresponde ese email
 */
async function buscarUsuarios(mail) {
  if (mail) {
    usuarioPorEmail = await User.findOne({email: mail});
    return usuarioPorEmail;
  } else {
    usuarios = await User.find();
    return usuarios;
  }
}

/**
 * 
 * @param {} body 
 * @returns devulve el usuario creado, con un rol= "user" por defecto y una contraseña encriptada.
 */
async function registrar(body) {
  const hash = await bcrypt.hash(body.password, 12);
  const nuevoUsuario = new User({
    email: body.email,
    password: hash,
    role: "user",
    name: body.name,
  });
  await nuevoUsuario.save();
  return nuevoUsuario;
}

/**
 * 
 * @param {*} email 
 * @returns devulve el usuario encontrado para confirmar que existe en la base de datos y pueda iniciar sesión
 */
async function login(email) {
  const usuarioEncontrado = await User.findOne({ email: email });
  return usuarioEncontrado
}

/**
 * 
 * @param {*} id 
 * @param {*} usuario 
 * @returns nos devuelve el usuario modificado
 */
async function cambiarUsuario(id, usuario) {
    const modificacionUsuario = {
      email: usuario.email,
      password: await bcrypt.hash(usuario.password, 12),
      role: usuario.role,
      name: usuario.name,
    };
    const usuarioModificado = await User.findByIdAndUpdate(
      id,
      modificacionUsuario
    );
    return usuarioModificado;
}

/**
 * 
 * @param {*} id 
 * @returns nos devuelve el usuario que acabamos de borrar con ese id
 */
async function borrarUsuario(id) {
  const usuarioBorrado = await User.findByIdAndDelete(id);
  return usuarioBorrado;
}



module.exports = {
  buscarUsuarios,
  registrar,
  login,
  cambiarUsuario,
  borrarUsuario,
};
