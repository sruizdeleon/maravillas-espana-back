const express = require("express");
const router = express.Router();
const {
  buscarActividadesPorTipoProvinciaOComunidad,
  buscarActividadPorId,
  crearActividad,
  borrarActividadPorId,
  cambiarActividad,
} = require("../controllers/activity.controller");
const { estaAutenticado, esAdmin} = require("../middleware/auth.middleware");

/**
 * Ruta para buscar todas las actividades, las que corresponden a una provinciaId o las que correspondan a la query "?comunidad="
 */
router.get("/", estaAutenticado, async (req, res) => {
  try {
    const actividadesEncontradas = await buscarActividadesPorTipoProvinciaOComunidad(req.query.tipo, req.query.provincia, req.query.comunidad);
    return res.json({msg: "actividades encontradas:", actividadesEncontradas});
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "error en la busqueda de las actividades" });
  }
});

/**
 * Ruta pa buscar una actividad en concreto por su id
 */
router.get("/:id", estaAutenticado, async (req, res) => {
  try {
    const actividadEncontrada = await buscarActividadPorId(req.params.id);
    return res.json({msg:"actividad encontrado", actividadEncontrada})
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "error en la busqueda de la actividad con dicho ID" });
  }
});

/**
 * Ruta para crear una nueva actividad
 */
router.post("/", esAdmin, async (req, res) => {
  try {
    const nuevaActividad = await crearActividad(req.body);
    return res.json({msg: "actividad creada con éxito", nuevaActividad})
  } catch(error) {
      console.log(error);
      return res.status(500).json({ msg: "error al guardar la actividad" });
    }
});

/**
 * Ruta para borrar la actividad a la que corresponde es id
 */
router.delete("/:id", esAdmin, async (req, res) => {
  try{
  const actividadBorrada = await borrarActividadPorId(req.params.id)
  return res.json({msg: "actividad elminada: ", actividadBorrada })
} catch(error){
    console.log(error)
    return res.status(500).json({msg: "error al borrar la actividad"})
  }});

  /**
   * Ruta para modificar la actividad con dicho id de parámetro
   */
router.put("/:id", esAdmin, async (req, res) => {
  try {
    const actividadModificada = await cambiarActividad(req.params.id, req.body);
    return res
      .json({ msg: "la actividad ha sido modificada con exito", actividadModificada});
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
})

module.exports = router;
