const express = require("express");
const router = express.Router();

const {
    buscarProvinciasYPorNombre,
    buscarProvinciaPorId,
    crearProvincia,
    modificarProvincia,
    borrarProvinciaPorId
} = require("../controllers/province.controller")
const { estaAutenticado, esAdmin} = require("../middleware/auth.middleware");

/**
 * Ruta a la que introducimos la query "?nombre=" para buscar los datos de provincia por nombre. Se necesita estar autenticado para esta acción.
 */
router.get("/", estaAutenticado, async (req, res) => {
    try{
        const provinciasEncontradas = await buscarProvinciasYPorNombre (req.query.nombre);
        return res.json({msg: "provincias encontradas", provinciasEncontradas})
    } catch (error){
        res.status(500).json({msg: "Error interno en el servidor"});
    }
})

/**
 * Ruta que no devuelve la provincia con ese id de parámetro. Se necesita estar autenticado para esta acción.
 */
router.get("/:id",  estaAutenticado, async (req, res) => {
    try{
        const provinciaEncontrada = await buscarProvinciaPorId(req.params.id)
        return res.json({msg: "provincias encontrada", provinciaEncontrada})
    } catch (error) {
        res.status(500).json({msg: "Error interno en el servidor"});
    }
})

/**
 * Ruta para crear una nueva provincia. Necesita ser administrador para llevar a cabo esta acción.
 */
router.post("/",  esAdmin, async (req, res) => {
    try{
        const provinciaCreada = await crearProvincia(req.body);
        return res.json({msg: "provincia creada con éxito", provinciaCreada})
    } catch (error){
        res.stus(500).json({msg: "Error interno en el servidor"});
    }
})

/**
 * Ruta para modificar provincia. Necesita ser administrador para llevar a cabo esta acción.
 */
router.put("/:id", esAdmin, async (req, res) => {
    try {
      const provinciaModificada = await modificarProvincia(req.params.id, req.body);
      return res.json({
        msg: "provincia modificada con éxito", provinciaModificada,
      });
    } catch (error) {
      res.stus(500).json({ msg: "Error interno en el servidor" });
    }
})

/**
 * Ruta para borrar provincia. Necesita ser administrador para llevar a cabo esta acción.
 */
router.delete("/:id",  esAdmin, async (req, res) => {
    try{
        const provinciaBorrada = await borrarProvinciaPorId(req.params.id)
        return res.json({msg: "provincia borrada con éxito", provinciaBorrada})
    } catch (error) {
        res.status(500).json({msg: "Error interno en el servidor"});
    }
})

module.exports = router;