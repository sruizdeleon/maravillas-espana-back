const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const {
  buscarUsuarios,
  registrar,
  login,
  cambiarUsuario,
  borrarUsuario,
} = require("../controllers/user.controller");

const {esAdmin} = require("../middleware/auth.middleware");
const {pwdIguales} = require ("../middleware/usuario.middleware")

router.get("/", /* esAdmin, */ async (req, res) => {
  try {
    const usuariosEncontrados = await buscarUsuarios(req.query.email);
    return res.json({
      msg: "los usuarios encontrados son:", usuariosEncontrados
    });
  } catch (error) {
    return res.status(500).json({ msg: "error interno del servidor" });
  }
});

router.post("/registrar", pwdIguales, async (req, res) => {
  try {
    const usuarioRegistrado = await registrar(req.body);
    return res.json({ msg: "registro correcto", usuarioRegistrado });
  } catch (error) {
    res.status(500).json({ msg: "error al registrase" });
  }
});

/*
 * Esta ruta servirá para iniciar sesión del usuario, y la cuál devolverá un token y un rol para poder acceder
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
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error al logear" });
  }
});

/* 
* Podremos modificar un usuario, estando loggeado como admin y  con el id del usuario a modificar. El formulario tendrá que tener el id del usuario a modificar, y el body: name, email, password y role.
*/
router.put("/:id", /* esAdmin, */ async (req, res) => {
  try {
    const usuarioModificado = await cambiarUsuario(req.params.id, req.body);
    return res
      .status(200)
      .json({ msg: "el usurio ha sido modificado con exito", usuarioModificado });
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
});


/*
 * En esta ruta introduciremos el id del usuario que se desea borrar mediante un input de formulario
 */
router.delete("/:id", /* esAdmin, */ async (req, res) => {
  try {
    const usuarioBorrado = await borrarUsuario(req.params.id);
    return res.status(200).json({ msg: "usuario eliminado: ", usuarioBorrado });
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
});



module.exports = router;
