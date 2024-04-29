const express = require("express");
const router = express.Router();

conts = {
  buscarValoracionesActividad,
  buscarMisValoraciones,
  buscarValoracionPorId,
  añadirValoracion,
  borrarValoracion,
  
} = require("../controllers/rating.controller")

const {esAdmin, estaAutenticado} = require("../middleware/auth.middleware");

/**
 * Esta ruta busca las valoraciones de las actividades con la query "?actividad=", o mediante la query de "?usuario=", que sería el id del usuario aunque el controlador nos devuelva exclusivamente los atributos solicitados del usuario con ese id.
 */
router.get(
  "/",
   estaAutenticado, async (req, res) => {
    try {
      const valoracionesDeActividadEncontradas =
        await buscarValoracionesActividad(req.query.actividad);
      const valoracionesDeUsuarioEncontradas = await buscarMisValoraciones(
        req.query.usuario
      );
      return res.json({
        msg: "estas son las valoraciones encontradas: ",
        valoracionesDeActividadEncontradas,
        valoracionesDeUsuarioEncontradas,
      });
    } catch (error) {
      return res.status(500).json({ msg: "error interno del servidor" });
    }
  }
);

/**
 * Esta ruta encuentra la valoración que corresponda a dicho parámetro id.
 */

router.get(
  "/:id",
   estaAutenticado, async (req, res) => {
    try {
      const valoracionEncontrada = await buscarValoracionPorId(req.params.id);
      return res.json({
        msg: "esta es la valoracion de la actividad: ",
        valoracionEncontrada,
      });
    } catch (error) {
      return res.status(500).json({ msg: "error interno del servidor" });
    }
  }
);

/**
 * Esta ruta se usa para crear una nueva valoración
 */
router.post("/",  estaAutenticado,  async(req, res)=>{
  try{
    const valoracion = await añadirValoracion(req.body)
    return res.json({msg: "su valoración ha sido guardada con éxito", valoracion});
  } catch (error){
    return res
    .status(500)
    .json({ msg: "error interno del servidor" });
  } 
})

/**
 * Esta ruta se usa para borrar la valoración cuyo id viene en el parámetro
 */
router.delete("/:id", esAdmin, async(req, res)=>{
  try{
    const valoracionBorrada = await borrarValoracion(req.params.id)
    return res.json({msg: "su valoración ha sido borrada con éxito", valoracionBorrada});
  } catch (error){
    return res
    .status(500)
    .json({ msg: "error interno del servidor" });
  } 
})

module.exports = router;