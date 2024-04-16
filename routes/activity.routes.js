const express = require("express");
const router = express.Router();
const {
  buscarActividadesPorProvinciaIdOComunidad,
  buscarActividadPorId,
  crearActividad,
  borrarActividadPorId,
  cambiarActividad,
} = require("../controllers/activity.controller");
const { estaAutenticado, esAdmin} = require("../middleware/auth.middleware");

router.get("/", /* estaAutenticado, */ async (req, res) => {
  try {
    const actividadesEncontradas = await buscarActividadesPorProvinciaIdOComunidad(req.query.provinciaId, req.query.comunidad);
    return res.json({mdg: "actividades encontradas:", actividadesEncontradas});
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "error en la busqueda de las actividades" });
  }
});

router.get("/:id", /* estaAutenticado, */ async (req, res) => {
  try {
    const usuarioEncontrado = await buscarActividadPorId(req.params.id);
    return res.json({msg:"actividad encontrado", usuarioEncontrado})
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "error en la busqueda de la actividad con dicho ID" });
  }
});


router.post("/", /* esAdmin, */ async (req, res) => {
  try {
    const nuevaActividad = await crearActividad(req.body);
    return res.json({msg: "actividad creada con éxito", nuevaActividad})
  } catch(error) {
      console.log(error);
      return res.status(500).json({ msg: "error al guardar la actividad" });
    }
});


router.delete("/:id", /* esAdmin, */ async (req, res) => {
  try{
  const actividadBorrada = await borrarActividadPorId(req.params.id)
  return res.json({msg: "actividad elminada: ", actividadBorrada })
} catch(error){
    console.log(error)
    return res.status(500).json({msg: "error al borrar la actividad"})
  }});

router.put("/:id", /* esAdmin, */ async (req, res) => {
  try {
    const actividadModificada = await cambiarActividad(req.params.id, req.body);
    return res
      .json({ msg: "la actividad ha sido modificada con exito", actividadModificada});
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
})

module.exports = router;
