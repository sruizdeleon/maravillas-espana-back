const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const {
  buscarUsuarios,
  registrar,
  login,
  cambiarContrasena,
  borrarUsuario,
} = require("../controllers/user.controller");

const {estaAutenticado, esAdmin} = require("../middleware/auth.middleware");
const {pwdIguales, middleWareVerifYCambioContrasena} = require ("../middleware/usuario.middleware")


/**
 * Ruta para buscar usuarios a través de la query "?email="
 */
router.get("/", esAdmin, async (req, res) => {
  try {
    const usuariosEncontrados = await buscarUsuarios(req.query.email);
    return res.json({
      msg: "los usuarios encontrados son:", usuariosEncontrados
    });
  } catch (error) {
    return res.status(500).json({ msg: "error interno del servidor" });
  }
});


/**
 * Ruta para registrar un usuario
 */
router.post("/registrar", pwdIguales, async (req, res) => {
  try {
    const usuarioRegistrado = await registrar(req.body);
    return res.json({ msg: "registro correcto", usuarioRegistrado });
  } catch (error) {
    res.status(500).json({ msg: "error al registrase" });
  }
});

/*
 * Esta ruta servirá para iniciar sesión del usuario, y la cuál devolverá un token, un rol, nombre de usuario y su id
 */
router.post("/login", async (req, res) => {
  try {
    const usuarioEncontrado = await login(req.body.email);
    if (!usuarioEncontrado) {
      return res.status(400).json({ msg: "credenciales no validas"});
    } else {
      const compararResultado = await bcrypt.compare(
        req.body.password,
        usuarioEncontrado.password
      );
      if (!compararResultado) {
        return res.status(400).json({ msg: "credenciales no validas" });
      } else {
        const token = jwt.sign(
          { userId: usuarioEncontrado._id },
          process.env.JWTSECRET,
          {
            expiresIn: "2h",
          }
        );
        return res.json({
          msg: "logeado correctamente",
          token: token,
          role: usuarioEncontrado.role,
          nombre: usuarioEncontrado.name,
          usuarioId: usuarioEncontrado._id
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error al logear" });
  }
});


/* 
* El usuario necesitará estar loggeado (dentro de su cuenta), para modificar su contraseña
 */
router.patch(
  "/:id",
  estaAutenticado,
  middleWareVerifYCambioContrasena,
  async (req, res) => {
    try {
      const usuarioAModificarContrasena = await cambiarContrasena(req.params.id, req.body.nuevaPassword);
      const nombreUsuario = usuarioAModificarContrasena.name;
      res
        .json({ msg: `la contraseña ha sido modificada con éxito ${nombreUsuario}`});
    } catch (error) {
      res.status(500).json({ msg: "error interno del servidor" });
      console.error(error);
    }
  }
);


/*
 * En esta ruta introduciremos el id del usuario que se desea borrar mediante un input de formulario
 */
router.delete("/:id", estaAutenticado, async (req, res) => {
  try {
    const usuarioBorrado = await borrarUsuario(req.params.id);
    return res.status(200).json({ msg: "usuario eliminado: ", usuarioBorrado });
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
});



module.exports = router;
