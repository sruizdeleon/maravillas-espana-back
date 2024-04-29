const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const activityRoutes = require("./routes/activity.routes")
const provinceRoutes = require("./routes/province.routes")
const ratingRoutes = require("./routes/rating.routes")
require("dotenv").config();
const app = express()

var corsOptions = {
  //config. para cors abra conexion a la ruta elegida
  origin: process.env.HOST,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json())

app.set("secretKey", process.env.JWTSECRET)


mongoose.connect(process.env.conectStream)
.then(() =>{
    console.log('Conexión con base de datos exitosa')
})
.catch((err)=>{
    console.log(err,"Error al conectar con base de datos")
})


app.use("/api/users", userRoutes)
app.use("/api/actividades", activityRoutes)
app.use("/api/provincias", provinceRoutes)
app.use("/api/valoraciones", ratingRoutes)

app.listen(process.env.PORT, () =>{
    console.log('API funcionando en puerto 3000')
})