const express = require("express");
const router = express.Router();

conts = {
  buscarValoracionesActividad,
  buscarMisValoraciones,
  buscarValoracionPorId,
  añadirValoracion,
  borrarValoracion,
  
} = require("..controllers/rating.controller")

const {esAdmin, estaAutenticado} = require("../middleware/auth. middleware");
const { buscarValoracionesActividad } = require("../controllers/rating.controllers");

router.get("/", /* estaAutenticado, */ async (req,res) => {
  try{
    const valoracionesDeActividadEncontradas = await buscarValoracionesActividad(req.query.actividadId);
    const valoracionesDeUsuarioEncontradas = await buscarMisValoraciones(req.query.usuario);

    return res.json({msg: "estas son las valoraciones de la actividad: ", valoracionesDeActividadEncontradas, valoracionesDeUsuarioEncontradas});
  } catch (error){
    return res
    .status(500)
    .json({ msg: "error interno del servidor" });
  } 
})

router.get("/:id", /* estaAutenticado, */ async (req,res) => {
  try{
    const valoracionEncontrada = await buscarValoracionPorId(req.params.id)
    return res.json({msg: "esta es la valoracion de la actividad: ", valoracionEncontrada});
  } catch (error){
    return res
    .status(500)
    .json({ msg: "error interno del servidor" });
  } 
})

router.post("/", /* estaAutenticado, */  async(req, res)=>{
  try{
    const valoracion = await añadirValoracion(req.body)
    return res.json({msg: "su valoración ha sido guardada con éxito", valoracion});
  } catch (error){
    return res
    .status(500)
    .json({ msg: "error interno del servidor" });
  } 
})

router.delete("/:id", /*esAdmin,*/ async(req, res)=>{
  try{
    const valoracionBorrada = await borrarValoracion(req.params.id)
    return res.json({msg: "su valoración ha sido borrada con éxito", valoracionBorrada});
  } catch (error){
    return res
    .status(500)
    .json({ msg: "error interno del servidor" });
  } 
})