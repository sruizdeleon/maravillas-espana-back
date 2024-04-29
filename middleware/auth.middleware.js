const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require("dotenv").config();

/**
 * En este middleware comprobaremos si hay token de usuario, se verifica y decodifica, y con la información decodificada buscamos si existe el usuario con ese id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns nos devuelve un mensaje de error en el caso de que no haya token o no sea valido, o la funcion next() en caso de que todo sea correcto.
 */
async function estaAutenticado(req, res, next) {
  try {
    const token = req.query.token;
    if (!token) {
      return res.status(401).json({ msg: "no estás autenticado" });
    } else {
      const tokenDecodificado = jwt.verify(token, process.env.JWTSECRET);
      const userId = tokenDecodificado.userId;
      console.log(tokenDecodificado);
      const usuarioEncontrado = await User.findById(userId);
      if (!usuarioEncontrado) {
        return res.status(401).json({ msg: "token no valido" });
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor", error});
  }
}

/**
 * En este middleware comprobaremos si hay token de usuario, se verifica y decodifica, y con la información decodificada buscamos si existe el usuario con ese id y si tiene un rol de administrador.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns nos devuelve un mensaje de error en el caso de que no haya token, no sea valido, o no sea administrado. Nos devolverá la funcion next() en caso de que todo lo anterior sea correcto.
 */
async function esAdmin(req, res, next){
  try{
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg: "no estás autenticado"})
    } else {
        const tokenDecodificado = jwt.verify(token, process.env.JWTSECRET)
        const userId = tokenDecodificado.userId
        const usuarioEncontrado = await User.findById(userId)
        if(!usuarioEncontrado){
           return res.status(401).json({msg: "token no valido"})
        } else{
            if(usuarioEncontrado.role !== "admin"){
                return res.status(403).json({msg: "no eres admin"})

            } else{
                next()
            }
        }
    }
  } catch {
    res.status(500).json({ msg: "error interno del servidor middleware", error});
  }
}

module.exports = {
    estaAutenticado,
    esAdmin,
}