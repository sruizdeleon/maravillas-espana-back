const User = require("../models/user.model");
const bcrypt = require("bcrypt");
async function buscarUsuarios(mail) {
  if (mail) {
    usuarioPorEmail = await User.findOne({email: mail});
    return usuarioPorEmail;
  } else {
    usuarios = await User.find();
    return usuarios;
  }
}

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

async function login(email) {
  const usuarioEncontrado = await User.findOne({ email: email });
  return usuarioEncontrado
}

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
