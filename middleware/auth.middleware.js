const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require("dotenv").config();

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