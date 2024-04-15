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

router.get("/", /* estaAutenticado, */ async (req, res) => {
    try{
        const provinciasEncontradas = await buscarProvinciasYPorNombre (req.query.nombre);
        return res.json({msg: "provincias encontradas", provinciasEncontradas})
    } catch (error){
        res.status(500).json({msg: "Error interno en el servidor"});
    }
})

router.get("/:id", /* estaAutenticado,*/ async (req, res) => {
    try{
        const provinciaEncontrada = await buscarProvinciaPorId(req.params.id)
        return res.json({msg: "provincias encontrada", provinciaEncontrada})
    } catch (error) {
        res.status(500).json({msg: "Error interno en el servidor"});
    }
})

router.post("/", /* esAdmin, */ async (req, res) => {
    try{
        const provinciaCreada = await crearProvincia(req.body);
        return res.json({msg: "provincia creada con éxito", provinciaCreada})
    } catch (error){
        res.stus(500).json({msg: "Error interno en el servidor"});
    }
})

router.put("/:id", /* es Admin. */ async (req, res) => {
    try {
      const provinciaModificada = await modificarProvincia(req.params.id, req.body);
      return res.json({
        msg: "provincia modificada con éxito", provinciaModificada,
      });
    } catch (error) {
      res.stus(500).json({ msg: "Error interno en el servidor" });
    }
})

router.delete("/:id", /* esAdmin, */ async (req, res) => {
    try{
        const provinciaBorrada = await borrarProvinciaPorId(req.params.id)
        return res.json({msg: "provincia borrada con éxito", provinciaBorrada})
    } catch (error) {
        res.status(500).json({msg: "Error interno en el servidor"});
    }
})

module.exports = router;