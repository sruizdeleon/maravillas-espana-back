require("dotenv").config();

const mongoose = require('mongoose');

const Provincia = require('../models/province.model');

const arrayProvincias = 
[
    {
        "_id": "661c09a6ab5c0cb25b8e9d7f",
        "nombre": "León",
        "imagenBandera": "https://i.postimg.cc/L5mYmDgK/Bandera-de-Leon-svg.png",
        
    },
    {
        "_id": "661cd0dbcab02767690bce6d",
        "nombre": "Burgos",
        "imagenBandera": "https://i.postimg.cc/7PNJmFjx/burgos.png",
        
    },
    {
        "_id": "661cd0e3cab02767690bce6f",
        "nombre": "Palencia",
        "imagenBandera": "https://i.postimg.cc/fy53ydY3/Bandera-de-Palencia-svg.png",
        
    },
    {
        "_id": "661cd0eccab02767690bce71",
        "nombre": "Valladolid",
        "imagenBandera": "https://i.postimg.cc/KcQ4nngj/Bandera-valladolid-svg.png",
        
    },
    {
        "_id": "661cd0f4cab02767690bce73",
        "nombre": "Segovia",
        "imagenBandera": "https://i.postimg.cc/FsWdQj98/segovia.png",
        
    },
    {
        "_id": "661cd0facab02767690bce75",
        "nombre": "Soria",
        "imagenBandera": "https://i.postimg.cc/Ss6Y03sf/soria.png",
        
    },
    {
        "_id": "661cd105cab02767690bce77",
        "nombre": "Ávila",
        "imagenBandera": "https://i.postimg.cc/X7Jqxpw8/avila.png",
        
    },
    {
        "_id": "661cd10bcab02767690bce79",
        "nombre": "Salamanca",
        "imagenBandera": "https://i.postimg.cc/VLLrT7cX/Bandera-de-Salamanca-svg.png",
        
    },
    {
        "_id": "661cd118cab02767690bce7b",
        "nombre": "Zamora",
        "imagenBandera": "https://i.postimg.cc/C1TnQSFK/Bandera-de-Zamora.png",
        
    },
    {
        "_id": "661cd11ecab02767690bce7d",
        "nombre": "A Coruña",
        "imagenBandera": "https://i.postimg.cc/5tmsx76b/a-coruna.jpg",
        
    },
    {
        "_id": "661cd127cab02767690bce7f",
        "nombre": "Pontevedra",
        "imagenBandera": "https://i.postimg.cc/Y9qbj6Wg/pontevedra.jpg",
        
    },
    {
        "_id": "661cd12dcab02767690bce81",
        "nombre": "Ourense",
        "imagenBandera": "https://i.postimg.cc/1ttryykr/ourense.jpg",
        
    },
    {
        "_id": "661cd132cab02767690bce83",
        "nombre": "Lugo",
        "imagenBandera": "https://i.postimg.cc/Px3KDCW7/lugo.jpg",
        
    },
    {
        "_id": "661cd169cab02767690bce85",
        "nombre": "Principado de Asturias",
        "imagenBandera": "https://i.postimg.cc/PJ0460Fz/asturias.jpg",
        
    },
    {
        "_id": "661cd17dcab02767690bce87",
        "nombre": "Cantabria",
        "imagenBandera": "https://i.postimg.cc/C5R7swJx/cantabria.jpg",
        
    },
    {
        "_id": "661cd188cab02767690bce89",
        "nombre": "Bizkaia",
        "imagenBandera": "https://i.postimg.cc/rsyXVR8Y/vizcaya.jpg",
        
    },
    {
        "_id": "661cd191cab02767690bce8b",
        "nombre": "Gipuzcoa",
        "imagenBandera": "https://i.postimg.cc/j28VLq2q/gipuzcoa.jpg",
        
    },
    {
        "_id": "661cd198cab02767690bce8d",
        "nombre": "Álava",
        "imagenBandera": "https://i.postimg.cc/Gh2w6Dg4/alava.jpg",
        
    },
    {
        "_id": "661cd19ecab02767690bce8f",
        "nombre": "La Rioja",
        "imagenBandera": "https://i.postimg.cc/gc4bMss9/la-rioja.jpg",
        
    },
    {
        "_id": "661cd1a4cab02767690bce91",
        "nombre": "Navarra",
        "imagenBandera": "https://i.postimg.cc/nzGffGtD/navarra.jpg",
        
    },
    {
        "_id": "661cd1b7cab02767690bce93",
        "nombre": "Huesca",
        "imagenBandera": "https://i.postimg.cc/dt4Qyvpy/huesca.jpg",
        
    },
    {
        "_id": "661cd1bdcab02767690bce95",
        "nombre": "Zaragoza",
        "imagenBandera": "https://i.postimg.cc/x18fGhVF/zaragoza.jpg",
        
    },
    {
        "_id": "661cd1c6cab02767690bce97",
        "nombre": "Teruel",
        "imagenBandera": "https://i.postimg.cc/vZKQ0hQ8/teruel.jpg",
        
    },
    {
        "_id": "661cd1cdcab02767690bce99",
        "nombre": "Lleida",
        "imagenBandera": "https://i.postimg.cc/Ls7nZRqT/lleida.jpg",
        
    },
    {
        "_id": "661cd1d3cab02767690bce9b",
        "nombre": "Girona",
        "imagenBandera": "https://i.postimg.cc/3wWkRWwN/girona.jpg",
        
    },
    {
        "_id": "661cd1d9cab02767690bce9d",
        "nombre": "Tarragona",
        "imagenBandera": "https://i.postimg.cc/Wbnzw0Ft/tarragona.jpg",
        
    },
    {
        "_id": "661cd1dfcab02767690bce9f",
        "nombre": "Barcelona",
        "imagenBandera": "https://i.postimg.cc/V6C5qTnc/barcelona.jpg",
        
    },
    {
        "_id": "661cd2e487583e7ca0fca397",
        "nombre": "Madrid",
        "imagenBandera": "https://i.postimg.cc/RFyK9KQv/madrid.jpg",
        
    },
    {
        "_id": "661cd2f087583e7ca0fca399",
        "nombre": "Cáceres",
        "imagenBandera": "https://i.postimg.cc/tJ6PgJ2W/caceres.jpg",
        
    },
    {
        "_id": "661cd2f787583e7ca0fca39b",
        "nombre": "Badajoz",
        "imagenBandera": "https://i.postimg.cc/T25n0Nf1/badajoz.jpg",
        
    },
    {
        "_id": "661cd2fe87583e7ca0fca39d",
        "nombre": "Guadalajara",
        "imagenBandera": "https://i.postimg.cc/BQ2BC74s/guadalajara.jpg",
        
    },
    {
        "_id": "661cd30487583e7ca0fca39f",
        "nombre": "Toledo",
        "imagenBandera": "https://i.postimg.cc/mkHNJ89Y/toledo.jpg",
        
    },
    {
        "_id": "661cd30987583e7ca0fca3a1",
        "nombre": "Cuenca",
        "imagenBandera": "https://i.postimg.cc/dQb9rcM4/cuenca.jpg",
        
    },
    {
        "_id": "661cd30f87583e7ca0fca3a3",
        "nombre": "Ciudad Real",
        "imagenBandera": "https://i.postimg.cc/YCkfDNCF/ciudad-real.jpg",
        
    },
    {
        "_id": "661cd31487583e7ca0fca3a5",
        "nombre": "Albacete",
        "imagenBandera": "https://i.postimg.cc/SQ2rnNPn/albacete.jpg",
        
    },
    {
        "_id": "661cd31b87583e7ca0fca3a7",
        "nombre": "Castellón",
        "imagenBandera": "https://i.postimg.cc/h46774q5/castellon.jpg",
        
    },
    {
        "_id": "661cd32687583e7ca0fca3a9",
        "nombre": "Valencia",
        "imagenBandera": "https://i.postimg.cc/WbZqmRNb/valencia.jpg",
        
    },
    {
        "_id": "661cd33c87583e7ca0fca3ab",
        "nombre": "Alicante",
        "imagenBandera": "https://i.postimg.cc/g0WVLz3W/alicante.jpg",
        
    },
    {
        "_id": "661cd34187583e7ca0fca3ad",
        "nombre": "Huelva",
        "imagenBandera": "https://i.postimg.cc/Ls3zzcVZ/huelva.jpg",
        
    },
    {
        "_id": "661cd34787583e7ca0fca3af",
        "nombre": "Sevilla",
        "imagenBandera": "https://i.postimg.cc/bJY1Lm6V/sevilla.jpg",
        
    },
    {
        "_id": "661cd34d87583e7ca0fca3b1",
        "nombre": "Córdoba",
        "imagenBandera": "https://i.postimg.cc/dV4srnyV/cordoba.jpg",
        
    },
    {
        "_id": "661cd35187583e7ca0fca3b3",
        "nombre": "Jaén",
        "imagenBandera": "https://i.postimg.cc/8Cc1HWRB/jaen.jpg",
        
    },
    {
        "_id": "661cd35787583e7ca0fca3b5",
        "nombre": "Cádiz",
        "imagenBandera": "https://i.postimg.cc/RVT4xGGL/cadiz.jpg",
        
    },
    {
        "_id": "661cd35e87583e7ca0fca3b7",
        "nombre": "Málaga",
        "imagenBandera": "https://i.postimg.cc/XNyR4xNy/M-LAGA.jpg",
        
    },
    {
        "_id": "661cd36487583e7ca0fca3b9",
        "nombre": "Granada",
        "imagenBandera": "https://i.postimg.cc/QxGRt5VY/GRANADA.png",
        
    },
    {
        "_id": "661cd36987583e7ca0fca3bb",
        "nombre": "Almería",
        "imagenBandera": "https://i.postimg.cc/MZRFhTt7/ALMERIA.png",
        
    },
    {
        "_id": "661cd36e87583e7ca0fca3bd",
        "nombre": "Murcia",
        "imagenBandera": "https://i.postimg.cc/9MwnXF2j/MURCIA.png",
        
    },
    {
        "_id": "661cd37b87583e7ca0fca3bf",
        "nombre": "Santa Cruz de Tenerife",
        "imagenBandera": "https://i.postimg.cc/7LDcVyS3/SANTA-CRUZ-TENERIFE.jpg",
        
    },
    {
        "_id": "661cd38487583e7ca0fca3c1",
        "nombre": "Las Palmas",
        "imagenBandera": "https://i.postimg.cc/0y7FDNK5/LAS-PALMAS.jpg",
        
    },
    {
        "_id": "661cd39087583e7ca0fca3c3",
        "nombre": "Baleares",
        "imagenBandera": "https://i.postimg.cc/zXs4yhBP/BALEARES.jpg",
        
    },
    {
        "_id": "661cd3a587583e7ca0fca3c5",
        "nombre": "Ceuta",
        "imagenBandera": "https://i.postimg.cc/W4nyYf7Q/CEUTA.jpg",
        
    },
    {
        "_id": "661cd3aa87583e7ca0fca3c7",
        "nombre": "Melilla",
        "imagenBandera": "https://i.postimg.cc/4dxSDbLn/MELILLA.jpg",
        
    }
]

mongoose.connect(process.env.conectStream)
.then(async () => {
    const allProvincias = await Provincia.find();
    if(allProvincias.length > 0){
        await Provincia.collection.drop();
        console.log("Provincias borradas");
    }
})
.catch((error) => console.log("error borrando Provincias", error))
.then(async () => {
    const provinciaMap = arrayProvincias.map((provincia) => new Provincia(provincia));
    await Provincia.insertMany(provinciaMap);
    console.log("Provincias insertadas");
})
.catch((error) => console.log("error insertando Provincias", error))
.finally(() => mongoose.disconnect());