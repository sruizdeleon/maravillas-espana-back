require("dotenv").config();

const mongoose = require('mongoose');

const Actividad = require('../models/activity.model');

const arrayActividades =[
  {
    "_id": "662d2741e3a35166node ",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Catedral de León",
    "descripcion": "Contempla la impresionante arquitectura gótica de la Catedral de León, una de las más destacadas de España.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Twg53Mpr/Catedral-G-tica-de-Le-n.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca1",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Barrio Húmedo",
    "descripcion": "Sumérgete en la vida nocturna de León en el Barrio Húmedo, conocido por sus animados bares de tapas y ambiente festivo.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/7Yc5w3Yp/Barrio-Humedo.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca2",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Museo de Arte Contemporáneo de Castilla y León (MUSAC)",
    "descripcion": "Explora el arte contemporáneo en este innovador museo que alberga una variedad de exposiciones y eventos culturales.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/gJdw1Gkj/Musac.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca3",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Murallas de León",
    "descripcion": "Recorre las antiguas murallas de León y admira las vistas panorámicas de la ciudad desde lo alto de sus torres.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/MTDcSgvD/Muralla-de-leon.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca4",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Ruta del Cares",
    "descripcion": "Embárcate en esta espectacular ruta de senderismo que atraviesa el desfiladero del río Cares, ofreciendo vistas impresionantes de los Picos de Europa.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Y0Dh4gNL/ruta-cares.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca5",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Visita a las Médulas",
    "descripcion": "Explora este paisaje único formado por antiguas minas de oro romanas, ahora declarado Patrimonio de la Humanidad por la UNESCO.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/25nbH1Yg/medulas.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca6",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Visita a los Pueblos de los Ancares",
    "descripcion": "Recorre los encantadores pueblos de montaña de la comarca de los Ancares y descubre su arquitectura tradicional y su estilo de vida rural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/2831scmQ/Pueblos-de-los-Ancares.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca7",
    "provincia": "661c09a6ab5c0cb25b8e9d7f",
    "nombre": "Cuevas de Valporquero",
    "descripcion": "Explora las fascinantes Cuevas de Valporquero, un complejo kárstico subterráneo en la provincia de León. Descubre sus impresionantes formaciones geológicas, como estalactitas y estalagmitas, mientras te adentras en sus galerías y salas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/yx8DYnRz/cuevas-de-valporquero.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca8",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Plaza Mayor de Burgos",
    "descripcion": "Disfruta del bullicio y la vida cotidiana en la Plaza Mayor de Burgos, rodeada de edificios históricos y animados cafés.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/vZhpxX92/Plaza-mayor-Burgos.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800ca9",
    "nombre": "Catedral de Burgos",
    "img": "https://i.postimg.cc/cC3pKSMf/Catedral-Burgos.jpg",
    "descripcion": "La Catedral de Santa María de Burgos es un impresionante ejemplo del arte gótico en España. Construida entre los siglos XIII y XVI, es conocida por su majestuosa arquitectura, sus vidrieras espectaculares y sus numerosas esculturas. Es uno de los principales monumentos de Burgos y un importante lugar de peregrinación en el Camino de Santiago.",
    "provincia": "661cd0dbcab02767690bce6d",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "662d2741e3a35166e3800caa",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Paseo por el Paseo del Espolón",
    "descripcion": "Relájate y disfruta de un agradable paseo por el Paseo del Espolón, bordeado de árboles y bancos, y con vistas al río Arlanzón.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/BvvRTDBS/Paseo-por-el-Paseo-del-Espol-n.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800cab",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Museo de la Lengua Castellana",
    "descripcion": "Descubre la riqueza y la evolución del idioma castellano en este interesante museo ubicado en Burgos.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/nhpyLNsQ/Museo-de-la-Lengua-Castellana.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800cac",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Mercado de Abastos de Burgos",
    "descripcion": "Sumérgete en la vida local de Burgos visitando su animado mercado de abastos, donde encontrarás productos frescos y tradicionales.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/MGrNdT9y/Mercado-de-Abastos-de-Burgos.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800cad",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Ruta de Senderismo por el Cañón del Ebro",
    "descripcion": "Explora la belleza natural del Cañón del Ebro en una emocionante ruta de senderismo que te llevará a través de paisajes impresionantes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/J7bq60nj/Ruta-de-Senderismo-por-el-Ca-n-del-Ebro.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800cae",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Visita a los Pueblos del Valle de Valdebezana",
    "descripcion": "Recorre los pintorescos pueblos del Valle de Valdebezana y descubre su encanto rural, sus tradiciones y su rica historia.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/VLmF3wrp/Visita-a-los-Pueblos-del-Valle-de-Valdebezana.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800caf",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Visita a los Monasterios del Valle de Manzanedo",
    "descripcion": "Descubre la espiritualidad y la historia de los monasterios del Valle de Manzanedo, joyas del arte románico en Burgos.",
    "tipo": "rural",
    "img": "_monasterios_valle_manzanedo_burgos.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800cb0",
    "provincia": "661cd0dbcab02767690bce6d",
    "nombre": "Avistamiento de Aves en el Parque Natural de las Hoces del Alto Ebro y Rudrón",
    "descripcion": "Observa la rica avifauna del Parque Natural de las Hoces del Alto Ebro y Rudrón en una experiencia de avistamiento de aves en plena naturaleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/wT8KC1g2/Avistamiento-de-Aves-en-el-Parque-Natural-de-las-Hoces-del-Alto-Ebro-y-Rudr-n.jpg",
    "comunidad": "Castilla y León"
  },
  {
    "_id": "662d2741e3a35166e3800cb1",
    "nombre": "Catedral de Palencia",
    "img": "https://i.postimg.cc/TYnPFy5q/Catedral-de-Palencia.jpg",
    "descripcion": "Visita la hermosa Catedral de Palencia, un destacado ejemplo del arte gótico español con una rica historia y magnífica arquitectura.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "662d2741e3a35166e3800cb2",
    "nombre": "Plaza Mayor de Palencia",
    "img": "https://i.postimg.cc/JtV9jz1R/Plaza-Mayor-Palencia.jpg",
    "descripcion": "Disfruta de la atmósfera animada y la arquitectura histórica de la Plaza Mayor de Palencia, un lugar perfecto para relajarse y disfrutar de un café.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "662d2741e3a35166e3800cb3",
    "nombre": "Museo Diocesano de Palencia",
    "img": "https://i.postimg.cc/QCW2BTZ6/Museo-Diocesano-de-Palencia.jpg",
    "descripcion": "Explora la historia religiosa y el arte sacro en el Museo Diocesano de Palencia, que alberga una valiosa colección de obras de arte y artefactos religiosos.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "662d2741e3a35166e3800cb4",
    "nombre": "Monasterio de San Zoilo",
    "img": "https://i.postimg.cc/yNy7zm3d/Monasterio-de-San-Zoilo.jpg",
    "descripcion": "Visita el Monasterio de San Zoilo en la localidad de Carrión de los Condes, un impresionante complejo monástico con una rica historia y una arquitectura fascinante.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "662d2741e3a35166e3800cb5",
    "nombre": "Visita al Castillo de Fuentes de Valdepero",
    "img": "https://i.postimg.cc/mZzk3pbn/Visita-al-Castillo-de-Fuentes-de-Valdepero.jpg",
    "descripcion": "Descubre la historia medieval de la provincia explorando el Castillo de Fuentes de Valdepero, una impresionante fortaleza que se alza sobre la llanura castellana.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "662d2741e3a35166e3800cb6",
    "nombre": "Ruta de los Palacios de Palencia",
    "img": "https://i.postimg.cc/ZRgkKL2B/Ruta-de-los-Palacios-de-Palencia.jpg",
    "descripcion": "Recorre la ciudad de Palencia siguiendo la Ruta de los Palacios, que te llevará a través de los elegantes palacetes y edificios históricos de la ciudad.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "662d2741e3a35166e3800cb7",
    "nombre": "Visita a los Pueblos de la Ruta del Románico",
    "img": "https://i.postimg.cc/6pLNLn2g/Visita-a-los-Pueblos-de-la-Ruta-del-Rom-nico-Palencia.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Ruta del Románico en Palencia, donde podrás admirar iglesias y ermitas románicas de gran belleza arquitectónica.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "662d2741e3a35166e3800cb8",
    "nombre": "Visita a la Reserva Natural de Fuentes Carrionas y Fuente Cobre de la Montaña Palentina ",
    "img": "_reserva_natural_fuentes_carrionas_palencia.jpg",
    "descripcion": "Descubre la belleza natural de la Reserva Natural de Fuentes Carrionas y Fuente Cobre-Montaña Palentina, hogar de una variada fauna y flora.",
    "provincia": "661cd0e3cab02767690bce6f",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf6e93efab228a11f8004",
    "nombre": "Plaza Mayor de Valladolid",
    "img": "https://i.postimg.cc/Bbytfyxj/Plaza-Mayor-de-Valladolid.jpg",
    "descripcion": "Disfruta del encanto y la vida cotidiana en la Plaza Mayor de Valladolid, rodeada de edificios históricos y animados cafés.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "661cf6f63efab228a11f8006",
    "nombre": "Catedral de Nuestra Señora de la Asunción",
    "img": "https://i.postimg.cc/7hbbcDTv/Catedral-de-Nuestra-Se-ora-de-la-Asunci-n.jpg",
    "descripcion": "Visita la majestuosa Catedral de Nuestra Señora de la Asunción de Valladolid, una obra maestra del gótico español con una impresionante fachada y rica historia.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "661cf7083efab228a11f8008",
    "nombre": "Monasterio de San Joaquín y Santa Ana",
    "img": "https://i.postimg.cc/hGbJQ2qY/Monasterio-de-San-Joaqu-n-y-Santa-Ana.jpg",
    "descripcion": "Visita el Monasterio de San Joaquín y Santa Ana, un tranquilo oasis en el corazón de Valladolid, conocido por su arquitectura barroca y su ambiente sereno.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "661cf7533efab228a11f800a",
    "nombre": "Parque Grande de Valladolid",
    "img": "https://i.postimg.cc/bJyZx1yw/Parque-Grande-de-Valladolid.jpg",
    "descripcion": "Explora el Parque Grande de Valladolid, un hermoso espacio verde que ofrece una escapada tranquila del bullicio de la ciudad. Este parque es perfecto para pasear, hacer picnic o simplemente relajarse rodeado de naturaleza.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "ciudad"
  },
  {
    "_id": "661cf7753efab228a11f800c",
    "nombre": "Ruta de Senderismo por los Montes Torozos",
    "img": "https://i.postimg.cc/cL3t0sk0/Ruta-de-Senderismo-por-los-Montes-Torozos.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por los Montes Torozos, descubriendo paisajes naturales y una gran diversidad de flora y fauna.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf77f3efab228a11f800e",
    "nombre": "Visita a los Pueblos de la Ruta del Vino de Cigales",
    "img": "https://i.postimg.cc/XJxYSTDX/Visita-a-los-Pueblos-de-la-Ruta-del-Vino-de-Cigales.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Ruta del Vino de Cigales en Valladolid, donde podrás disfrutar de catas de vino y visitas a bodegas.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf78a3efab228a11f8010",
    "nombre": "Turismo Rural en Casa Rural en Tierras de Medina",
    "img": "https://i.postimg.cc/NGPKXyWQ/Turismo-Rural-en-Casa-Rural-en-Tierras-de-Medina.jp",
    "descripcion": "Escápate del ajetreo de la ciudad y disfruta de la paz y la tranquilidad del campo alojándote en una acogedora casa rural en Tierras de Medina.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf7933efab228a11f8012",
    "nombre": "Visita a las Lagunas de Villafáfila",
    "img": "https://i.postimg.cc/N0w90WZT/Visita-a-las-Lagunas-de-Villaf-fila.jpg",
    "descripcion": "Descubre la belleza natural de las Lagunas de Villafáfila, un importante humedal en Valladolid que alberga una gran diversidad de aves acuáticas.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf79e3efab228a11f8014",
    "nombre": "Visita al Castillo de Portillo",
    "img": "https://i.postimg.cc/MT9vdXHb/Visita-al-Castillo-de-Portillo.jpg",
    "descripcion": "Descubre la historia medieval de Valladolid visitando el Castillo de Portillo, una fortaleza que ofrece impresionantes vistas panorámicas de la región.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf7aa3efab228a11f8016",
    "nombre": "Avistamiento de Aves en el Parque Natural de las Arribes del Duero",
    "img": "https://i.postimg.cc/jdmnpWXM/Avistamiento-de-Aves-en-el-Parque-Natural-de-las-Arribes-del-Duero.jpg",
    "descripcion": "Observa la espectacular fauna del Parque Natural de las Arribes del Duero en una experiencia de avistamiento de aves, donde podrás ver rapaces y aves acuáticas.",
    "provincia": "661cd0eccab02767690bce71",
    "comunidad": "Castilla y León",
    "tipo": "rural"
  },
  {
    "_id": "661cf7c23efab228a11f8018",
    "nombre": "Alcázar de Segovia",
    "img": "https://i.postimg.cc/MHmLNcgH/Alc-zar-de-Segovia.jpg",
    "descripcion": "Visita el imponente Alcázar de Segovia, un castillo de cuento de hadas que se alza sobre un promontorio rocoso con vistas panorámicas de la ciudad.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7d13efab228a11f801a",
    "nombre": "Catedral de Segovia",
    "img": "https://i.postimg.cc/jSgpR72J/Catedral-de-Segovia.jpg",
    "descripcion": "Explora la majestuosa Catedral de Segovia, una joya del gótico español con una impresionante fachada y un rico patrimonio artístico.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7da3efab228a11f801c",
    "nombre": "Barrio Judío",
    "img": "https://i.postimg.cc/nLX6rh9S/Barrio-Jud-o-Segovia.jpg",
    "descripcion": "Recorre las estrechas calles del pintoresco Barrio Judío de Segovia, donde podrás admirar la arquitectura medieval y descubrir la historia de la comunidad judía.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7e73efab228a11f801e",
    "nombre": "Plaza Mayor de Segovia",
    "img": "https://i.postimg.cc/J0Lgp36S/Plaza-Mayor-de-Segovia.jpg",
    "descripcion": "Disfruta del ambiente animado y la arquitectura histórica en la Plaza Mayor de Segovia, rodeada de edificios emblemáticos y terrazas de cafés.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7f33efab228a11f8020",
    "nombre": "Ruta de Senderismo por las Hoces del Río Duratón",
    "img": "https://i.postimg.cc/FRc8bCZj/Ruta-de-Senderismo-por-las-Hoces-del-R-o-Durat-n.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por las Hoces del Río Duratón, descubriendo paisajes impresionantes y una rica fauna y flora.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf7fc3efab228a11f8022",
    "nombre": "Visita a los Pueblos de la Sierra de Guadarrama",
    "img": "https://i.postimg.cc/9Fp3NSjb/Visita-a-los-Pueblos-de-la-Sierra-de-Guadarrama.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Sierra de Guadarrama en Segovia, donde podrás disfrutar de la naturaleza y la tranquilidad del campo.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf8093efab228a11f8024",
    "nombre": "Visita a las Cuevas de los Enebralejos",
    "img": "https://i.postimg.cc/HLFFy1QY/Visita-a-las-Cuevas-de-los-Enebralejos.jpg",
    "descripcion": "Descubre las misteriosas Cuevas de los Enebralejos, una impresionante red de cuevas y galerías subterráneas con formaciones geológicas únicas.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf83b3efab228a11f8026",
    "nombre": "Visita al Castillo de Coca",
    "img": "https://i.postimg.cc/ry17KbzT/Visita-al-Castillo-de-Coca.jpg",
    "descripcion": "Descubre la historia medieval de Segovia visitando el Castillo de Coca, una impresionante fortaleza de ladrillo rojo considerada una joya del mudéjar español.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf84c3efab228a11f8028",
    "nombre": "Parque del Castillo",
    "img": "https://i.postimg.cc/Xvm59QHc/Parque-del-Castillo.jpg",
    "descripcion": "Disfruta de un tranquilo paseo por el Parque del Castillo, que ofrece hermosas vistas panorámicas de la ciudad de Soria y cuenta con zonas verdes para relajarse.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8563efab228a11f802a",
    "nombre": "Plaza Mayor de Soria",
    "img": "https://i.postimg.cc/65cGM9bQ/Plaza-Mayor-de-Soria.jpg",
    "descripcion": "Sumérgete en la vida local de Soria visitando la Plaza Mayor, un animado centro de encuentro rodeado de edificios históricos y terrazas de cafés.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "nombre": "Catedral de Soria",
    "img": "https://i.postimg.cc/R066CwS3/Catedral-de-Soria.jpg",
    "descripcion": "Visita la impresionante Catedral de Soria, una joya del gótico español con una impresionante fachada y un rico patrimonio artístico en su interior.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf86d3efab228a11f802e",
    "nombre": "Museo Numantino",
    "img": "https://i.postimg.cc/KvxM7KNV/Museo-Numantino.jpg",
    "descripcion": "Explora la historia y la arqueología de la región en el Museo Numantino de Soria, que alberga una importante colección de artefactos prehistóricos y romanos.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8793efab228a11f8030",
    "nombre": "Iglesia de San Juan de Rabanera",
    "img": "https://i.postimg.cc/GpHYBZQm/Iglesia-de-San-Juan-de-Rabanera.jpg",
    "descripcion": "Descubre la arquitectura románica de Soria visitando la Iglesia de San Juan de Rabanera, una de las iglesias más antiguas y emblemáticas de la ciudad.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8853efab228a11f8032",
    "nombre": "Ruta de Senderismo por el Cañón del Río Lobos",
    "img": "https://i.postimg.cc/T1qWMGRC/Ruta-de-Senderismo-por-el-Ca-n-del-R-o-Lobos.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por el espectacular Cañón del Río Lobos, descubriendo paisajes impresionantes y una rica fauna y flora.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf88d3efab228a11f8034",
    "nombre": "Visita a los Pueblos de la Sierra de Urbión",
    "img": "https://i.postimg.cc/L5MZbhMJ/Visita-a-los-Pueblos-de-la-Sierra-de-Urbi-n.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Sierra de Urbión en Soria, donde podrás disfrutar de la naturaleza y la tranquilidad del campo.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf8983efab228a11f8036",
    "nombre": "Visita a las Ruinas de Numancia",
    "img": "https://i.postimg.cc/sg2G8tb4/Visita-a-las-Ruinas-de-Numancia.jpg",
    "descripcion": "Descubre la historia antigua de Soria visitando las Ruinas de Numancia, un importante yacimiento arqueológico que ofrece una mirada al pasado celtíbero de la región.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf8c23efab228a11f8038",
    "nombre": "Murallas de Ávila",
    "img": "https://i.postimg.cc/bwcSY3CK/Murallas-de-vila.jpg",
    "descripcion": "Contempla las impresionantes Murallas de Ávila, una de las fortificaciones medievales mejor conservadas de Europa, que rodean el casco antiguo de la ciudad.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8c93efab228a11f803a",
    "nombre": "Catedral de Ávila",
    "img": "https://i.postimg.cc/JzNDsZSt/Catedral-de-Avila.jpg",
    "descripcion": "Visita la majestuosa Catedral de Ávila, un magnífico ejemplo de arquitectura gótica con una impresionante fachada y un rico patrimonio artístico en su interior.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8d23efab228a11f803c",
    "nombre": "Basílica de San Vicente",
    "img": "https://i.postimg.cc/L6rLYHXQ/Bas-lica-de-San-Vicente.jpg",
    "descripcion": "Explora la Basílica de San Vicente, una joya del románico español con una impresionante portada esculpida y un interior decorado con obras de arte.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8ee3efab228a11f803e",
    "nombre": "Ruta de los Palacios de Ávila",
    "img": "https://i.postimg.cc/5tfHLjMg/Ruta-de-los-Palacios-de-vila.jpg",
    "descripcion": "Recorre la ciudad de Ávila siguiendo la Ruta de los Palacios, que te llevará a través de elegantes palacetes y edificios históricos de la ciudad.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8f83efab228a11f8040",
    "nombre": "Plaza del Mercado Chico",
    "img": "https://i.postimg.cc/hvNzdrSQ/Plaza-del-Mercado-Chico.jpg",
    "descripcion": "Sumérgete en el corazón de Ávila visitando la Plaza del Mercado Chico, un animado centro de encuentro rodeado de edificios históricos y terrazas de cafés.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9103efab228a11f8042",
    "nombre": "Convento de Santa Teresa",
    "img": "https://i.postimg.cc/3NvHfCTT/Convento-de-Santa-Teresa.jpg",
    "descripcion": "Descubre la vida y la obra de Santa Teresa de Jesús visitando el Convento de Santa Teresa en Ávila, donde la santa vivió y fundó su primer convento.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf91b3efab228a11f8044",
    "nombre": "Ruta de Senderismo por la Sierra de Gredos",
    "img": "https://i.postimg.cc/ZR7yTm2c/Ruta-de-Senderismo-por-la-Sierra-de-Gredos.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por la impresionante Sierra de Gredos, descubriendo paisajes montañosos y una rica fauna y flora.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf92d3efab228a11f8046",
    "nombre": "Visita a los Pueblos de la Sierra de Ávila",
    "img": "https://i.postimg.cc/Y2PmZp12/Visita-a-los-Pueblos-de-la-Sierra-de-vila.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Sierra de Ávila, donde podrás disfrutar de la tranquilidad del campo y la belleza de la naturaleza.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9383efab228a11f8048",
    "nombre": "Visita a las Cuevas del Águila",
    "img": "https://i.postimg.cc/yYSSzwPm/Visita-a-las-Cuevas-del-guila.jpg",
    "descripcion": "Descubre las impresionantes Cuevas del Águila, una red de cuevas y grutas con formaciones geológicas únicas, como estalactitas y estalagmitas.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9423efab228a11f804a",
    "nombre": "Visita al Castillo de Gredos",
    "img": "https://i.postimg.cc/KzzRpVjg/Visita-al-Castillo-de-Gredos.jpg",
    "descripcion": "Descubre la historia medieval de Ávila visitando el Castillo de Gredos, una impresionante fortaleza situada en un entorno natural espectacular.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9543efab228a11f804c",
    "nombre": "Plaza Mayor de Salamanca",
    "img": "https://i.postimg.cc/6QSKV57g/Plaza-Mayor-de-Salamanca.jpg",
    "descripcion": "Disfruta del ambiente animado y la arquitectura histórica en la Plaza Mayor de Salamanca, uno de los lugares más emblemáticos de la ciudad.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf95c3efab228a11f804e",
    "nombre": "Universidad de Salamanca",
    "img": "https://i.postimg.cc/JhtmBBhj/Universidad-de-Salamanca.jpg",
    "descripcion": "Visita la prestigiosa Universidad de Salamanca, una de las más antiguas de Europa, y explora sus magníficos edificios y su rica historia.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9683efab228a11f8050",
    "nombre": "Catedral Nueva de Salamanca",
    "img": "https://i.postimg.cc/bYnyTb9T/Catedral-Nueva-de-Salamanca.jpg",
    "descripcion": "Contempla la grandiosa Catedral Nueva de Salamanca, una obra maestra del estilo gótico con impresionantes vidrieras y una majestuosa torre.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9723efab228a11f8052",
    "nombre": "Casa de las Conchas",
    "img": "https://i.postimg.cc/qq2pvVvY/Casa-de-las-Conchas.jpg",
    "descripcion": "Descubre la emblemática Casa de las Conchas de Salamanca, un edificio renacentista decorado con más de 300 conchas en su fachada y que alberga una biblioteca pública.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf97a3efab228a11f8054",
    "nombre": "Torre del Clavero",
    "img": "https://i.postimg.cc/sDRV0XnR/Torre-del-Clavero.jpg",
    "descripcion": "Contempla la imponente Torre del Clavero de Salamanca, una antigua fortaleza medieval que ofrece vistas panorámicas de la ciudad desde su mirador.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9933efab228a11f8056",
    "nombre": "Convento de San Esteban",
    "img": "https://i.postimg.cc/524fbrd7/Convento-de-San-Esteban.jpg",
    "descripcion": "Visita el impresionante Convento de San Esteban de Salamanca, un destacado ejemplo del estilo plateresco español con un impresionante claustro y una iglesia decorada.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9a23efab228a11f8058",
    "nombre": "Ruta de Senderismo por las Arribes del Duero",
    "img": "https://i.postimg.cc/MKbWkS4f/Ruta-de-Senderismo-por-las-Arribes-del-Duero.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por las impresionantes Arribes del Duero, descubriendo cañones, cascadas y una rica biodiversidad.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9c13efab228a11f805a",
    "nombre": "Visita a las Cuevas de Salamanca",
    "img": "https://i.postimg.cc/jSMt5hRs/Visita-a-las-Cuevas-de-Salamanca.jpg",
    "descripcion": "Descubre las impresionantes Cuevas de Salamanca, una red de cuevas y galerías subterráneas que ofrecen una mirada fascinante al pasado geológico de la región.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9cd3efab228a11f805c",
    "nombre": "Visita al Castillo de Miranda del Castañar",
    "img": "https://i.postimg.cc/QtT3fG1t/Visita-al-Castillo-de-Miranda-del-Casta-ar.jpg",
    "descripcion": "Descubre la historia medieval de Salamanca visitando el Castillo de Miranda del Castañar, una impresionante fortaleza que domina el paisaje rural.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9f23efab228a11f805e",
    "nombre": "Visita al Castillo de Zamora",
    "img": "https://i.postimg.cc/T3nGjXj3/Visita-al-Castillo-de-Zamora.jpg",
    "descripcion": "Explora la historia medieval de Zamora en este imponente castillo ubicado en el centro de la ciudad.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9fa3efab228a11f8060",
    "nombre": "Paseo por el Casco Antiguo",
    "img": "https://i.postimg.cc/63W951v5/Paseo-por-el-Casco-Antiguo.jpg",
    "descripcion": "Recorre las estrechas calles empedradas del casco antiguo de Zamora y descubre su encanto histórico.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa053efab228a11f8062",
    "nombre": "Museo de Semana Santa",
    "img": "https://i.postimg.cc/hGqDNG4m/Museo-de-Semana-Santa.jpg",
    "descripcion": "Sumérgete en la tradición y la artesanía de la Semana Santa zamorana en este fascinante museo.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa103efab228a11f8064",
    "nombre": "Catedral de Zamora",
    "img": "https://i.postimg.cc/fWgwDCTD/Catedral-de-Zamora.jpg",
    "descripcion": "Contempla la majestuosa arquitectura románica de la catedral de Zamora, una joya del arte medieval.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa313efab228a11f8066",
    "nombre": "Mercado de Abastos",
    "img": "https://i.postimg.cc/MT9zcb70/Mercado-de-Abastos.jpg",
    "descripcion": "Sumérgete en la vida cotidiana de Zamora visitando su animado mercado de abastos, donde encontrarás productos frescos y locales.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa543efab228a11f8068",
    "nombre": "Senderismo en los Arribes del Duero",
    "img": "https://i.postimg.cc/rF0qm4KW/Senderismo-en-los-Arribes-del-Duero.jpg",
    "descripcion": "Explora los impresionantes paisajes de los Arribes del Duero a través de sus rutas de senderismo.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfa693efab228a11f806a",
    "nombre": "Ruta en Bicicleta por la Vía de la Plata",
    "img": "https://i.postimg.cc/PqzXHkNR/Ruta-en-Bicicleta-por-la-V-a-de-la-Plata.jpg",
    "descripcion": "Pedalea por la antigua calzada romana de la Vía de la Plata y disfruta de los paisajes rurales de Zamora.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfa8c3efab228a11f806c",
    "nombre": "Recorrido en Kayak por el río Tormes",
    "img": "https://i.postimg.cc/J0tMjDxf/Recorrido-en-Kayak-por-el-r-o-Tormes.jpg",
    "descripcion": "Descubre la belleza natural de Zamora desde una perspectiva única mientras remas en kayak por el pintoresco río Tormes.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfa943efab228a11f806e",
    "nombre": "Visita a los Molinos de Agua",
    "img": "https://i.postimg.cc/L57RD90n/Visita-a-los-Molinos-de-Agua.jpg",
    "descripcion": "Adéntrate en la historia de la provincia explorando los antiguos molinos de agua que salpican el paisaje rural de Zamora.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y León",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfab43efab228a11f8071",
    "nombre": "Casco Antiguo",
    "img": "https://i.postimg.cc/Kc6wY24r/Casco-Antiguo-a-coru-a.jpg",
    "descripcion": "Explora el encantador Casco Antiguo de A Coruña, con sus estrechas calles empedradas, plazas históricas y pintorescas fachadas, donde podrás descubrir la historia y la cultura de la ciudad.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfac43efab228a11f8073",
    "nombre": "Playa de Riazor",
    "img": "https://i.postimg.cc/vBjjfRhy/Playa-de-Riazor.jpg",
    "descripcion": "Disfruta de un día de sol y mar en la Playa de Riazor, una de las playas urbanas más populares de A Coruña, ideal para relajarse, nadar y practicar deportes acuáticos.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfad23efab228a11f8075",
    "nombre": "Jardines de Méndez Núñez",
    "img": "https://i.postimg.cc/kGbHyjYb/Jardines-de-M-ndez-N-ez.jpg",
    "descripcion": "Relájate en los Jardines de Méndez Núñez, un hermoso parque urbano en el corazón de A Coruña, perfecto para dar un paseo tranquilo entre árboles, fuentes y esculturas.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfade3efab228a11f8077",
    "nombre": "Ruta de Senderismo por los Acantilados de Loiba",
    "img": "https://i.postimg.cc/W45xpqJh/Ruta-de-Senderismo-por-los-Acantilados-de-Loiba.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por los impresionantes Acantilados de Loiba, disfrutando de vistas panorámicas del océano Atlántico y la costa gallega.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfaef3efab228a11f8079",
    "nombre": "Visita a los Pueblos de la Costa da Morte",
    "img": "https://i.postimg.cc/W45xpqJh/Ruta-de-Senderismo-por-los-Acantilados-de-Loiba.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Costa da Morte en la provincia de A Coruña, donde podrás disfrutar de la tranquilidad del campo y la belleza del litoral gallego.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb183efab228a11f807b",
    "nombre": "Visita a los Pazos de Galicia",
    "img": "https://i.postimg.cc/7ZDRgn35/Visita-a-los-Pazos-de-Galicia.jpg",
    "descripcion": "Descubre la arquitectura señorial de Galicia visitando los Pazos, antiguas mansiones y palacios que representan la historia y la cultura de la región.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb2f3efab228a11f807d",
    "nombre": "Casco Histórico de Pontevedra",
    "img": "https://i.postimg.cc/d1HFfS9N/Casco-Hist-rico-de-Pontevedra.jpg",
    "descripcion": "Recorre el encantador Casco Histórico de Pontevedra, con sus estrechas calles empedradas, plazas históricas y edificios señoriales, donde podrás disfrutar de la arquitectura y la historia de la ciudad.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb3b3efab228a11f807f",
    "nombre": "Plaza de la Leña",
    "img": "https://i.postimg.cc/qvyk7wkg/Plaza-de-la-Le-a-de-Pontevedra.jpg",
    "descripcion": "Disfruta del ambiente animado en la Plaza de la Leña de Pontevedra, un lugar popular entre los lugareños y visitantes, rodeado de bares, restaurantes y tiendas.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb443efab228a11f8081",
    "nombre": "Basílica de Santa María la Mayor",
    "img": "https://i.postimg.cc/pXgWx4Mg/Bas-lica-de-Santa-Mar-a-la-Mayor.jpg",
    "descripcion": "Visita la imponente Basílica de Santa María la Mayor de Pontevedra, una obra maestra del estilo gótico con una impresionante fachada y un rico patrimonio artístico en su interior.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb503efab228a11f8083",
    "nombre": "Parque de la Alameda",
    "img": "https://i.postimg.cc/MTKxd81j/Parque-de-la-Alameda.jpg",
    "descripcion": "Relájate en el Parque de la Alameda de Pontevedra, un hermoso parque urbano con jardines, fuentes y bancos, perfecto para dar un paseo tranquilo o disfrutar de un picnic en familia.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb5b3efab228a11f8085",
    "nombre": "Ruta de Senderismo por las Fragas do Eume",
    "img": "https://i.postimg.cc/0NCPYNKs/Ruta-de-Senderismo-por-las-Fragas-do-Eume.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por las Fragas do Eume, un impresionante bosque atlántico en la provincia de Pontevedra, donde podrás disfrutar de la naturaleza en estado puro.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb643efab228a11f8087",
    "nombre": "Visita a los Pueblos de las Rías Baixas",
    "img": "https://i.postimg.cc/PJ0jXp9m/Visita-a-los-Pueblos-de-las-R-as-Baixas.jpg",
    "descripcion": "Recorre los encantadores pueblos de las Rías Baixas en la provincia de Pontevedra, donde podrás disfrutar de la belleza del litoral gallego y la hospitalidad de sus habitantes.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb733efab228a11f8089",
    "nombre": "Visita a las Islas Cíes",
    "img": "https://i.postimg.cc/zfNqHhB7/Visita-a-las-Islas-C-es.jpg",
    "descripcion": "Descubre la belleza natural de las Islas Cíes en la provincia de Pontevedra, un archipiélago paradisíaco declarado Parque Nacional Marítimo-Terrestre, donde podrás disfrutar de playas de arena blanca y aguas cristalinas.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb7f3efab228a11f808b",
    "nombre": "Visita a las Pozas de Melón",
    "img": "https://i.postimg.cc/tJsbGtSq/Visita-a-las-Pozas-de-Mel-n.jpg",
    "descripcion": "Descubre las Pozas de Melón en la provincia de Pontevedra, un conjunto de pozas y cascadas naturales situadas en un entorno boscoso, perfecto para refrescarse en verano y disfrutar de la naturaleza.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb8f3efab228a11f808d",
    "nombre": "Catedral de Ourense",
    "img": "https://i.postimg.cc/TwmSV74W/Catedral-de-Ourense.jpg",
    "descripcion": "Visita la majestuosa Catedral de Ourense, una obra maestra del arte románico con una impresionante fachada y un claustro medieval, ubicada en el corazón del casco antiguo.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb973efab228a11f808f",
    "nombre": "Puente Romano",
    "img": "https://i.postimg.cc/CLJ2sfmJ/Puente-Romano.jpg",
    "descripcion": "Contempla el Puente Romano de Ourense, un antiguo puente de piedra sobre el río Miño, que data de la época romana y es uno de los símbolos más emblemáticos de la ciudad.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfba93efab228a11f8091",
    "nombre": "Termas de Outariz",
    "img": "https://i.postimg.cc/wxXZ3rNC/Termas-de-Outariz-de-Ourense.jpg",
    "descripcion": "Relájate en las Termas de Outariz, unas modernas instalaciones termales con piscinas de agua caliente y fría, circuitos terapéuticos y zonas ajardinadas, perfectas para descansar y rejuvenecer.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfbdd3efab228a11f8093",
    "nombre": "Plaza Mayor",
    "img": "https://i.postimg.cc/3NTqnXsf/Plaza-Mayor-de-Ourense.jp",
    "descripcion": "Disfruta del ambiente animado en la Plaza Mayor de Ourense, un lugar popular entre lugareños y visitantes, rodeado de bares, restaurantes y tiendas, ideal para tomar algo o simplemente pasear.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfbea3efab228a11f8095",
    "nombre": "Ruta de Senderismo por la Ribeira Sacra",
    "img": "https://i.postimg.cc/ZqX2ytVS/Ruta-de-Senderismo-por-la-Ribeira-Sacra.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por la Ribeira Sacra, una impresionante zona natural en la provincia de Ourense, donde podrás descubrir cañones, ríos y monasterios centenarios.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfc013efab228a11f8097",
    "nombre": "Visita a los Cañones del Sil",
    "img": "https://i.postimg.cc/Gtx5NBrL/Visita-a-los-Ca-ones-del-Sil.jpg",
    "descripcion": "Descubre la belleza natural de los Cañones del Sil en la provincia de Ourense, donde podrás realizar paseos en barco y disfrutar de impresionantes vistas de los acantilados y viñedos.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfc153efab228a11f8099",
    "nombre": "Ruta en Bicicleta por la Vía Verde del Río Arnoia",
    "img": "https://i.postimg.cc/2S6Kc8tY/Ruta-en-Bicicleta-por-la-V-a-Verde-del-R-o-Arnoia.jpg",
    "descripcion": "Pedalea por la Vía Verde del Río Arnoia en una emocionante ruta en bicicleta, disfrutando de paisajes naturales, puentes históricos y antiguas estaciones de tren convertidas en áreas recreativas.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfde13efab228a11f80a3",
    "nombre": "Murallas Romanas de Lugo",
    "img": "https://i.postimg.cc/cC7Lbcrv/Murallas-Romanas-de-Lugo.jpg",
    "descripcion": "Explora las famosas murallas romanas de Lugo, declaradas Patrimonio de la Humanidad por la UNESCO. Estas impresionantes fortificaciones datan del siglo III y son uno de los mejores ejemplos de arquitectura militar romana que se conservan en el mundo.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfdea3efab228a11f80a5",
    "nombre": "Catedral de Lugo",
    "img": "https://i.postimg.cc/9fzzQTNk/Catedral-de-Lugo.jpg",
    "descripcion": "Visita la majestuosa Catedral de Lugo, un magnífico ejemplo de arquitectura románica situado en el corazón de la ciudad. Construida en el siglo XII, esta impresionante obra cuenta con una fachada única y un impresionante retablo mayor.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfdf13efab228a11f80a7",
    "nombre": "Plaza Mayor de Lugo",
    "img": "https://i.postimg.cc/prMdCSXN/Plaza-Mayor-de-Lugo.jpg",
    "descripcion": "Disfruta del encanto de la Plaza Mayor de Lugo, un lugar animado rodeado de edificios históricos y pintorescos cafés. Es el corazón social y cultural de la ciudad, perfecto para relajarse y disfrutar del ambiente.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfdfd3efab228a11f80a9",
    "nombre": "Ruta de Senderismo por los Ancares",
    "img": "https://i.postimg.cc/hGwvzjkt/Ruta-de-Senderismo-por-los-Ancares.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por la impresionante Sierra de los Ancares, una de las zonas más vírgenes y hermosas de Galicia. Descubre paisajes espectaculares, pueblos pintorescos y una rica biodiversidad.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe0f3efab228a11f80ab",
    "nombre": "Visita a los Pueblos de la Mariña Lucense",
    "img": "https://i.postimg.cc/MTQTywwb/Visita-a-los-Pueblos-de-la-Mari-a-Lucense.jpg",
    "descripcion": "Explora los encantadores pueblos de la Mariña Lucense, situados en la costa norte de Lugo. Disfruta de playas vírgenes, acantilados impresionantes y la auténtica gastronomía gallega en un entorno natural único.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe193efab228a11f80ad",
    "nombre": "Turismo Rural en las Tierras de Lemos",
    "img": "https://i.postimg.cc/bwmsPLLb/Turismo-Rural-en-las-Tierras-de-Lemos.jpg",
    "descripcion": "Sumérgete en la tranquilidad del campo gallego alojándote en una casa rural en las Tierras de Lemos, en la provincia de Lugo. Disfruta de la naturaleza, la historia y la gastronomía local en un entorno rural auténtico.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe313efab228a11f80af",
    "nombre": "Catedral de Oviedo",
    "img": "https://i.postimg.cc/pLQ1LG60/Catedral-de-Oviedo.jpg",
    "descripcion": "Visita la imponente Catedral de Oviedo, una obra maestra del arte gótico y uno de los principales símbolos de la ciudad, con su impresionante arquitectura y su rica historia.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe3b3efab228a11f80b1",
    "nombre": "Parque de San Francisco",
    "img": "https://i.postimg.cc/xqDt0MyD/Parque-de-San-Francisco.jpg",
    "descripcion": "Pasea por el hermoso Parque de San Francisco, un oasis verde en el centro de Oviedo, donde podrás disfrutar de hermosos jardines, fuentes y esculturas, así como de un ambiente tranquilo y relajante.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe473efab228a11f80b3",
    "nombre": "Plaza de la Escandalera",
    "img": "https://i.postimg.cc/jjs3w6VR/Plaza-de-la-Escandalera.jpg",
    "descripcion": "Visita la animada Plaza de la Escandalera, uno de los lugares más emblemáticos de Oviedo, rodeada de edificios históricos, tiendas, cafeterías y terrazas, perfecta para pasear y disfrutar del ambiente.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe603efab228a11f80b5",
    "nombre": "Casco Antiguo de Gijón",
    "img": "https://i.postimg.cc/Z5zMZtVB/Casco-Antiguo-de-Gij-n.jpg",
    "descripcion": "Recorre el encantador Casco Antiguo de Gijón, con sus estrechas calles empedradas, plazas pintorescas y edificios históricos, donde podrás descubrir la historia y la cultura de la ciudad.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe693efab228a11f80b7",
    "nombre": "Playa de San Lorenzo",
    "img": "https://i.postimg.cc/tTcBMLsg/Playa-de-San-Lorenzo.jpg",
    "descripcion": "Relájate en la hermosa Playa de San Lorenzo, una extensa playa de arena dorada en Gijón, ideal para tomar el sol, nadar en aguas tranquilas o pasear por el paseo marítimo.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe763efab228a11f80b9",
    "nombre": "Parque Nacional de los Picos de Europa",
    "img": "https://i.postimg.cc/7LmsgCD0/Parque-Nacional-de-los-Picos-de-Europa.jpg",
    "descripcion": "Explora el impresionante Parque Nacional de los Picos de Europa, un paraíso natural de montañas, valles, bosques y ríos, donde podrás practicar senderismo, escalada, espeleología y otras actividades al aire libre.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe7f3efab228a11f80bb",
    "nombre": "Ruta del Cares",
    "img": "https://i.postimg.cc/fWtsRsjB/Ruta-del-Cares-Gijon.jpg",
    "descripcion": "Embárcate en la emocionante Ruta del Cares, una espectacular caminata de montaña que recorre el desfiladero del río Cares, ofreciendo impresionantes vistas panorámicas y una experiencia inolvidable en plena naturaleza.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe893efab228a11f80bd",
    "nombre": "Lagos de Covadonga",
    "img": "https://i.postimg.cc/qqC1VjKx/Lagos-de-Covadonga.jpg",
    "descripcion": "Visita los mágicos Lagos de Covadonga, un conjunto de lagos glaciares en los Picos de Europa, rodeados de impresionantes paisajes montañosos y accesibles a través de rutas de senderismo y carreteras panorámicas.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe923efab228a11f80bf",
    "nombre": "Senda del Oso",
    "img": "https://i.postimg.cc/Df9TWNxF/Senda-del-Oso.jpg",
    "descripcion": "Recorre la encantadora Senda del Oso, una ruta de senderismo y ciclismo que sigue el antiguo trazado de un ferrocarril minero en desuso, ofreciendo paisajes espectaculares, túneles excavados en la roca y puentes colgantes.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe9b3efab228a11f80c1",
    "nombre": "Reserva Natural de Somiedo",
    "img": "https://i.postimg.cc/0QjtZ823/Reserva-Natural-de-Somiedo.jpg",
    "descripcion": "Descubre la belleza salvaje de la Reserva Natural de Somiedo, un paraíso natural de montañas, valles y lagos en los Picos de Europa, donde podrás observar una gran variedad de flora y fauna, incluyendo osos pardos.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfeb93efab228a11f80c5",
    "nombre": "Centro Histórico de Santander",
    "img": "https://i.postimg.cc/WpBBpfnZ/Centro-Hist-rico-de-Santander.jpg",
    "descripcion": "Recorre el encantador Centro Histórico de Santander, con sus estrechas calles empedradas, plazas pintorescas y edificios históricos, donde podrás disfrutar de la arquitectura y la cultura de la ciudad.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfec13efab228a11f80c7",
    "nombre": "Palacio de la Magdalena",
    "img": "https://i.postimg.cc/BnsRHLRQ/Palacio-de-la-Magdalena.jpg",
    "descripcion": "Visita el majestuoso Palacio de la Magdalena, un edificio de estilo inglés situado en una península frente al mar en Santander, que alberga exposiciones, eventos y hermosos jardines.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfece3efab228a11f80c9",
    "nombre": "Playa del Sardinero",
    "img": "https://i.postimg.cc/Twysfr5Q/Playa-del-Sardinero.jpg",
    "descripcion": "Relájate en la famosa Playa del Sardinero, una extensa playa de arena dorada en Santander, que cuenta con servicios excelentes, aguas tranquilas y un paseo marítimo animado.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfedc3efab228a11f80cb",
    "nombre": "Museo de Prehistoria y Arqueología de Cantabria",
    "img": "https://i.postimg.cc/mrgq6xbv/Museo-de-Prehistoria-y-Arqueolog-a-de-Cantabria.jpg",
    "descripcion": "Explora el Museo de Prehistoria y Arqueología de Cantabria, que alberga una importante colección de arte rupestre y objetos arqueológicos, así como exposiciones temporales sobre la historia de la región.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfef13efab228a11f80cd",
    "nombre": "Teatro Principal de Reinosa",
    "img": "https://i.postimg.cc/hvT37crd/Teatro-Principal-de-Reinosa.jpg",
    "descripcion": "Disfruta de una obra de teatro o concierto en el Teatro Principal de Reinosa, un hermoso edificio histórico en el corazón de la ciudad, que ofrece una programación variada durante todo el año.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cff013efab228a11f80cf",
    "nombre": "Mirador del Faro de Cabo Mayor",
    "img": "https://i.postimg.cc/Pr1BCz3R/Mirador-del-Faro-de-Cabo-Mayor.jpg",
    "descripcion": "Contempla las impresionantes vistas panorámicas desde el Mirador del Faro de Cabo Mayor, que ofrece una perspectiva única de la costa cantábrica y el mar, así como del paisaje natural circundante.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d007c3efab228a11f80da",
    "nombre": "Parque Natural de los Collados del Asón",
    "img": "https://i.postimg.cc/cJkzpDCr/Parque-Natural-de-los-Collados-del-As-n.jpg",
    "descripcion": "Descubre la belleza del Parque Natural de los Collados del Asón, donde encontrarás impresionantes paisajes de montañas, valles y ríos. Disfruta de actividades al aire libre como senderismo, observación de aves y picnic.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d00883efab228a11f80dc",
    "nombre": "Cueva del Soplao",
    "img": "https://i.postimg.cc/tJx8thX7/Cueva-del-Soplao.jpg",
    "descripcion": "Explora la fascinante Cueva del Soplao, una maravilla geológica con formaciones de estalactitas y estalagmitas únicas. Realiza un recorrido guiado por las galerías subterráneas y maravíllate con su belleza natural.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d009a3efab228a11f80de",
    "nombre": "Valle del Nansa",
    "img": "https://i.postimg.cc/HxfhxVQm/Valle-del-Nansa.jpg",
    "descripcion": "Recorre el pintoresco Valle del Nansa, un lugar de gran belleza natural con bosques frondosos, ríos cristalinos y encantadores pueblos. Disfruta de actividades como el senderismo, la observación de aves y la fotografía.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d00ba3efab228a11f80e0",
    "nombre": "Mirador del Fitu",
    "img": "https://i.postimg.cc/L4gdpMzR/Mirador-del-Fitu.jpg",
    "descripcion": "Contempla las impresionantes vistas panorámicas desde el Mirador del Fitu, situado en lo alto de una colina en la Sierra del Sueve. Disfruta de una vista panorámica de la costa asturiana y las montañas de los Picos de Europa.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01583efab228a11f80e2",
    "nombre": "Cuevas de Altamira",
    "img": "https://i.postimg.cc/XY8m8N0K/Cuevas-de-Altamira.jpg",
    "descripcion": "Explora las famosas Cuevas de Altamira, conocidas por sus increíbles pinturas rupestres prehistóricas, que datan de hace aproximadamente 20,000 años. Este sitio arqueológico es uno de los más importantes del mundo y ha sido declarado Patrimonio de la Humanidad por la UNESCO. Disfruta de una experiencia única al adentrarte en la cueva y contemplar las fascinantes representaciones de animales y formas geométricas que han sobrevivido a través de los siglos.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d016a3efab228a11f80e4",
    "nombre": "Museo Guggenheim Bilbao",
    "img": "https://i.postimg.cc/ZRs6hymT/Museo-Guggenheim-Bilbao.jpg",
    "descripcion": "Visita el icónico Museo Guggenheim Bilbao, diseñado por Frank Gehry, que alberga una impresionante colección de arte contemporáneo y ofrece exposiciones temporales de renombrados artistas.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01723efab228a11f80e6",
    "nombre": "Casco Viejo de Bilbao",
    "img": "https://i.postimg.cc/Tw3nSJZ7/Casco-Viejo-de-Bilbao.jpg",
    "descripcion": "Recorre el pintoresco Casco Viejo de Bilbao, con sus estrechas calles medievales, plazas animadas, tiendas tradicionales y bares de pintxos, que reflejan la historia y la cultura de la ciudad.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01a63efab228a11f80e8",
    "nombre": "Museo Marítimo Ría de Bilbao",
    "img": "https://i.postimg.cc/44MpLtwP/Museo-Mar-timo-R-a-de-Bilbao.jpg",
    "descripcion": "Explora la historia marítima de la región en el Museo Marítimo Ría de Bilbao, ubicado en un antiguo astillero, que exhibe barcos, maquetas, herramientas y documentos relacionados con la navegación.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01c83efab228a11f80ea",
    "nombre": "Parque Doña Casilda Iturrizar",
    "img": "https://i.postimg.cc/qq9nNVgS/Parque-Do-a-Casilda-Iturrizar.jpg",
    "descripcion": "Disfruta de un tranquilo paseo por el Parque Doña Casilda Iturrizar, un hermoso espacio verde en el centro de Bilbao, con jardines, estanques, esculturas y áreas de recreo para toda la familia.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01d63efab228a11f80ec",
    "nombre": "Reserva de la Biosfera de Urdaibai",
    "img": "https://i.postimg.cc/4xRVZgDh/Reserva-de-la-Biosfera-de-Urdaibai.jpg",
    "descripcion": "Explora la Reserva de la Biosfera de Urdaibai, un paraíso natural en la costa de Bizkaia, con playas vírgenes, acantilados impresionantes, marismas, bosques y una gran diversidad de fauna y flora.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01df3efab228a11f80ee",
    "nombre": "Cascada de Gujuli",
    "img": "https://i.postimg.cc/hGr9p53Q/Cascada-de-Gujuli.jpg",
    "descripcion": "Descubre la espectacular Cascada de Gujuli, situada en plena naturaleza en el valle de Oma, donde el río Oiardo se precipita en una impresionante caída de agua rodeada de exuberante vegetación.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01e83efab228a11f80f0",
    "nombre": "Parque Natural de Gorbeia",
    "img": "https://i.postimg.cc/xTzMWC42/Parque-Natural-de-Gorbeia.jpg",
    "descripcion": "Embárcate en una aventura en el Parque Natural de Gorbeia, un vasto territorio montañoso que ofrece innumerables rutas de senderismo, cascadas, lagos y vistas panorámicas espectaculares.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01f73efab228a11f80f2",
    "nombre": "Cueva de Pozalagua",
    "img": "https://i.postimg.cc/WzDgpbp0/Cueva-de-Pozalagua.jpg",
    "descripcion": "Explora la impresionante Cueva de Pozalagua, una cueva cálcica situada en el valle de Carranza, donde podrás admirar estalactitas y estalagmitas únicas en un entorno subterráneo fascinante.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d02133efab228a11f80f6",
    "nombre": "Bosque de Oma",
    "img": "https://i.postimg.cc/6QwrVXzN/Bosque-de-Oma.jpg",
    "descripcion": "Admira las pinturas rupestres modernas en el Bosque de Oma, una obra de arte natural creada por el escultor y pintor Agustín Ibarrola, que ha decorado los troncos de los árboles con formas y colores vibrantes.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Playa de la Concha",
    "descripcion": "Disfruta de un día de sol en la famosa Playa de la Concha en San Sebastián, una de las playas urbanas más bonitas del mundo, con suave arena dorada, aguas cristalinas y vistas impresionantes.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/YCyJsdG0/Playa-de-la-Concha.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Parte Vieja de San Sebastián",
    "descripcion": "Explora el encantador casco antiguo de San Sebastián, conocido como la Parte Vieja, con sus estrechas calles empedradas, plazas animadas, bares de pintxos y edificios históricos.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/N03ZgLxw/Parte-Vieja-de-San-Sebasti-n.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Monte Urgull",
    "descripcion": "Sube al Monte Urgull para disfrutar de unas vistas panorámicas impresionantes de San Sebastián y su bahía, así como para explorar ruinas históricas, fortificaciones y senderos naturales.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/9F13GmcG/Monte-Urgull.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Museo San Telmo",
    "descripcion": "Visita el Museo San Telmo, ubicado en un antiguo convento, que alberga una importante colección de arte vasco e internacional, así como exposiciones temporales sobre arte, historia y cultura.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/j2K9799g/Museo-San-Telmo.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Parque Natural de Pagoeta",
    "descripcion": "Embárcate en una aventura en el Parque Natural de Pagoeta, un paraíso natural de montañas, bosques, arroyos y cascadas, donde podrás practicar senderismo, observar la flora y la fauna, y disfrutar de la tranquilidad del entorno.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/W4FQL0gn/Parque-Natural-de-Pagoeta.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Cascada de Xorroxin",
    "descripcion": "Descubre la impresionante Cascada de Xorroxin, situada en el corazón del Valle del Baztán, donde el río Larraun se precipita en una espectacular caída de agua rodeada de exuberante vegetación.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/XNctbjGT/Cascada-de-Xorroxin.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Acantilados de Zumaia",
    "descripcion": "Contempla los impresionantes Acantilados de Zumaia, formados por estratos geológicos de millones de años de antigüedad, que ofrecen unas vistas panorámicas espectaculares y son un paraíso para los amantes de la naturaleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/RZ0kdk02/Sendero-del-Flysch-de-Zumaia.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Parque Natural Aiako Harria",
    "descripcion": "Explora el Parque Natural Aiako Harria, un área protegida de montañas rocosas y bosques de robles y hayas, que ofrece numerosas rutas de senderismo y bicicleta de montaña, así como oportunidades para observar la flora y la fauna.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/J0qFcxC1/Parque-Natural-Aiako-Harria.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Catedral de Santa María de Vitoria",
    "descripcion": "Visita la impresionante Catedral de Santa María de Vitoria, un magnífico ejemplo de arquitectura gótica, que alberga obras de arte religioso, sepulcros y un claustro medieval.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/sfMqMkX2/Catedral-de-Santa-Mar-a-de-Vitoria.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Plaza de la Virgen Blanca de Victoria-Gasteiz",
    "descripcion": "Disfruta del ambiente animado de la Plaza de la Virgen Blanca en Vitoria-Gasteiz, un lugar emblemático de la ciudad donde se celebran eventos culturales, festivales y mercados tradicionales.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/sfb87TQ4/Casco-Viejo-de-Vitoria-Gasteiz.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Museo de Bellas Artes de Álava",
    "descripcion": "Explora la colección de arte vasco y universal en el Museo de Bellas Artes de Álava, que cuenta con obras de artistas destacados como El Greco, Goya, Sorolla y Chillida, entre otros.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Y9sNcyKn/Museo-de-Bellas-Artes-de-lava.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Palacio de Montehermoso",
    "descripcion": "Visita el Palacio de Montehermoso, un impresionante edificio renacentista en el centro de Vitoria-Gasteiz, que alberga exposiciones de arte contemporáneo, conciertos y eventos culturales.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/YS2yMVZM/Palacio-de-Montehermoso.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Jardín Botánico de Santa Catalina",
    "descripcion": "Relájate y disfruta de la naturaleza en el Jardín Botánico de Santa Catalina, un oasis verde en el corazón de Vitoria-Gasteiz, que alberga una gran variedad de plantas autóctonas y exóticas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/L83bdRyx/Jard-n-Bot-nico-de-Santa-Catalina.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Sierra de Entzia",
    "descripcion": "Explora la Sierra de Entzia, un impresionante macizo montañoso en el sureste de Álava, que ofrece numerosas rutas de senderismo, vistas panorámicas espectaculares y oportunidades para la observación de aves.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Bn0VwtC8/Sierra-de-Entzia.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Salto del Nervión",
    "descripcion": "Contempla el espectacular Salto del Nervión, una impresionante cascada situada en el Parque Natural de Gorbeia, que se precipita desde una altura de más de 200 metros en un entorno natural de gran belleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/C5nGwHwF/Salto-del-Nervi-n.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Rioja Alavesa",
    "descripcion": "Descubre la región vinícola de Rioja Alavesa, famosa por sus viñedos, bodegas y vinos de alta calidad, donde podrás realizar visitas guiadas, degustaciones y actividades relacionadas con el enoturismo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/FKPCRpXc/Rioja-Alavesa.jpg",
    "comunidad": "País Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Valle Salado de Añana",
    "descripcion": "Visita el Valle Salado de Añana, una joya de la arquitectura tradicional y la ingeniería hidráulica, donde se produce la sal de forma artesanal desde hace más de 1.000 años, en un paisaje cultural único.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/m2Mnw77f/Valle-Salado-de-A-ana.jpg",
    "comunidad": "País Vasco"
  },
  {
    "_id": "661d0b4f3efab228a11f80fb",
    "nombre": "Catedral de Santa María de la Redonda",
    "img": "https://i.postimg.cc/2jTdfymb/Catedral-de-Santa-Mar-a-de-la-Redonda.jpg",
    "descripcion": "Visita la imponente Catedral de Santa María de la Redonda en Logroño, una obra maestra de la arquitectura religiosa con elementos góticos y barrocos. Descubre su interior ricamente decorado y su hermosa fachada.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0b623efab228a11f80fd",
    "nombre": "Bodegas Franco-Españolas",
    "img": "https://i.postimg.cc/XNgL7xKv/Bodegas-Franco-Espa-olas.jpg",
    "descripcion": "Haz un recorrido por las Bodegas Franco-Españolas en Logroño y descubre la historia y tradición vinícola de La Rioja. Disfruta de catas de vino y conoce el proceso de elaboración en esta bodega centenaria.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0b6c3efab228a11f80ff",
    "nombre": "Muralla del Revellín",
    "img": "https://i.postimg.cc/htX1sBkJ/Muralla-del-Revell-n.jpg",
    "descripcion": "Recorre la Muralla del Revellín en Logroño, una antigua fortificación que rodeaba la ciudad y que hoy en día es un lugar emblemático para pasear y disfrutar de las vistas panorámicas de la ciudad.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0b833efab228a11f8101",
    "nombre": "Iglesia de San Bartolomé",
    "img": "https://i.postimg.cc/gJWyG6nR/Iglesia-de-San-Bartolom.jpg",
    "descripcion": "Visita la Iglesia de San Bartolomé en Logroño, un hermoso templo barroco del siglo XVIII. Admira su impresionante fachada y su interior decorado con obras de arte religioso.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0ba23efab228a11f8105",
    "nombre": "Sierra de Cebollera",
    "img": "https://i.postimg.cc/bvbHXRNp/Sierra-de-Cebollera.jpg",
    "descripcion": "Embárcate en una aventura al aire libre en la Sierra de Cebollera, un parque natural con paisajes impresionantes, bosques frondosos y senderos para practicar senderismo y observar la fauna y flora.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bad3efab228a11f8107",
    "nombre": "Ruta del Vino",
    "img": "https://i.postimg.cc/Vv7X9G4B/Ruta-del-Vino.jpg",
    "descripcion": "Explora la Ruta del Vino de La Rioja y descubre los viñedos y bodegas de la región. Disfruta de catas de vino, visita a bodegas históricas y descubre el proceso de elaboración del vino.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bbd3efab228a11f8109",
    "nombre": "Valle del Oja",
    "img": "https://i.postimg.cc/WzpMkLm1/Valle-del-Oja.jpg",
    "descripcion": "Descubre la belleza natural del Valle del Oja, un valle pintoresco en La Rioja rodeado de montañas y viñedos. Disfruta de actividades al aire libre como senderismo, ciclismo y observación de aves.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bc73efab228a11f810b",
    "nombre": "Monasterio de Yuso",
    "img": "https://i.postimg.cc/sX4YxDhL/Monasterio-de-Yuso.jpg",
    "descripcion": "Visita el Monasterio de Yuso en San Millán de la Cogolla, un sitio declarado Patrimonio de la Humanidad por la UNESCO. Descubre su historia, arquitectura y la importancia cultural de este lugar.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bd23efab228a11f810d",
    "nombre": "Cascada de Puente Ra",
    "img": "https://i.postimg.cc/kgLFhHCT/Cascada-de-Puente-Ra.jpg",
    "descripcion": "Visita la impresionante Cascada de Puente Ra en Ezcaray, una espectacular caída de agua en medio de un paisaje montañoso. Disfruta de la naturaleza y la tranquilidad de este entorno.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Catedral de Santa María de Pamplona",
    "descripcion": "Visita la majestuosa Catedral de Santa María de Pamplona, un impresionante ejemplo de arquitectura gótica y uno de los monumentos más emblemáticos de la ciudad. Descubre su historia y admira su hermoso interior.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/tTvhWvBd/Catedral-de-Santa-Mar-a-de-Pamplona.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Ciudadela de Pamplona",
    "descripcion": "Explora la Ciudadela de Pamplona, una fortaleza renacentista del siglo XVI que ofrece un vistazo a la historia militar de la región. Disfruta de un paseo por sus murallas y sus jardines bien cuidados.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/CLB4HYTR/Ciudadela-de-Pamplona.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Plaza del Castillo",
    "descripcion": "Disfruta del ambiente animado en la Plaza del Castillo, el corazón de Pamplona. Rodeada de edificios históricos y terrazas, es el lugar perfecto para relajarse, tomar algo y disfrutar de la vida local.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/vZ5LkzmM/Plaza-del-Castillo.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Museo de Navarra",
    "descripcion": "Sumérgete en la historia y la cultura de Navarra visitando el Museo de Navarra en Pamplona. Descubre una impresionante colección de arte, arqueología y artefactos históricos que abarcan desde la prehistoria hasta la actualidad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Y0VzKDg2/Museo-de-Navarra.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Palacio de Navarra",
    "descripcion": "Admira la belleza del Palacio de Navarra en Pamplona, la sede del Gobierno de Navarra. Descubre su arquitectura neoclásica y explora sus jardines y patios interiores.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/6QwLXv7Z/Palacio-de-Navarra.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Parque de la Taconera",
    "descripcion": "Disfruta de un paseo tranquilo por el Parque de la Taconera en Pamplona, un hermoso jardín con fuentes, estanques y una gran variedad de flora. Es el lugar ideal para relajarse y disfrutar de la naturaleza en la ciudad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/G2LQkydR/Parque-de-la-Taconera.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Camino de Santiago en Navarra",
    "descripcion": "Embárcate en una aventura espiritual y cultural caminando por el Camino de Santiago a su paso por Navarra. Descubre paisajes impresionantes, pueblos pintorescos y la hospitalidad de los peregrinos.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/zDPjgvMm/Camino-de-Santiago-en-Navarra.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Selva de Irati",
    "descripcion": "Explora la impresionante Selva de Irati, uno de los bosques más grandes y mejor conservados de Europa. Disfruta de actividades al aire libre como senderismo, observación de aves y picnics en medio de un entorno natural único.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/8CHdPzW0/Selva-de-Irati.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Bardenas Reales",
    "descripcion": "Descubre el paisaje único de las Bardenas Reales, un paraje semidesértico con formaciones rocosas y barrancos espectaculares. Explora en coche, bicicleta o a pie y disfruta de las vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/C1c4Jxxq/Bardenas-Reales.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Sierras de Urbasa y Andía",
    "descripcion": "Embárcate en una aventura al aire libre en las Sierras de Urbasa y Andía, un parque natural con paisajes montañosos, bosques frondosos y cascadas impresionantes. Disfruta de actividades como senderismo, ciclismo y observación de la naturaleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/G2mFBnxh/Sierras-de-Urbasa-y-And-a.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Nacedero del Urederra",
    "descripcion": "Descubre la belleza del Nacedero del Urederra, un impresionante paraje natural con aguas cristalinas y cascadas en medio de un entorno boscoso. Disfruta de senderos bien señalizados y vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/0jr041zH/Nacedero-del-Urederra.jpg",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Ruta del Vino de Navarra",
    "descripcion": "Embárcate en un viaje enológico por la Ruta del Vino de Navarra y descubre los viñedos y bodegas de la región. Disfruta de catas de vino, visitas guiadas y degustaciones en un entorno único.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/jdp4M9tZ/Ruta-del-Vino-de-Navarra.jpg",
    "comunidad": "Navarra"
  },
  {
    "_id": "661d0c803efab228a11f8121",
    "nombre": "Catedral de Huesca",
    "img": "https://i.postimg.cc/zvfbgyXy/Catedral-de-Huesca.jpg",
    "descripcion": "Visita la impresionante Catedral de Huesca, un magnífico ejemplo de arquitectura gótica y renacentista. Admira su fachada decorada y explora su interior, donde encontrarás obras de arte religioso.",
    "provincia": "661cd1b7cab02767690bce93",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0c8a3efab228a11f8123",
    "nombre": "Castillo de Loarre",
    "img": "https://i.postimg.cc/854fcRD8/Castillo-de-Loarre.jpg",
    "descripcion": "Descubre el impresionante Castillo de Loarre, una fortaleza medieval ubicada en lo alto de una colina con vistas panorámicas del paisaje aragonés. Explora sus murallas, torres y salas y sumérgete en la historia.",
    "provincia": "661cd1b7cab02767690bce93",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0ca63efab228a11f8125",
    "nombre": "Iglesia de San Pedro el Viejo",
    "img": "https://i.postimg.cc/mZdFGy8C/Iglesia-de-San-Pedro-el-Viejo.jpg",
    "descripcion": "Visita la Iglesia de San Pedro el Viejo en Huesca, un templo románico del siglo XII con una impresionante torre mudéjar. Admira su arquitectura histórica y explora su interior ricamente decorado.",
    "provincia": "661cd1b7cab02767690bce93",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0cb23efab228a11f8127",
    "nombre": "Parque Nacional de Ordesa y Monte Perdido",
    "img": "https://i.postimg.cc/j2kWQRLZ/Parque-Nacional-de-Ordesa-y-Monte-Perdido.jpg",
    "descripcion": "Embárcate en una aventura al aire libre en el Parque Nacional de Ordesa y Monte Perdido, un paraíso natural de montañas, valles y cascadas. Disfruta de senderismo, escalada y observación de la fauna y flora.",
    "provincia": "661cd1b7cab02767690bce93",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0cbe3efab228a11f8129",
    "nombre": "Valle de Benasque",
    "img": "https://i.postimg.cc/TYp5254S/Valle-de-Benasque.jpg",
    "descripcion": "Descubre la belleza del Valle de Benasque, un valle glaciar en el corazón de los Pirineos. Disfruta de actividades al aire libre como senderismo, esquí, montañismo y observación de la naturaleza.",
    "provincia": "661cd1b7cab02767690bce93",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0cd13efab228a11f812b",
    "nombre": "https://i.postimg.cc/63tGBHkL/Alqu-zar.jpg",
    "img": "Mc3GDYKv",
    "descripcion": "Explora el encantador pueblo medieval de Alquézar, ubicado en un acantilado sobre el río Vero. Recorre sus estrechas calles empedradas, visita su impresionante colegiata y disfruta de las vistas panorámicas.",
    "provincia": "661cd1b7cab02767690bce93",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0cdf3efab228a11f812d",
    "nombre": "Basílica del Pilar",
    "img": "https://i.postimg.cc/PxyKHvRJ/Bas-lica-del-Pilar.jpg",
    "descripcion": "Visita la icónica Basílica del Pilar, un importante lugar de culto y uno de los símbolos más emblemáticos de Zaragoza. Admira su arquitectura barroca y sus impresionantes frescos.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0ce73efab228a11f812f",
    "nombre": "Palacio de la Aljafería",
    "img": "https://i.postimg.cc/MG8YjYkX/Palacio-de-la-Aljafer-a.jpg",
    "descripcion": "Explora el impresionante Palacio de la Aljafería, un magnífico ejemplo de arquitectura islámica en España. Descubre su historia y sus hermosos patios y salones.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0d133efab228a11f8131",
    "nombre": "Puente de Piedra",
    "img": "https://i.postimg.cc/KYrD7gFf/Valle-de-Hecho.jpg",
    "descripcion": "Contempla el Puente de Piedra, un símbolo histórico de Zaragoza que cruza el río Ebro. Disfruta de las vistas del río y de la ciudad desde este emblemático puente.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "nombre": "Museo Pablo Gargallo",
    "img": "https://i.postimg.cc/gJm41H41/Museo-Pablo-Gargallo.jpg",
    "descripcion": "Sumérgete en el mundo del escultor Pablo Gargallo en este museo dedicado a su obra. Descubre sus innovadoras técnicas y su impacto en el arte moderno.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "ciudad"
  },
  {
    "nombre": "Parque Grande José Antonio Labordeta",
    "img": "https://i.postimg.cc/4xc5dSSr/Parque-Grande-Jos-Antonio-Labordeta.jpg",
    "descripcion": "Relájate en este extenso parque urbano, nombrado en honor al cantautor José Antonio Labordeta. Disfruta de sus áreas verdes, lagos y senderos para pasear.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "ciudad"
  },
  {
    "nombre": "Monasterio de Piedra",
    "img": "https://i.postimg.cc/QCnb9Gsr/Monasterio-de-Piedra.jpg",
    "descripcion": "Embárcate en una escapada tranquila al Monasterio de Piedra, un remanso de paz en medio de la naturaleza. Explora sus jardines, cascadas y antiguas edificaciones monásticas.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "nombre": "Parque Natural del Moncayo",
    "img": "https://i.postimg.cc/RVydvBX7/Parque-Natural-del-Moncayo.jpg",
    "descripcion": "Descubre la belleza natural del Parque Natural del Moncayo, hogar de la montaña más alta del Sistema Ibérico. Disfruta de sus senderos para caminatas y observa la diversa flora y fauna.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "nombre": "Parque Natural de los Cañones y Sierra de Guara",
    "img": "https://i.postimg.cc/J4GKwnc7/Parque-Natural-de-los-Ca-ones-y-Sierra-de-Guara.jpg",
    "descripcion": "Sumérgete en la naturaleza virgen del Parque Natural de los Cañones y Sierra de Guara. Embárcate en emocionantes actividades al aire libre como senderismo, escalada y barranquismo.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "nombre": "Valle de Hecho",
    "img": "https://i.postimg.cc/KYrD7gFf/Valle-de-Hecho.jpg",
    "descripcion": "Descubre la belleza natural del Valle de Hecho, un paraíso para los amantes del senderismo y la observación de aves. Explora sus valles, bosques y picos montañosos.",
    "provincia": "661cd1bdcab02767690bce95",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0d273efab228a11f8133",
    "nombre": "Catedral de Teruel",
    "img": "https://i.postimg.cc/W4KLc3hM/Catedral-de-Teruel.jpg",
    "descripcion": "Visita la hermosa Catedral de Teruel, un magnífico ejemplo de arquitectura mudéjar. Admira su torre mudéjar y explora su interior, donde encontrarás obras de arte religioso.",
    "provincia": "661cd1c6cab02767690bce97",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0d403efab228a11f8137",
    "nombre": "Mausoleo de los Amantes de Teruel",
    "img": "https://i.postimg.cc/PxwGXjw0/Mausoleo-de-los-Amantes-de-Teruel.jpg",
    "descripcion": "Visita el Mausoleo de los Amantes de Teruel, dedicado a la historia de amor de Diego e Isabel. Descubre la leyenda y admira la escultura que representa a los amantes.",
    "provincia": "661cd1c6cab02767690bce97",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0d5a3efab228a11f8139",
    "nombre": "Acueducto de los Arcos",
    "img": "https://i.postimg.cc/MH7hBmtD/Acueducto-de-los-Arcos.jpg",
    "descripcion": "Contempla el impresionante Acueducto de los Arcos, una obra de ingeniería hidráulica construida en el siglo XVI para abastecer de agua a Teruel. Disfruta de su arquitectura histórica.",
    "provincia": "661cd1c6cab02767690bce97",
    "comunidad": "Aragón",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0d683efab228a11f813b",
    "nombre": "Albarracín",
    "img": "https://i.postimg.cc/nLN5wPP2/Albarrac-n.jpg",
    "descripcion": "Explora el encantador pueblo medieval de Albarracín, considerado uno de los pueblos más bonitos de España. Recorre sus estrechas calles empedradas y admira sus murallas y casas de colores.",
    "provincia": "661cd1c6cab02767690bce97",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0d773efab228a11f813d",
    "nombre": "Parque Cultural del Río Martín",
    "img": "https://i.postimg.cc/2Skf4MsB/Parque-Cultural-del-R-o-Mart-n.jpg",
    "descripcion": "Embárcate en una aventura en el Parque Cultural del Río Martín, un impresionante cañón con formaciones geológicas únicas. Descubre pinturas rupestres, cuevas y paisajes sorprendentes.",
    "provincia": "661cd1c6cab02767690bce97",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0d9b3efab228a11f813f",
    "nombre": "Parque Geológico de Aliaga",
    "img": "https://i.postimg.cc/Dyc9y5Sf/Parque-Geol-gico-de-Aliaga.jpg",
    "descripcion": "Explora el Parque Geológico de Aliaga, un lugar fascinante donde encontrarás formaciones geológicas únicas y restos fósiles de gran interés científico. Disfruta de rutas de senderismo y observación geológica.",
    "provincia": "661cd1c6cab02767690bce97",
    "comunidad": "Aragón",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0dc53efab228a11f8141",
    "nombre": "La Seu Vella de Lleida",
    "img": "https://i.postimg.cc/rwMgQ95K/La-Seu-Vella-de-Lleida.jpg",
    "descripcion": "Visita la majestuosa La Seu Vella de Lleida, una catedral gótica situada en lo alto de una colina con vistas panorámicas de la ciudad. Explora su impresionante arquitectura y su rica historia.",
    "provincia": "661cd1eacab02767690bce8c",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0df63efab228a11f8143",
    "nombre": "La Seu Nova",
    "img": "https://i.postimg.cc/FRdx7CXn/La-Seu-Nova.jpg",
    "descripcion": "Descubre La Seu Nova, la catedral nueva de Lleida, construida en estilo neoclásico en el siglo XVIII. Admira su elegante arquitectura y visita su interior.",
    "provincia": "661cd1eacab02767690bce8c",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0e013efab228a11f8145",
    "nombre": "Castillo de Gardeny",
    "img": "https://i.postimg.cc/pddCtXGv/Castillo-de-Gardeny.png",
    "descripcion": "Explora el Castillo de Gardeny, una fortaleza templaria situada en las afueras de Lleida. Descubre su historia militar y disfruta de las vistas panorámicas desde lo alto de la colina.",
    "provincia": "661cd1eacab02767690bce8c",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0e0e3efab228a11f8147",
    "nombre": "Parque Nacional de Aigüestortes y Estany de Sant Maurici",
    "img": "https://i.postimg.cc/kgssZtyw/Parque-Nacional-de-Aig-estortes-y-Estany-de-Sant-Maurici.jpg",
    "descripcion": "Embárcate en una aventura en el Parque Nacional de Aigüestortes y Estany de Sant Maurici, un paraíso natural de lagos, montañas y bosques en los Pirineos. Disfruta de rutas de senderismo y paisajes espectaculares.",
    "provincia": "661cd1eacab02767690bce8c",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0e1b3efab228a11f8149",
    "nombre": "Vall de Boí",
    "img": "https://i.postimg.cc/XvD8NSmC/Vall-de-Bo.jpg",
    "descripcion": "Descubre la belleza del Vall de Boí, un valle pirenaico declarado Patrimonio de la Humanidad por la UNESCO. Visita sus iglesias románicas y admira sus paisajes montañosos.",
    "provincia": "661cd1eacab02767690bce8c",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0e463efab228a11f814d",
    "nombre": "Estación de Esquí de Baqueira Beret",
    "img": "https://i.postimg.cc/zBsFWwJD/Estaci-n-de-Esqu-de-Baqueira-Beret.jpg",
    "descripcion": "Disfruta del esquí y otros deportes de invierno en la Estación de Esquí de Baqueira Beret, una de las mejores de los Pirineos. Descubre sus pistas de esquí, paisajes nevados y servicios de alta calidad.",
    "provincia": "661cd1eacab02767690bce8c",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0e6e3efab228a11f814f",
    "nombre": "Barri Vell (Barrio Viejo) de Girona",
    "img": "https://i.postimg.cc/bN8FB8hy/Barri-Vell-Barrio-Viejo-de-Girona.jpg",
    "descripcion": "Explora el encantador Barri Vell de Girona, el casco antiguo de la ciudad. Recorre sus estrechas calles empedradas, admira sus casas medievales y descubre sus plazas históricas.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0e783efab228a11f8151",
    "nombre": "Catedral de Girona",
    "img": "https://i.postimg.cc/QddYjbCv/Catedral-de-Girona.jpg",
    "descripcion": "Visita la majestuosa Catedral de Girona, una obra maestra del gótico catalán. Admira su impresionante nave, su claustro y su famosa escalera barroca.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0e803efab228a11f8153",
    "nombre": "Murallas de Girona",
    "img": "https://i.postimg.cc/4x2Ly9hy/Murallas-de-Girona.jpg",
    "descripcion": "Recorre las antiguas murallas de Girona, que datan de la época romana y medieval. Disfruta de las vistas panorámicas de la ciudad desde lo alto de sus torres y baluartes.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0e8a3efab228a11f8155",
    "nombre": "Call Jueu (Barrio Judío) de Girona",
    "img": "https://i.postimg.cc/bN8FB8hy/Barri-Vell-Barrio-Viejo-de-Girona.jpg",
    "descripcion": "Descubre la historia del Call Jueu de Girona, uno de los barrios judíos mejor conservados de Europa. Recorre sus estrechas callejuelas y visita su antigua sinagoga.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0eb03efab228a11f8157",
    "nombre": "Vía Verde del Carrilet",
    "img": "https://i.postimg.cc/5N3kcG4w/V-a-Verde-del-Carrilet.jpg",
    "descripcion": "Recorre la Vía Verde del Carrilet, una ruta cicloturista que sigue el antiguo trazado del tren de vapor entre Olot y Girona. Disfruta de paisajes naturales, pueblos encantadores y una experiencia tranquila.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0ebc3efab228a11f8159",
    "nombre": "La Garrotxa",
    "img": "https://i.postimg.cc/vmNSD6kX/La-Garrotxa.jpg",
    "descripcion": "Descubre la belleza de La Garrotxa, una comarca volcánica con paisajes únicos y pueblos medievales. Explora sus parques naturales, volcanes inactivos y senderos de montaña.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0ed83efab228a11f815d",
    "nombre": "Costa Brava",
    "img": "https://i.postimg.cc/k5kTFPsd/Costa-Brava.jpg",
    "descripcion": "Descubre la espectacular Costa Brava, con sus playas de aguas cristalinas, calas escondidas y pintorescos pueblos pesqueros. Disfruta del sol, el mar y la deliciosa gastronomía mediterránea.",
    "provincia": "661cd1d3cab02767690bce9b",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0eed3efab228a11f815f",
    "nombre": "Tarraco Romana",
    "img": "https://i.postimg.cc/Qxd5YnH9/Tarraco-Romana.jpg",
    "descripcion": "Explora Tarraco Romana, el conjunto arqueológico de Tarragona declarado Patrimonio de la Humanidad por la UNESCO. Visita el Anfiteatro, el Circo Romano y las Murallas para sumergirte en la historia de la antigua Tarraco.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0ef63efab228a11f8161",
    "nombre": "Catedral de Tarragona",
    "img": "https://i.postimg.cc/9Fg96t7x/Catedral-de-Tarragona.jpg",
    "descripcion": "Visita la imponente Catedral de Tarragona, un ejemplo destacado de arquitectura románica y gótica en España. Admira su claustro, sus capillas y sus impresionantes vistas panorámicas desde lo alto.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0f133efab228a11f8163",
    "nombre": "Plaça de la Font",
    "img": "https://i.postimg.cc/Y9BYXrWM/Pla-a-de-la-Font.jpg",
    "descripcion": "Pasea por la Plaça de la Font, una encantadora plaza en el centro de Tarragona. Disfruta de sus terrazas, fuentes y ambiente animado, rodeado de edificios históricos y tiendas.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0f203efab228a11f8165",
    "nombre": "Anfiteatro de Tarragona",
    "img": "https://i.postimg.cc/qqjKM2Zv/Anfiteatro-de-Tarragona.jpg",
    "descripcion": "Visita el impresionante Anfiteatro de Tarragona, un antiguo escenario romano que aún conserva su estructura original. Imagina los espectáculos y batallas que tuvieron lugar en este emblemático lugar.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0f2d3efab228a11f8167",
    "nombre": "Parque Natural del Delta del Ebro",
    "img": "https://i.postimg.cc/sfc7cRDC/Parque-Natural-del-Delta-del-Ebro.jpg",
    "descripcion": "Explora el Parque Natural del Delta del Ebro, un impresionante humedal que alberga una gran diversidad de flora y fauna. Descubre sus arrozales, lagunas y playas vírgenes, y observa aves migratorias en su hábitat natural.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0f493efab228a11f8169",
    "nombre": "Parque Natural de la Serra del Montsià",
    "img": "https://i.postimg.cc/4dvtqD6t/Parque-Natural-de-la-Serra-del-Montsi.jpg",
    "descripcion": "Visita el Parque Natural de la Serra del Montsià, un área protegida que ofrece paisajes montañosos, bosques mediterráneos y rutas de senderismo. Descubre la flora y fauna autóctonas de la región.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0f5d3efab228a11f816b",
    "nombre": "Ruta del Cister",
    "img": "https://i.postimg.cc/Wz2rv58y/Ruta-del-Cister.jpg",
    "descripcion": "Recorre la Ruta del Cister, un itinerario cultural que te lleva a través de tres monasterios cistercienses en la provincia de Tarragona: Poblet, Santes Creus y Vallbona de les Monges. Descubre la arquitectura y la historia de estos impresionantes edificios religiosos.",
    "provincia": "661cd1d9cab02767690bce9d",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0f7e3efab228a11f816d",
    "nombre": "Sagrada Familia",
    "img": "https://i.postimg.cc/LX7KdWm9/Sagrada-Familia.jpg",
    "descripcion": "Visita la icónica Sagrada Familia, la obra maestra inacabada de Antoni Gaudí en Barcelona. Admira su impresionante arquitectura modernista y descubre la rica simbología de este templo único.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0f8b3efab228a11f816f",
    "nombre": "Parque Güell",
    "img": "https://i.postimg.cc/fy94Mvbx/Parque-G-ell.jpg",
    "descripcion": "Explora el colorido Parque Güell, otro de los magníficos diseños de Antoni Gaudí en Barcelona. Pasea por sus jardines, admira sus mosaicos y disfruta de las impresionantes vistas de la ciudad.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0f983efab228a11f8171",
    "nombre": "Las Ramblas",
    "img": "https://i.postimg.cc/xjw8MxLV/Las-Ramblas.jpg",
    "descripcion": "Recorre Las Ramblas, el famoso paseo peatonal de Barcelona. Disfruta de la animada atmósfera, visita los mercados locales, y admira la arquitectura y las estatuas callejeras a lo largo de esta bulliciosa vía.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0fa53efab228a11f8173",
    "nombre": "Barrio Gótico",
    "img": "https://i.postimg.cc/Rq5khn32/Barrio-G-tico.jpg",
    "descripcion": "Sumérgete en la historia del Barrio Gótico de Barcelona, ​​donde encontrarás calles estrechas, plazas encantadoras y edificios históricos. Explora la Catedral de Barcelona, el Palau de la Generalitat y otros lugares emblemáticos.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0fb93efab228a11f8175",
    "nombre": "Montjuïc",
    "img": "https://i.postimg.cc/0NX2Qc93/Montju-c.png",
    "descripcion": "Explora Montjuïc, una montaña que ofrece una vista panorámica de Barcelona. Visita el Castillo de Montjuïc, los Jardines de Miramar, el Museo Nacional de Arte de Cataluña y disfruta de espectáculos en el Estadio Olímpico.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0fd93efab228a11f8177",
    "nombre": "Parque Natural de la Montaña de Montserrat",
    "img": "https://i.postimg.cc/Vsr5SQrF/Parque-Natural-de-la-Monta-a-de-Montserrat.jpg",
    "descripcion": "Explora el impresionante Parque Natural de la Montaña de Montserrat, donde encontrarás picos rocosos, cuevas y senderos para practicar senderismo. Visita el Monasterio de Montserrat y disfruta de las vistas panorámicas.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0feb3efab228a11f8179",
    "nombre": "Sierra de Collserola",
    "img": "https://i.postimg.cc/13Hzxy2y/Sierra-de-Collserola.jpg",
    "descripcion": "Embárcate en una aventura en la Sierra de Collserola, un espacio natural protegido cerca de Barcelona. Disfruta de senderismo, ciclismo de montaña y observación de aves en este pulmón verde.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0ff83efab228a11f817b",
    "nombre": "Parque Natural del Garraf",
    "img": "https://i.postimg.cc/dVv0ShWW/Parque-Natural-del-Garraf.jpg",
    "descripcion": "Descubre la belleza del Parque Natural del Garraf, con acantilados, playas vírgenes y bosques mediterráneos. Realiza senderismo, escalada o simplemente relájate en la costa de este impresionante parque.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d10143efab228a11f817d",
    "nombre": "Reserva Natural de las Fuentes del Llobregat",
    "img": "https://i.postimg.cc/dtG1B29k/Reserva-Natural-de-las-Fuentes-del-Llobregat.jpg",
    "descripcion": "Descubre la Reserva Natural de las Fuentes del Llobregat, un área protegida que alberga una gran biodiversidad de flora y fauna. Realiza senderismo y descubre cascadas, cuevas y manantiales en este entorno natural.",
    "provincia": "661cd1dfcab02767690bce9f",
    "comunidad": "Cataluña",
    "tipo": "rural",
    "__v": 0
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Museo del Prado",
    "descripcion": "Visita el famoso Museo del Prado en Madrid, uno de los museos de arte más importantes del mundo. Contempla obras maestras de artistas como Velázquez, Goya, y El Greco, entre otros.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/hvX0hWy6/Museo-del-Prado.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Palacio Real de Madrid",
    "descripcion": "Descubre la majestuosidad del Palacio Real de Madrid, residencia oficial de la monarquía española. Visita sus lujosos salones, sus impresionantes jardines y su rica colección de arte.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/g0p4s7jL/Palacio-Real-de-Madrid.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Parque del Retiro",
    "descripcion": "Pasea por el encantador Parque del Retiro de Madrid, un oasis verde en el corazón de la ciudad. Disfruta de sus hermosos jardines, sus estanques y su ambiente tranquilo.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/ydPG0HTN/Parque-del-Retiro.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Puerta del Sol",
    "descripcion": "Visita la emblemática Puerta del Sol de Madrid, un lugar lleno de historia y vitalidad. Contempla el famoso Kilómetro Cero, la estatua del Oso y el Madroño, y disfruta del ambiente animado.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/k4n1JHdP/Puerta-del-Sol.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Plaza Mayor",
    "descripcion": "Sumérgete en la historia en la Plaza Mayor de Madrid, un lugar emblemático donde se celebraban corridas de toros, autos de fe y otras festividades. Disfruta de la arquitectura y el ambiente animado.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/1tJWfK9n/Plaza-Mayor-Madrid.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Gran Vía",
    "descripcion": "Recorre la vibrante Gran Vía de Madrid, una de las principales arterias de la ciudad. Disfruta de sus tiendas, teatros, cines y restaurantes, y empápate del ambiente cosmopolita.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/rwrYQW93/Gran-V-a.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Embalse de Valmayor",
    "descripcion": "Relájate junto al Embalse de Valmayor, un hermoso lago artificial en la Comunidad de Madrid. Disfruta de actividades acuáticas, pesca y paseos en barco en un entorno natural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/fyqggfpn/Embalse-de-Valmayor.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Ruta del Manzanares",
    "descripcion": "Recorre la Ruta del Manzanares, un sendero que sigue el curso del río Manzanares desde Madrid hasta su nacimiento en la Sierra de Guadarrama. Disfruta de la naturaleza y las vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Bv57G0kC/Ruta-del-Manzanares.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Parque Nacional de la Sierra de Guadarrama",
    "descripcion": "Explora el Parque Nacional de la Sierra de Guadarrama, un espacio protegido de gran belleza natural en la Comunidad de Madrid. Realiza actividades al aire libre y disfruta de la fauna y flora.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/G2hKwskc/Sierra-de-Guadarrama.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2e487583e7ca0fca397",
    "nombre": "Valle del Lozoya",
    "descripcion": "Descubre el Valle del Lozoya, un entorno natural privilegiado en la Sierra Norte de Madrid. Realiza senderismo, visita pueblos con encanto y disfruta de la tranquilidad del campo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/6pJh6Pdb/Valle-del-Lozoya.jpg",
    "comunidad": "Comunidad de Madrid"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Casco Antiguo de Cáceres",
    "descripcion": "Recorre el encantador casco antiguo de Cáceres, declarado Patrimonio de la Humanidad por la UNESCO. Descubre sus estrechas calles empedradas, plazas históricas y arquitectura medieval bien conservada.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/hvGdMHHs/Casco-Antiguo-de-C-ceres.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Plaza Mayor de Cáceres",
    "descripcion": "Disfruta del ambiente animado en la Plaza Mayor de Cáceres, rodeada de edificios históricos y restaurantes. Relájate en una terraza y admira la belleza de esta emblemática plaza.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/qMzKKHcM/Plaza-Mayor-de-C-ceres.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Museo de Arte Contemporáneo Helga de Alvear",
    "descripcion": "Explora el Museo de Arte Contemporáneo Helga de Alvear en Cáceres, que alberga una impresionante colección de arte contemporáneo internacional. Sumérgete en obras de artistas reconocidos y emergentes.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/RhbnYgmB/Museo-de-Arte-Contempor-neo-Helga-de-Alvear.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Barrio Judío",
    "descripcion": "Recorre el histórico Barrio Judío de Cáceres, un laberinto de callejuelas estrechas y casas blancas con influencias árabes y judías. Descubre la historia y la cultura de esta fascinante zona.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/LX2fgqDr/Barrio-Jud-o.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Palacio de las Veletas",
    "descripcion": "Visita el Palacio de las Veletas en Cáceres, que alberga el Museo de Cáceres. Explora exposiciones arqueológicas y de arte mientras admiras la arquitectura renacentista de este impresionante edificio.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/TwdLYzYx/Palacio-de-las-Veletas.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Catedral de Santa María",
    "descripcion": "Contempla la majestuosa Catedral de Santa María en Cáceres, una joya del estilo gótico y renacentista. Admira su impresionante fachada, sus vidrieras y su rica historia mientras exploras este emblemático templo.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/XN2FXYCz/Catedral-de-Santa-Mar-a.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Parque Nacional de Monfragüe",
    "descripcion": "Embárcate en una aventura en el Parque Nacional de Monfragüe, un santuario natural de aves rapaces y paisajes espectaculares. Disfruta de senderismo, observación de aves y vistas panorámicas en este paraíso natural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/fbhS13GJ/Parque-Nacional-de-Monfrag-e.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Valle del Jerte",
    "descripcion": "Descubre la belleza del Valle del Jerte en Cáceres, especialmente durante la floración de los cerezos en primavera. Realiza senderismo, visita pintorescos pueblos y disfruta de la naturaleza en estado puro.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/1tvggvfq/Valle-del-Jerte.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Garganta de los Infiernos",
    "descripcion": "Explora la Garganta de los Infiernos, un impresionante espacio natural en el Valle del Jerte. Descubre cascadas, pozas de agua cristalina y exuberante vegetación en este paraje de gran belleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/rpCRTVTg/Garganta-de-los-Infiernos.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Parque Nacional de Tajo Internacional",
    "descripcion": "Adéntrate en el Parque Nacional de Tajo Internacional, un área protegida que alberga una gran diversidad de flora y fauna. Realiza senderismo, observa aves y disfruta de las impresionantes vistas del río Tajo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/cHh3Rs56/Parque-Nacional-de-Tajo-Internacional.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Valle del Ambroz",
    "descripcion": "Descubre la tranquilidad del Valle del Ambroz en Cáceres, un entorno natural ideal para desconectar y relajarse. Realiza rutas de senderismo, visita pueblos con encanto y disfruta de la gastronomía local.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/K8Tg97s6/Valle-del-Ambroz.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f087583e7ca0fca399",
    "nombre": "Pueblos de la Vera",
    "descripcion": "Recorre los pintorescos pueblos de la Vera en Cáceres, donde el tiempo parece haberse detenido. Descubre arquitectura tradicional, paisajes naturales y la rica historia de esta encantadora comarca.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/wTZmc4F5/Pueblos-de-la-Vera.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Casco Antiguo de Badajoz",
    "descripcion": "Explora el encantador casco antiguo de Badajoz, donde encontrarás monumentos históricos, plazas animadas y calles llenas de encanto. Disfruta de la arquitectura medieval y la rica historia de la ciudad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/tJ9NBLDm/Casco-Antiguo-de-Badajoz.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Alcazaba de Badajoz",
    "descripcion": "Visita la imponente Alcazaba de Badajoz, una fortaleza árabe que domina la ciudad desde lo alto. Descubre su historia mientras recorres sus murallas y torres, disfrutando de vistas panorámicas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/j50X7WfT/Alcazaba-de-Badajoz.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Plaza Alta",
    "descripcion": "Disfruta del ambiente en la Plaza Alta de Badajoz, el corazón de la vida social y cultural de la ciudad. Contempla la arquitectura de sus edificios históricos mientras tomas algo en una terraza.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/qMMGyHNN/Plaza-Alta.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Catedral de San Juan Bautista",
    "descripcion": "Visita la majestuosa Catedral de San Juan Bautista en Badajoz, una obra maestra del estilo gótico y renacentista. Admira su arquitectura, sus obras de arte y su atmósfera de espiritualidad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/rpWGM8PP/Catedral-de-San-Juan-Bautista.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Teatro y Anfiteatro de Mérida",
    "descripcion": "Descubre la historia romana en el Teatro y Anfiteatro de Mérida, dos impresionantes estructuras que datan de la época romana y son Patrimonio Mundial de la UNESCO. Visita el teatro, que aún se utiliza para representaciones, y maravíllate con la grandiosidad del anfiteatro, donde se celebraban espectáculos y luchas de gladiadores durante el Imperio Romano.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/dQ9BhVVM/Teatro-y-Anfiteatro-de-M-rida.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Sierra de San Pedro",
    "descripcion": "Embárcate en una aventura en la Sierra de San Pedro, un paraíso natural en la provincia de Badajoz. Explora sus paisajes montañosos, bosques y ríos, y descubre la biodiversidad de la región.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/T3KqNjqG/Sierra-de-San-Pedro.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Embalse de Orellana",
    "descripcion": "Relájate junto al Embalse de Orellana, el embalse más grande de Extremadura, situado en la provincia de Badajoz. Disfruta de actividades acuáticas, pesca y observación de aves en este hermoso entorno natural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/NjZ83ypX/Embalse-de-Orellana.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2f787583e7ca0fca39b",
    "nombre": "Ruta de los Castillos y Fortalezas",
    "descripcion": "Recorre la Ruta de los Castillos y Fortalezas en la provincia de Badajoz, donde encontrarás impresionantes vestigios de la historia militar de la región. Descubre la belleza y la importancia de estos monumentos.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/gkSHKthN/Ruta-de-los-Castillos-y-Fortalezas.jpg",
    "comunidad": "Extremadura"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Palacio del Infantado",
    "descripcion": "Visita el impresionante Palacio del Infantado en Guadalajara, una obra maestra del Renacimiento español. Descubre su arquitectura única, sus salones ornamentados y sus hermosos jardines.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/DfBnbvRB/Palacio-del-Infantado.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Plaza Mayor de Guadalajara",
    "descripcion": "Recorre la animada Plaza Mayor de Guadalajara, el corazón de la ciudad. Disfruta de su arquitectura histórica, sus terrazas al aire libre y su ambiente festivo durante las fiestas locales.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/RVYmXPSt/Plaza-Mayor-de-Guadalajara.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Parque de la Concordia",
    "descripcion": "Pasea por el Parque de la Concordia en Guadalajara, un espacio verde ideal para relajarse y disfrutar de la naturaleza en pleno centro urbano. Descubre sus áreas ajardinadas, sus fuentes y su lago.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Zq8hY4rP/Parque-de-la-Concordia.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Iglesia de San Ginés",
    "descripcion": "Visita la histórica Iglesia de San Ginés en Guadalajara, un bello ejemplo de arquitectura religiosa. Contempla su fachada barroca, su interior decorado y sus obras de arte sacro.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/R05BzNnV/Iglesia-de-San-Gin-s.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Parque Natural del Alto Tajo",
    "descripcion": "Embárcate en una aventura en el Parque Natural del Alto Tajo, un paraíso natural de montañas, bosques y ríos. Disfruta de actividades al aire libre como senderismo, observación de aves y piragüismo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/bw2hMQrB/Parque-Natural-del-Alto-Tajo.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Pueblo de Sigüenza",
    "descripcion": "Visita el pintoresco pueblo de Sigüenza, uno de los más bellos de Guadalajara. Recorre sus calles empedradas, admira su impresionante catedral y descubre su rica historia medieval.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/C1wpzXN3/Pueblo-de-Sig-enza.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Ruta de los Pueblos Negros",
    "descripcion": "Descubre la encantadora Ruta de los Pueblos Negros en Guadalajara, donde las casas están construidas con pizarra. Visita pueblos como Campillo de Ranas y Majaelrayo y maravíllate con su belleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/0N0DYKYz/Ruta-de-los-Pueblos-Negros.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd2fe87583e7ca0fca39d",
    "nombre": "Embalse de Entrepeñas",
    "descripcion": "Relájate junto al Embalse de Entrepeñas, un hermoso lago en Guadalajara. Disfruta de actividades acuáticas como la pesca, el piragüismo y el windsurf, o simplemente relájate en la orilla.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/L65RkdpR/Embalse-de-Entrepe-as.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Alcázar de Toledo",
    "descripcion": "Visita el majestuoso Alcázar de Toledo, una fortaleza que domina la ciudad desde lo alto de una colina. Descubre su historia, sus salones ornamentados y sus impresionantes vistas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/ZKkYmbvR/Alc-zar-de-Toledo.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Catedral Primada de Toledo",
    "descripcion": "Contempla la grandiosidad de la Catedral Primada de Toledo, una obra maestra del arte gótico español. Admira sus vidrieras, su retablo mayor y su impresionante claustro.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/0yP86Vf1/Catedral-Primada-de-Toledo.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Plaza de Zocodover",
    "descripcion": "Sumérgete en el bullicio de la Plaza de Zocodover, el corazón de Toledo. Disfruta de su ambiente animado, sus terrazas al aire libre y su impresionante arquitectura.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/63y6WTh7/Plaza-de-Zocodover.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Museo de Santa Cruz",
    "descripcion": "Explora el Museo de Santa Cruz en Toledo, que alberga una impresionante colección de arte y arqueología. Contempla obras de El Greco, Goya y otros artistas españoles.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/tTwqYyrB/Museo-de-Santa-Cruz.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Sinagoga de Santa María la Blanca",
    "descripcion": "Visita la Sinagoga de Santa María la Blanca, un impresionante edificio de arquitectura mudéjar en Toledo. Descubre su historia como lugar de culto judío y cristiano a lo largo de los siglos.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/SNWSNBcG/Sinagoga-de-Santa-Mar-a-la-Blanca.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Parque Nacional de Cabañeros",
    "descripcion": "Embárcate en una aventura en el Parque Nacional de Cabañeros, un paraíso natural de bosques mediterráneos y fauna silvestre. Realiza senderismo, observa aves y admira los paisajes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/j2fsf9mt/Parque-Nacional-de-Caba-ero.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Ruta del Quijote",
    "descripcion": "Sigue los pasos del Quijote por la Ruta del Quijote en Toledo. Recorre pueblos con encanto, castillos medievales y paisajes que inspiraron la famosa novela de Miguel de Cervantes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/zfdXYTTZ/Ruta-del-Quijote.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Castillo de Consuegra",
    "descripcion": "Visita el imponente Castillo de Consuegra en Toledo, que se alza sobre un cerro y ofrece vistas panorámicas de los campos de Castilla. Descubre su historia y su arquitectura medieval.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/zfdXYTTZ/Ruta-del-Quijote.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30487583e7ca0fca39f",
    "nombre": "Embalse de Castrejón",
    "descripcion": "Relájate junto al Embalse de Castrejón, un hermoso lago en la provincia de Toledo. Disfruta de actividades acuáticas como la pesca, el baño y los paseos en barco.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/CMnM9B1X/Embalse-de-Castrej-n.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Casas Colgadas",
    "descripcion": "Visita las famosas Casas Colgadas de Cuenca, un conjunto de casas construidas en el borde de un acantilado. Admira su arquitectura medieval y disfruta de las vistas panorámicas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/3N06NXD0/Casas-Colgadas-de-Cuenca.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Catedral de Santa María y San Julián",
    "descripcion": "Contempla la majestuosidad de la Catedral de Santa María y San Julián en Cuenca, una obra maestra del arte gótico español. Admira su fachada, sus vidrieras y su interior decorado.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/ZKdt5Srs/Catedral-de-Santa-Mar-a-y-San-Juli-n.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Puente de San Pablo",
    "descripcion": "Pasea por el Puente de San Pablo en Cuenca, que cruza el río Huécar y ofrece unas vistas impresionantes de la ciudad. Disfruta de su arquitectura medieval y su entorno natural.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Y99TKKr3/Puente-de-San-Pablo.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Museo de Arte Abstracto Español",
    "descripcion": "Explora el Museo de Arte Abstracto Español en Cuenca, que alberga una importante colección de obras de arte abstracto. Contempla las obras de artistas españoles como Saura, Chillida y Miró.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/KcVhbzgg/Museo-de-Arte-Abstracto-Espa-ol.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Barrio del Castillo",
    "descripcion": "Recorre el pintoresco Barrio del Castillo en Cuenca, donde encontrarás calles empedradas, casas tradicionales y una atmósfera medieval encantadora. Descubre sus rincones más emblemáticos.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/B6VkJYtG/Barrio-del-Castillo.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Ciudad Encantada",
    "descripcion": "Explora la Ciudad Encantada de Cuenca, un paraje natural único donde las formaciones rocosas adquieren formas caprichosas. Recorre sus senderos y maravíllate con sus paisajes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/yNn2bYHx/Ciudad-Encantada.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Nacimiento del Río Cuervo",
    "descripcion": "Visita el impresionante Nacimiento del Río Cuervo en Cuenca, una cascada de aguas cristalinas rodeada de un entorno natural de gran belleza. Realiza rutas de senderismo y disfruta de la naturaleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Sx6Bcf1W/Nacimiento-del-R-o-Cuervo.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Serranía de Cuenca",
    "descripcion": "Explora la Serranía de Cuenca, una comarca de gran belleza natural con montañas, ríos y bosques. Realiza actividades al aire libre como senderismo, escalada y observación de aves.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/7bvR25gs/Serran-a-de-Cuenca.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Playa en el Río Júcar",
    "descripcion": "Disfruta de un día de tranquilidad junto al Río Júcar en Cuenca. Relájate en sus orillas, haz un picnic en sus áreas recreativas y admira los paisajes que ofrece este río.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/htRFJ5sD/Playa-en-el-R-o-J-car.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30987583e7ca0fca3a1",
    "nombre": "Recorre la Hoz del Huéca",
    "descripcion": "Recorre la Hoz del Huécar en Cuenca, un impresionante cañón fluvial formado por el río Huécar. Realiza rutas de senderismo y admira los acantilados y la vegetación de este paraje natural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/g0GfsL11/Hoz-del-Hu-car.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30f87583e7ca0fca3a3",
    "nombre": "Plaza Mayor de Ciudad Real",
    "descripcion": "Disfruta del ambiente animado en la Plaza Mayor de Ciudad Real, un lugar lleno de vida rodeado de edificios históricos, restaurantes y cafeterías. Ideal para pasear y disfrutar de la cultura local.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/fT9yn1kD/Plaza-Mayor-de-Ciudad-Real.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30f87583e7ca0fca3a3",
    "nombre": "Catedral de Santa María del Prado",
    "descripcion": "Visita la impresionante Catedral de Santa María del Prado en Ciudad Real, un magnífico ejemplo de arquitectura religiosa renacentista. Admira su fachada, su interior y su altar mayor.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/8CHsXWcv/Catedral-de-Santa-Mar-a-del-Prado.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30f87583e7ca0fca3a3",
    "nombre": "Parque Gasset",
    "descripcion": "Relájate en el Parque Gasset de Ciudad Real, un espacio verde con zonas ajardinadas, senderos para caminar y áreas de juego para niños. Perfecto para disfrutar de un día al aire libre.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Rhj0JLsk/Parque-Gasset.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30f87583e7ca0fca3a3",
    "nombre": "Torre del Tardon",
    "descripcion": "Admira la Torre del Tardon en Ciudad Real, un antiguo torreón medieval que formaba parte de las murallas de la ciudad. Contempla su arquitectura y disfruta de las vistas panorámicas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/0j6QNBfG/Torre-del-Tardon.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30f87583e7ca0fca3a3",
    "nombre": "Ruta del Quijote",
    "descripcion": "Sigue los pasos del Quijote por la Ruta del Quijote en Ciudad Real. Recorre pueblos con encanto, castillos medievales y paisajes que inspiraron la famosa novela de Miguel de Cervantes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Tw31zw54/Ruta-del-Quijote.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd30f87583e7ca0fca3a3",
    "nombre": "Parque Natural Lagunas de Ruidera",
    "descripcion": "Descubre la belleza de las Lagunas de Ruidera en Ciudad Real, un conjunto de lagunas de agua cristalina rodeadas de un entorno natural protegido. Disfruta de la naturaleza y realiza actividades acuáticas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/XNhqPnjs/Parque-Natural-Lagunas-de-Ruidera.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Catedral de San Juan Bautista",
    "descripcion": "Visita la majestuosa Catedral de San Juan Bautista en Albacete, una obra maestra del estilo neogótico. Contempla su impresionante arquitectura y su interior ricamente decorado.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/bvbPS7DL/Catedral-de-San-Juan-Bautista.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Museo Provincial de Albacete",
    "descripcion": "Explora el Museo Provincial de Albacete, que alberga una importante colección de arte y arqueología. Descubre la historia y la cultura de la región a través de sus exposiciones.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/L8J22Ymc/Museo-Provincial-de-Albacete.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Parque Abelardo Sánchez",
    "descripcion": "Relájate en el Parque Abelardo Sánchez en Albacete, un oasis urbano con zonas verdes, lagos y áreas de recreo. Ideal para dar un paseo, hacer deporte o simplemente descansar.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/8ckg3syn/Parque-Abelardo-S-nchez.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Pasaje de Lodares",
    "descripcion": "Recorre el Pasaje de Lodares en Albacete, una galería comercial cubierta que alberga tiendas, cafeterías y restaurantes. Disfruta de su arquitectura modernista y su ambiente animado.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/FHwmRrR7/Pasaje-de-Lodares.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Lagunas de Ruidera",
    "descripcion": "Descubre las Lagunas de Ruidera en Albacete, un conjunto de lagunas de agua cristalina rodeadas de un entorno natural protegido. Realiza actividades acuáticas y disfruta de la naturaleza.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/RFLzXwTH/Parque-Natural-Lagunas-de-Ruidera.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Parque Natural de los Calares del Río Mundo y de la Sima",
    "descripcion": "Embárcate en una aventura en el Parque Natural de los Calares del Río Mundo y de la Sima en Albacete. Descubre cascadas, cuevas y paisajes impresionantes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/rsh2Lc3y/Parque-Natural-de-los-Calares-del-R-o-Mundo-y-de-la-Sima.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31487583e7ca0fca3a5",
    "nombre": "Sierra de Alcaraz y del Segura",
    "descripcion": "Recorre la Sierra de Alcaraz y del Segura en Albacete, una sierra de gran valor ecológico y paisajístico. Realiza actividades al aire libre y descubre pueblos con encanto.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Y9HH6dQ7/Sierra-de-Alcaraz.jpg",
    "comunidad": "Castilla-La Mancha"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Castillo de Peñíscola",
    "descripcion": "Visita el imponente Castillo de Peñíscola, situado en lo alto de una colina y rodeado por el mar Mediterráneo. Descubre la historia de este castillo medieval y disfruta de las impresionantes vistas panorámicas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/1RNCrqpz/Castillo-Peniscola.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Paseo Marítimo de Castellón de la Plana",
    "descripcion": "Recorre el Paseo Marítimo de Castellón de la Plana y disfruta de un agradable paseo junto al mar. Contempla las vistas, relájate en las terrazas y disfruta del ambiente marítimo.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/DzZ5JJvn/Paseo-Mar-timo-de-Castell-n-de-la-Plana.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Catedral de Santa María de Castellón",
    "descripcion": "Visita la majestuosa Catedral de Santa María de Castellón, un impresionante templo gótico con una rica historia y una arquitectura impresionante. Explora su interior y admira sus obras de arte.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/sXbnRjRy/Catedral-de-Santa-Mar-a-de-Castell-n.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Museo de Bellas Artes de Castellón",
    "descripcion": "Explora el Museo de Bellas Artes de Castellón y admira una amplia colección de obras de arte que abarcan desde la antigüedad hasta el siglo XX. Descubre pinturas, esculturas y más.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/65rMDxbJ/Museo-de-Bellas-Artes-de-Castell-n.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Parque Natural de la Sierra de Espadán",
    "descripcion": "Embárcate en una aventura en el Parque Natural de la Sierra de Espadán, donde encontrarás impresionantes paisajes montañosos, bosques frondosos y una variedad de rutas de senderismo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/BnJm37R8/Parque-Natural-de-la-Sierra-de-Espad-n.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Ruta de los Molinos de la Plana",
    "descripcion": "Recorre la Ruta de los Molinos de la Plana y descubre los antiguos molinos de agua que salpican el paisaje rural de Castellón. Disfruta de un paseo tranquilo y contempla la belleza natural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/DzZ5JJvn/Paseo-Mar-timo-de-Castell-n-de-la-Plana.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Ruta de los Castillos del Maestrazgo",
    "descripcion": "Recorre la Ruta de los Castillos del Maestrazgo y descubre las impresionantes fortalezas medievales que dominan el paisaje de Castellón. Sumérgete en la historia y disfruta de las vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Y0gdr5pF/Ruta-de-los-Castillos-del-Maestrazgo.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd31b87583e7ca0fca3a7",
    "nombre": "Parque Natural de la Sierra Calderona",
    "descripcion": "Disfruta de la naturaleza en el Parque Natural de la Sierra Calderona, donde encontrarás una gran diversidad de flora y fauna, así como rutas de senderismo y miradores panorámicos.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/L6KyC8T3/Parque-Natural-de-la-Sierra-Calderona.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Ciudad de las Artes y las Ciencias",
    "descripcion": "Explora la impresionante Ciudad de las Artes y las Ciencias de Valencia, un complejo arquitectónico y cultural único en el mundo. Visita el Oceanogràfic, el Hemisfèric, el Museo de las Ciencias Príncipe Felipe y mucho más.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/RVPxjtDz/Ciudad-de-las-Artes-y-las-Ciencias.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Mercado Central de Valencia",
    "descripcion": "Sumérgete en la cultura y la gastronomía de Valencia visitando el Mercado Central, uno de los mercados más grandes de Europa. Descubre una gran variedad de productos frescos y disfruta del ambiente local.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/RVCzsdGR/Mercado-Central-de-Valencia.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "La Lonja de la Seda",
    "descripcion": "Visita la majestuosa Lonja de la Seda de Valencia, un edificio gótico declarado Patrimonio de la Humanidad por la UNESCO. Descubre la historia de este antiguo mercado de seda y admira su arquitectura impresionante.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Sx3FKh4T/La-Lonja-de-la-Seda.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Barrio del Carmen",
    "descripcion": "Pasea por las estrechas calles del Barrio del Carmen en Valencia y descubre la esencia más bohemia de la ciudad. Explora sus tiendas, bares y galerías de arte, y disfruta del ambiente único.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/MZmSmN0H/Barrio-del-Carmen.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Playa de la Malvarrosa",
    "descripcion": "Relájate en la Playa de la Malvarrosa, una de las playas más populares de Valencia. Disfruta del sol, el mar y la arena, y prueba las delicias gastronómicas en los chiringuitos cercanos.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/tg60ZMCX/Playa-de-la-Malvarrosa.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Parque Natural de la Albufera",
    "descripcion": "Embárcate en una aventura en el Parque Natural de la Albufera, un paraíso natural de lagunas, arrozales y bosques en las afueras de Valencia. Realiza paseos en barca, observa aves y disfruta de la tranquilidad.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/V6PxjWdX/Parque-Natural-de-la-Albufera.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Ruta de los Monasterios de Valencia",
    "descripcion": "Recorre la Ruta de los Monasterios de Valencia y descubre la espiritualidad y la historia de estos antiguos monasterios. Admira la arquitectura y explora los jardines y los patios.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/qqkWFBcR/Ruta-de-los-Monasterios-de-Valencia.png",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Ruta del Vino de Valencia",
    "descripcion": "Embárcate en la Ruta del Vino de Valencia y descubre los viñedos y bodegas de la región. Degusta los vinos locales y aprende sobre la tradición vitivinícola de Valencia.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/W3mQSqkC/Ruta-del-Vino-de-Valencia.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd32687583e7ca0fca3a9",
    "nombre": "Ruta de los Castillos de Valencia",
    "descripcion": "Recorre la Ruta de los Castillos de Valencia y descubre las fortalezas medievales que salpican el paisaje de la provincia. Sumérgete en la historia y disfruta de las vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/VkdP1Nx0/Ruta-de-los-Castillos-de-Valencia.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Playa del Postiguet",
    "descripcion": "Disfruta de un día de sol y mar en la Playa del Postiguet, una de las playas más populares de Alicante. Relájate en la arena, da un paseo por el paseo marítimo y contempla las vistas al Castillo de Santa Bárbara.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/3JjZLMny/Playa-del-Postiguet.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Castillo de Santa Bárbara",
    "descripcion": "Visita el imponente Castillo de Santa Bárbara, que domina la ciudad de Alicante desde lo alto del monte Benacantil. Descubre la historia de esta fortaleza y disfruta de las vistas panorámicas de la ciudad y el mar.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/3RyB9dc7/Castillo-de-Santa-B-rbara.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Mercado Central de Alicante",
    "descripcion": "Sumérgete en la vida local de Alicante visitando el Mercado Central, donde encontrarás una gran variedad de productos frescos, desde frutas y verduras hasta pescado y marisco. Disfruta del bullicio y los aromas de este mercado tradicional.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/kgnvzjpT/Mercado-Central-de-Alicante.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Barrio de Santa Cruz",
    "descripcion": "Recorre el encantador Barrio de Santa Cruz, en Alicante, conocido por sus coloridas casas y sus estrechas calles adoquinadas. Descubre la esencia tradicional de la ciudad y disfruta de sus rincones con encanto.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/0QLC4PTS/Barrio-de-Santa-Cruz.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Ruta de Senderismo en el Parque Natural de la Sierra de Mariola",
    "descripcion": "Embárcate en una emocionante ruta de senderismo en el Parque Natural de la Sierra de Mariola, donde podrás disfrutar de paisajes de montaña, bosques de pinos y encinas, y una gran diversidad de flora y fauna.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/hvT0WNn5/Ruta-de-Senderismo-en-el-Parque-Natural-de-la-Sierra-de-Mariola.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Visita a las Fuentes del Algar",
    "descripcion": "Descubre la belleza natural de las Fuentes del Algar, un conjunto de cascadas y pozas de agua cristalina en plena naturaleza. Disfruta de un refrescante baño y relájate en este entorno paradisíaco.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/PfwywvDQ/Visita-a-las-Fuentes-del-Algar.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd33c87583e7ca0fca3ab",
    "nombre": "Ruta de los Pueblos con Encanto de la Costa Blanca",
    "descripcion": "Descubre la belleza de los Pueblos con Encanto de la Costa Blanca a través de esta ruta, donde encontrarás pintorescos pueblos de casas blancas, calles empedradas y vistas al mar Mediterráneo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/vHwzL8LF/Ruta-de-los-Pueblos-con-Encanto-de-la-Costa-Blanca.jpg",
    "comunidad": "Comunidad Valenciana"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Visita al Muelle de las Carabelas",
    "descripcion": "Sumérgete en la historia de los viajes de Cristóbal Colón visitando el Muelle de las Carabelas, donde se encuentran réplicas exactas de las embarcaciones que protagonizaron el Descubrimiento de América. Descubre cómo era la vida en alta mar en la época de los descubridores.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/dVt2GDf2/Visita-al-Muelle-de-las-Carabelas.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Recorrido por el Barrio Reina Victoria",
    "descripcion": "Explora el encantador Barrio Reina Victoria, conocido por su arquitectura colonial y sus calles ajardinadas. Descubre la influencia británica en la ciudad y disfruta de sus edificios históricos y sus plazas pintorescas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/hGXV36ch/Recorrido-por-el-Barrio-Reina-Victoria.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Visita al Museo Provincial de Huelva",
    "descripcion": "Sumérgete en la rica historia y cultura de la provincia en el Museo Provincial de Huelva. Descubre piezas arqueológicas, obras de arte y exposiciones temporales que te llevarán a través del pasado y el presente de la región.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/SKHc0dxd/Visita-al-Museo-Provincial-de-Huelva.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Visita a la Ermita de la Virgen de la Cinta",
    "descripcion": "Descubre la devoción y la historia en la visita a la Ermita de la Virgen de la Cinta, patrona de Huelva. Situada en lo alto del monte, ofrece unas vistas impresionantes de la ciudad y es un lugar de peregrinación para los habitantes de la región.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/NjJ1DBhW/Visita-a-la-Ermita-de-la-Virgen-de-la-Cinta.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Recorrido por la Ruta del Jabugo",
    "descripcion": "Explora la campiña onubense con la Ruta del Jabugo. Descubre la tradición del jamón ibérico de Huelva visitando los pueblos de la sierra donde se elabora este exquisito producto. Disfruta de paisajes únicos y deléitate con la gastronomía local.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/J7Z5LfJk/Recorrido-por-la-Ruta-del-Jabugo.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Visita a la Aldea de El Rocío",
    "descripcion": "Sumérgete en la cultura y tradiciones andaluzas visitando la pintoresca aldea de El Rocío. Descubre sus casas blancas, su ermita y su ambiente festivo, especialmente durante la Romería del Rocío, una de las celebraciones más importantes de Andalucía.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/8cRRmvDH/Visita-a-la-Aldea-de-El-Roc-o.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Senderismo en el Parque Natural de Doñana",
    "descripcion": "Embárcate en una emocionante ruta de senderismo en el Parque Natural de Doñana, donde podrás explorar una gran diversidad de ecosistemas, desde dunas hasta marismas, y observar una rica variedad de flora y fauna.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/BQ3cQmcw/Senderismo-en-el-Parque-Natural-de-Do-ana.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Visita a la Iglesia de San Pedro",
    "descripcion": "Explora la historia religiosa de Huelva visitando la Iglesia de San Pedro, un hermoso templo gótico-mudéjar situado en el casco antiguo de la ciudad. Admira sus impresionantes detalles arquitectónicos y sumérgete en su atmósfera de serenidad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/gkKyw3gc/Visita-a-la-Iglesia-de-San-Pedro.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34187583e7ca0fca3ad",
    "nombre": "Ruta por los Pueblos Blancos de la Sierra de Aracena",
    "descripcion": "Embárcate en un viaje pintoresco a través de los Pueblos Blancos de la Sierra de Aracena, donde las casas encaladas contrastan con el verde de las colinas. Descubre la autenticidad y el encanto de esta región rural de Huelva.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/yx4hRjqx/Ruta-por-los-Pueblos-Blancos-de-la-Sierra-de-Aracena.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Visita a la Catedral de Sevilla",
    "descripcion": "Descubre la imponente Catedral de Sevilla, una de las más grandes del mundo y un magnífico ejemplo de arquitectura gótica. Admira su famosa torre, La Giralda, y explora sus impresionantes naves y capillas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Gpvm2xjq/Visita-a-la-Catedral-de-Sevilla.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Paseo por el Barrio de Santa Cruz",
    "descripcion": "Recorre las estrechas calles empedradas del pintoresco Barrio de Santa Cruz, el antiguo barrio judío de Sevilla. Descubre sus encantadoras plazas, patios llenos de flores y rincones con encanto.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/02HQHQQd/Paseo-por-el-Barrio-de-Santa-Cruz.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Visita al Real Alcázar",
    "descripcion": "Explora el impresionante Real Alcázar de Sevilla, un palacio fortaleza con influencias árabes, góticas y renacentistas. Déjate sorprender por sus exuberantes jardines, sus patios decorados y sus salones ricamente ornamentados.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/htdSy1Nc/Visita-al-Real-Alc-zar.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Paseo por la Plaza de España",
    "descripcion": "Disfruta de un tranquilo paseo por la majestuosa Plaza de España, una de las plazas más emblemáticas de Sevilla. Admira sus azulejos coloridos, sus canales navegables y su arquitectura única.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/L589xKFb/Paseo-por-la-Plaza-de-Espa-a.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Espectáculo de Flamenco en Triana",
    "descripcion": "Sumérgete en la pasión y el ritmo del flamenco con un espectáculo en el histórico barrio de Triana. Disfruta de la música, el cante y el baile flamenco en un ambiente auténtico y lleno de energía.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/BQvbgDqn/Espect-culo-de-Flamenco-en-Triana.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Visita a la Torre del Oro",
    "descripcion": "Contempla las vistas panorámicas de la ciudad desde la Torre del Oro, una antigua torre de vigilancia junto al río Guadalquivir. Descubre su historia como fortaleza defensiva y su papel en el comercio marítimo de Sevilla.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/prc27G2X/Visita-a-la-Torre-del-Oro.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Ruta por los Pueblos Blancos de la Sierra Norte",
    "descripcion": "Embárcate en una ruta pintoresca por los encantadores Pueblos Blancos de la Sierra Norte de Sevilla. Descubre la belleza de sus casas encaladas, sus paisajes montañosos y su rica herencia cultural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Nj9Mhc2h/Ruta-por-los-Pueblos-Blancos-de-la-Sierra-Norte.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Visita a las Ruinas Romanas de Itálica",
    "descripcion": "Explora las impresionantes ruinas romanas de Itálica, una antigua ciudad romana situada en las afueras de Sevilla. Descubre sus mosaicos, teatros y anfiteatros que te transportarán al pasado de la Hispania romana.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/154R6QHg/Visita-a-las-Ruinas-Romanas-de-It-lica.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Senderismo en la Sierra de Aracena y Picos de Aroche",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por la Sierra de Aracena y Picos de Aroche, una región montañosa de Sevilla. Descubre sus bosques de castaños, sus cascadas y sus pueblos con encanto.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/sgk2sN5M/Senderismo-en-la-Sierra-de-Aracena-y-Picos-de-Aroche.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Visita a las Marismas del Guadalquivir",
    "descripcion": "Descubre la belleza natural de las Marismas del Guadalquivir, un ecosistema único situado cerca de Sevilla. Observa aves migratorias, flora autóctona y disfruta de un tranquilo paseo en barca por sus canales.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/rmcFtRnc/Visita-a-la-Reserva-Natural-de-la-Laguna-de-Fuente-de-Piedra.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34787583e7ca0fca3af",
    "nombre": "Visita a la Ruta de los Molinos en la Campiña Sevillana",
    "descripcion": "Descubre la historia de la producción de aceite de oliva en la Campiña Sevillana con una visita a la Ruta de los Molinos. Explora antiguos molinos restaurados y aprende sobre el proceso tradicional de elaboración del aceite.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/k4cMNMzS/Visita-a-la-Ruta-de-los-Molinos-en-la-Campi-a-Sevillana.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Mezquita-Catedral de Córdoba",
    "descripcion": "Visita la impresionante Mezquita-Catedral de Córdoba, una obra maestra de la arquitectura islámica y cristiana. Admira sus columnas y arcos de mármol, así como su rica historia que se remonta a la época medieval.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/59Spvc0M/Mezquita-Catedral-de-C-rdoba.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Alcázar de los Reyes Cristianos",
    "descripcion": "Explora el Alcázar de los Reyes Cristianos, un palacio fortificado que fue residencia de los Reyes Católicos. Pasea por sus hermosos jardines, descubre sus torres y disfruta de las vistas panorámicas de Córdoba.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/PJT4cySc/Alc-zar-de-los-Reyes-Cristianos.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Barrio de la Judería",
    "descripcion": "Recorre las estrechas calles del Barrio de la Judería, el antiguo barrio judío de Córdoba. Descubre sus patios llenos de flores, sus casas encaladas y su encanto tradicional que te transportará a otra época.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/Kv9NqnBq/Barrio-de-la-Juder-a.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Puente Romano",
    "descripcion": "Pasea por el Puente Romano de Córdoba, una estructura histórica que atraviesa el río Guadalquivir. Disfruta de las vistas del río y de la ciudad mientras exploras este antiguo puente construido durante la época romana.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/ZnHchNgq/Puente-Romano.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Festival de los Patios",
    "descripcion": "Sumérgete en la cultura cordobesa con el Festival de los Patios, una celebración anual donde los residentes abren sus patios al público y compiten por el premio al patio más hermoso. Disfruta de la belleza de las flores y la arquitectura tradicional.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/XYmg3429/Festival-de-los-Patios.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Ruta de los Pueblos Blancos",
    "descripcion": "Embárcate en una ruta por los encantadores Pueblos Blancos de la provincia de Córdoba. Descubre la autenticidad y el encanto de localidades como Zuheros, Priego de Córdoba y Iznájar, donde las casas encaladas contrastan con el azul del cielo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/HLM9kRKR/Ruta-de-los-Pueblos-Blancos.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Visita a los Baños Árabes de Medina Azahara",
    "descripcion": "Explora los Baños Árabes de Medina Azahara, una antigua ciudad palaciega situada en las afueras de Córdoba. Descubre la arquitectura islámica y la cultura de Al-Ándalus en este fascinante sitio arqueológico.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/FRgbjchx/Visita-a-los-Ba-os-rabes-de-Medina-Azahara.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Senderismo en la Sierra de Hornachuelos",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por la Sierra de Hornachuelos, un parque natural situado al norte de Córdoba. Descubre bosques de alcornoques y encinas, así como impresionantes vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/jdqc48wn/Senderismo-en-la-Sierra-de-Hornachuelos.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd34d87583e7ca0fca3b1",
    "nombre": "Ruta del Aceite de Oliva",
    "descripcion": "Embárcate en una ruta gastronómica por la provincia de Córdoba y descubre el proceso de producción del aceite de oliva virgen extra. Visita almazaras tradicionales, olivares centenarios y degusta los mejores aceites de la región.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/4xm1rm1J/Ruta-del-Aceite-de-Oliva.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Visita a la Catedral de Jaén",
    "descripcion": "Explora la majestuosa Catedral de Jaén, una joya del Renacimiento español. Admira su imponente fachada, sus impresionantes capillas y su valiosa colección de arte sacro.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/PxpWRcb2/Visita-a-la-Catedral-de-Ja-n.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Castillo de Santa Catalina",
    "descripcion": "Sube hasta lo alto del Castillo de Santa Catalina y disfruta de las vistas panorámicas de Jaén y su entorno. Descubre la historia de esta fortaleza árabe y pasea por sus jardines y murallas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/t4kNZFCt/Castillo-de-Santa-Catalina.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Museo Íbero de Jaén",
    "descripcion": "Sumérgete en la historia de la cultura ibérica en el Museo Íbero de Jaén. Descubre una impresionante colección de artefactos arqueológicos y aprende sobre la vida de los antiguos pobladores de la región.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/yNNXFWDq/Museo-bero-de-Ja-n.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Ruta del Aceite en la Sierra de Cazorla",
    "descripcion": "Embárcate en una ruta gastronómica por la Sierra de Cazorla y descubre el mundo del aceite de oliva virgen extra. Visita almazaras tradicionales, olivares centenarios y degusta los mejores aceites de la región.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/63krJ0Yw/Ruta-del-Aceite-en-la-Sierra-de-Cazorla.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Senderismo en el Parque Natural de Sierra Mágina",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por el Parque Natural de Sierra Mágina. Descubre paisajes de montaña, bosques de pinos y una gran diversidad de flora y fauna en este entorno natural único.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/8CndwDv7/Senderismo-en-el-Parque-Natural-de-Sierra-M-gina.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Visita a la Fortaleza de la Mota en Alcalá la Real",
    "descripcion": "Explora la impresionante Fortaleza de la Mota en Alcalá la Real, una antigua fortaleza árabe situada en lo alto de una colina. Descubre sus murallas, torres y patios, así como las vistas panorámicas de la campiña jiennense.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/ZYNPPG5q/Visita-a-la-Fortaleza-de-la-Mota-en-Alcal-la-Real.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Ruta por los Pueblos Blancos de la Sierra de Segura",
    "descripcion": "Embárcate en una ruta pintoresca por los encantadores Pueblos Blancos de la Sierra de Segura. Descubre la autenticidad y el encanto de localidades como Segura de la Sierra, Hornos de Segura y Santiago-Pontones.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/hvV9Sd5m/Ruta-por-los-Pueblos-Blancos-de-la-Sierra-de-Segura.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35187583e7ca0fca3b3",
    "nombre": "Visita al Parque Natural de Despeñaperros",
    "descripcion": "Descubre la belleza natural del Parque Natural de Despeñaperros, una reserva natural protegida que alberga una gran diversidad de flora y fauna. Disfruta de rutas de senderismo, cascadas y cuevas en este entorno único.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/t4pz4By4/Visita-al-Parque-Natural-de-Despe-aperros.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Visita a la Catedral de Cádiz",
    "descripcion": "Contempla la belleza de la Catedral de Cádiz, una obra maestra de la arquitectura barroca. Admira su imponente fachada, su impresionante interior y las vistas desde su torre.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/1zN4hZTn/Visita-a-la-Catedral-de-C-diz.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Paseo por la Playa de la Caleta",
    "descripcion": "Disfruta de un relajante paseo por la Playa de la Caleta, una de las playas más emblemáticas de Cádiz. Contempla sus aguas cristalinas, su arena dorada y su encanto marinero.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/c17gL0Jf/Paseo-por-la-Playa-de-la-Caleta.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Castillo de San Sebastián",
    "descripcion": "Visita el Castillo de San Sebastián, una fortaleza histórica situada en una pequeña isla frente a la costa de Cádiz. Descubre su historia marítima y disfruta de las vistas panorámicas de la ciudad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/VLYSSpSp/Castillo-de-San-Sebasti-n.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Visita al Teatro Romano de Cádiz",
    "descripcion": "Explora el Teatro Romano de Cádiz, un antiguo anfiteatro construido en el siglo I a.C. Descubre los restos arqueológicos de este impresionante edificio y aprende sobre la historia romana de la ciudad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/cHRHCBdd/Visita-al-Teatro-Romano-de-C-diz.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Ruta del Vino de Jerez",
    "descripcion": "Embárcate en una ruta enológica por la región vinícola de Jerez de la Frontera, famosa por sus vinos y sus bodegas. Visita bodegas históricas, degusta vinos sherry y descubre la tradición vitivinícola de la zona.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/Gmf95pMn/Ruta-del-Vino-de-Jerez.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Senderismo en el Parque Natural de los Alcornocales",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por el Parque Natural de los Alcornocales, uno de los bosques de alcornoques más grandes del mundo. Descubre su flora y fauna única mientras exploras sus senderos.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/bN3Z1gkJ/Parque-Natural-de-los-Alcornocales.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Visita a Vejer de la Frontera",
    "descripcion": "Descubre la belleza de Vejer de la Frontera, un encantador pueblo blanco situado en lo alto de una colina. Explora sus estrechas calles empedradas, sus casas encaladas y su impresionante vistas al campo.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/ZRtnJMtf/Visita-a-Vejer-de-la-Frontera.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Visita a la Sierra de Grazalema",
    "descripcion": "Embárcate en una visita a la Sierra de Grazalema, un parque natural de gran belleza paisajística y biodiversidad. Disfruta de sus senderos, cascadas y vistas panorámicas de montañas y valles.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/90cf7wfZ/Visita-a-la-Sierra-de-Grazalema.png",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35787583e7ca0fca3b5",
    "nombre": "Ruta de los Pueblos Blancos de la Sierra de Cádiz",
    "descripcion": "Embárcate en una ruta pintoresca por los encantadores Pueblos Blancos de la Sierra de Cádiz. Descubre la autenticidad y el encanto de localidades como Zahara de la Sierra, Grazalema y Ubrique.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/cHRHCBdd/Visita-al-Teatro-Romano-de-C-diz.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Visita al Museo Picasso Málaga",
    "descripcion": "Sumérgete en el mundo del arte moderno y contemporáneo con una visita al Museo Picasso Málaga. Explora la extensa colección del famoso pintor malagueño y disfruta de exposiciones temporales de otros artistas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/CLZ34Lfq/Visita-al-Museo-Picasso-M-laga.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Paseo por el Centro Histórico",
    "descripcion": "Recorre las pintorescas calles del Centro Histórico de Málaga y descubre su encanto único. Visita la Catedral de Málaga, el Teatro Romano, la Alcazaba y otros lugares emblemáticos de la ciudad.",
    "tipo": "ciudad",
    "img": "https://example.com/centro_historico_malaga.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Día de playa en la Malagueta",
    "descripcion": "Disfruta de un día de sol y mar en la playa de la Malagueta, una de las más populares de Málaga. Relájate en la arena, da un paseo por el paseo marítimo y prueba la deliciosa gastronomía local en los chiringuitos.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/tRm0PV7b/Paseo-por-el-Centro-Hist-rico.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Visita al Castillo de Gibralfaro",
    "descripcion": "Sube hasta el Castillo de Gibralfaro y disfruta de las impresionantes vistas panorámicas de Málaga y su costa. Descubre la historia de esta fortaleza árabe y explora sus murallas y jardines.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/nrXPT0MJ/Visita-al-Castillo-de-Gibralfaro.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Muelle Uno y Palmeral de las Sorpresas",
    "descripcion": "Pasea por el moderno Muelle Uno y el encantador Palmeral de las Sorpresas, dos espacios emblemáticos junto al puerto de Málaga. Disfruta de tiendas, restaurantes, arte urbano y vistas al mar.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/j5g1zGxc/Muelle-Uno-y-Palmeral-de-las-Sorpresas.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Senderismo en el Caminito del Rey",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por el Caminito del Rey, un espectacular desfiladero situado en el Paraje Natural del Desfiladero de los Gaitanes. Disfruta de pasarelas colgantes, puentes y vistas impresionantes.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/xdPhdXBW/Senderismo-en-el-Caminito-del-Rey.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Visita a la Reserva Natural de la Laguna de Fuente de Piedra",
    "descripcion": "Descubre la belleza natural de la Reserva Natural de la Laguna de Fuente de Piedra, un importante enclave para aves acuáticas. Observa flamencos, garzas y otras especies en su hábitat natural.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/dtzzNP8S/Visita-a-la-Reserva-Natural-de-la-Laguna-de-Fuente-de-Piedra.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Ruta de los Pueblos Blancos de la Axarquía",
    "descripcion": "Embárcate en una ruta por los encantadores Pueblos Blancos de la Axarquía, una comarca situada al este de Málaga. Descubre la autenticidad y el encanto de localidades como Frigiliana, Competa y Nerja.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/MGwgx737/Ruta-de-los-Pueblos-Blancos-de-la-Axarqu-a.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd35e87583e7ca0fca3b7",
    "nombre": "Visita a la Reserva Natural de los Montes de Málaga",
    "descripcion": "Embárcate en una visita a la Reserva Natural de los Montes de Málaga, un parque natural situado a poca distancia de la ciudad. Disfruta de senderos, miradores y la observación de la flora y fauna local.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/CLZ34Lfq/Visita-al-Museo-Picasso-M-laga.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Visita a la Alhambra y el Generalife",
    "descripcion": "Explora la majestuosa Alhambra y los exuberantes jardines del Generalife, dos joyas del patrimonio mundial en Granada. Maravíllate con la arquitectura islámica, los patios llenos de flores y las impresionantes vistas de la ciudad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/pX6226KD/Visita-a-la-Alhambra-y-el-Generalife.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Paseo por el Albaicín",
    "descripcion": "Recorre las estrechas calles del Albaicín, el barrio árabe más antiguo de Granada. Descubre sus casas encaladas, sus patios ocultos y sus miradores con vistas a la Alhambra y el Sacromonte.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/SRQys0ZG/Paseo-por-el-Albaic-n.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Visita a la Catedral de Granada",
    "descripcion": "Contempla la grandiosa Catedral de Granada, una obra maestra del Renacimiento español. Admira su imponente fachada, su interior ricamente decorado y su sagrario de estilo barroco.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/dVZJDj9g/Visita-a-la-Catedral-de-Granada.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Paseo por el Mirador de San Nicolás",
    "descripcion": "Disfruta de las mejores vistas de la Alhambra desde el Mirador de San Nicolás, en el Albaicín. Contempla el atardecer sobre la ciudad, con las montañas de Sierra Nevada como telón de fondo.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/0NgPSKWj/Paseo-por-el-Mirador-de-San-Nicol-s.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Visita al Monasterio de San Jerónimo",
    "descripcion": "Explora el impresionante Monasterio de San Jerónimo, una obra maestra del Renacimiento español. Descubre su iglesia, su claustro y su impresionante retablo mayor.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/pTRvGbtt/Visita-al-Monasterio-de-San-Jer-nimo.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Ruta por los Pueblos del Alpujarra",
    "descripcion": "Embárcate en una ruta por los encantadores pueblos de la Alpujarra, situados en las laderas de Sierra Nevada. Descubre la arquitectura tradicional, los paisajes de montaña y la rica gastronomía de la región.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/rshqRh32/Ruta-por-los-Pueblos-del-Alpujarra.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Senderismo en Los Cahorros",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por el desfiladero de Los Cahorros, en el Parque Natural de Sierra de Huétor. Cruza puentes colgantes, disfruta de cascadas y admira la belleza natural del lugar.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/nVTFWzzS/Senderismo-en-Los-Cahorros.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Visita a la Villa de Montefrío",
    "descripcion": "Descubre la belleza de la Villa de Montefrío, un encantador pueblo blanco situado en una colina. Explora sus estrechas calles, su iglesia en la cima y disfruta de las vistas panorámicas de los olivares.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/PrxXnjvX/Visita-a-la-Villa-de-Montefr-o.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Ruta por la Vega de Granada",
    "descripcion": "Embárcate en una ruta por la fértil Vega de Granada, un paisaje de huertas y campos agrícolas a los pies de Sierra Nevada. Descubre la agricultura tradicional, los antiguos molinos de agua y la belleza rural de la región.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/dVZJDj9g/Visita-a-la-Catedral-de-Granada.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36487583e7ca0fca3b9",
    "nombre": "Visita al Parque Nacional de Sierra Nevada",
    "descripcion": "Embárcate en una visita al Parque Nacional de Sierra Nevada, un paraíso natural de montañas, bosques y lagos. Disfruta de actividades al aire libre como senderismo, esquí y observación de la flora y fauna.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/QMpsJNwb/Visita-al-Parque-Nacional-de-Sierra-Nevada.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Visita a la Alcazaba de Almería",
    "descripcion": "Explora la impresionante Alcazaba de Almería, una fortaleza árabe del siglo X que domina la ciudad desde lo alto de una colina. Descubre sus murallas, torres y patios, y disfruta de las vistas panorámicas.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/KzzpH5QJ/Visita-a-la-Alcazaba-de-Almer-a.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Paseo por el Centro Histórico",
    "descripcion": "Recorre las pintorescas calles del Centro Histórico de Almería y descubre su rica historia y arquitectura. Visita la Catedral de la Encarnación, la Plaza Vieja y otros lugares emblemáticos de la ciudad.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/3Rcf5Dc7/Paseo-por-el-Centro-Hist-rico.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Visita al Parque Nicolás Salmerón",
    "descripcion": "Disfruta de un paseo tranquilo por el Parque Nicolás Salmerón, un oasis verde en el corazón de Almería. Relájate junto al lago, admira la vegetación exuberante y disfruta de actividades al aire libre.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/x1P2rty2/Visita-al-Parque-Nicol-s-Salmer-n.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Visita al Museo de Arte de Almería",
    "descripcion": "Sumérgete en el arte y la cultura de Almería con una visita al Museo de Arte de Almería. Descubre su colección permanente y exposiciones temporales de arte contemporáneo, arqueología y más.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/FHv4n2Sp/Visita-al-Museo-de-Arte-de-Almer-a.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Paseo por el Paseo Marítimo",
    "descripcion": "Disfruta de un relajante paseo por el Paseo Marítimo de Almería, bordeado de palmeras y con vistas al mar Mediterráneo. Respira el aire fresco, contempla las playas y disfruta de la brisa marina.",
    "tipo": "ciudad",
    "img": "https://i.postimg.cc/xTMQ50Xq/Paseo-por-el-Paseo-Mar-timo.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Ruta por el Parque Natural de Cabo de Gata-Níjar",
    "descripcion": "Embárcate en una aventura natural por el Parque Natural de Cabo de Gata-Níjar, un paraíso de playas vírgenes, acantilados impresionantes y paisajes desérticos. Disfruta de senderismo, buceo, kayak y más.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/5tpkgr5X/Ruta-por-el-Parque-Natural-de-Cabo-de-Gata-N-jar.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Visita a la Fortaleza de Santa Cruz de la Venta",
    "descripcion": "Descubre la historia medieval de Almería con una visita a la Fortaleza de Santa Cruz de la Venta, una antigua fortificación árabe enclavada en un paisaje montañoso. Explora sus ruinas y disfruta de las vistas panorámicas.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/DmVCm3hM/Visita-a-la-Fortaleza-de-Santa-Cruz-de-la-Venta.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Senderismo en la Sierra de los Filabres",
    "descripcion": "Embárcate en una emocionante aventura de senderismo por la Sierra de los Filabres, una cadena montañosa que ofrece espectaculares vistas y rutas para todos los niveles. Descubre la flora y fauna únicas de la región.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/nr9RHcym/Senderismo-en-la-Sierra-de-los-Filabres.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Visita a los Pueblos de la Alpujarra Almeriense",
    "descripcion": "Embárcate en una ruta por los encantadores pueblos de la Alpujarra Almeriense, donde las casas blancas y las terrazas de cultivo se aferran a las laderas de las montañas. Descubre la artesanía local, la gastronomía y la hospitalidad.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/SQXkXLq6/Visita-a-los-Pueblos-de-la-Alpujarra-Almeriense.jpg",
    "comunidad": "Andalucía"
  },
  {
    "provincia": "661cd36987583e7ca0fca3bb",
    "nombre": "Ruta por el Desierto de Tabernas",
    "descripcion": "Explora el único desierto de Europa con una ruta por el Desierto de Tabernas, un paisaje árido y salvaje que ha sido escenario de numerosas películas del oeste. Descubre su flora y fauna adaptadas a las duras condiciones.",
    "tipo": "rural",
    "img": "https://i.postimg.cc/RCj9w3Vj/Ruta-por-el-Desierto-de-Tabernas.jpg",
    "comunidad": "Andalucía"
  },
  {
    "nombre": "Parque de las Cuevas del Almanzora",
    "img": "https://i.postimg.cc/wjy559Y6/106182.jpg",
    "descripcion": "Visita el Parque de las Cuevas del Almanzora en pleno centro de Melilla. Este parque urbano te ofrece áreas verdes, zonas de juegos para niños y rutas para caminar. Disfruta de un día al aire libre en este oasis urbano.",
    "provincia": "661cd3aa87583e7ca0fca3c7",
    "comunidad": "Melilla",
    "tipo": "ciudad"
},
  {
    "nombre": "Museo de Melilla",
    "img": "https://i.postimg.cc/q7LnkSxV/fachada-museo.jpg",
    "descripcion": "Explora el Museo de Melilla y sumérgete en la historia y cultura de la región. Este museo urbano alberga una colección de arte, artefactos históricos y exposiciones temporales que te ofrecerán una visión completa de Melilla.",
    "provincia": "661cd3aa87583e7ca0fca3c7",
    "comunidad": "Melilla",
    "tipo": "ciudad"
  },
  {
    "nombre": "Mercado Central de Melilla",
    "img": "https://i.postimg.cc/fL38JYWv/4138953967-c45cb76419.jpg",
    "descripcion": "Visita el Mercado Central de Melilla y descubre la gastronomía local. Este mercado urbano te ofrece una amplia variedad de productos frescos, como frutas, verduras, pescados y carnes, así como productos artesanales.",
    "provincia": "661cd3aa87583e7ca0fca3c7",
    "comunidad": "Melilla",
    "tipo": "ciudad"
  },
  {
    "nombre": "Parque Natural de las Sierras de Melilla",
    "img": "https://i.postimg.cc/3JCNP6jg/a-rio-mund-a.avif",
    "descripcion": "Adéntrate en el Parque Natural de las Sierras de Melilla y disfruta de la naturaleza en su estado más puro. Realiza senderismo, observa la fauna y flora local y disfruta de las vistas panorámicas de la región.",
    "provincia": "661cd3aa87583e7ca0fca3c7",
    "comunidad": "Melilla",
    "tipo": "rural"
  },
  {
    "nombre": "Ruta de las Fortalezas de Melilla",
    "img": "https://i.postimg.cc/HnSYLG6K/Galapagos01.jpg",
    "descripcion": "Sigue la Ruta de las Fortalezas de Melilla y descubre las antiguas fortificaciones que protegían la ciudad. Esta ruta rural te llevará a través de caminos históricos y paisajes impresionantes.",
    "provincia": "661cd3aa87583e7ca0fca3c7",
    "comunidad": "Melilla",
    "tipo": "rural"
  },
  {
    "nombre": "Playa de la Hípica",
    "img": "https://i.postimg.cc/8zXZmZYS/playa-de-la-hipica.jpg",
    "descripcion": "Relájate en la Playa de la Hípica, una tranquila playa rural en Melilla. Disfruta del sol, el mar y la arena, y practica deportes acuáticos como el kayak o el snorkel en aguas cristalinas.",
    "provincia": "661cd3aa87583e7ca0fca3c7",
    "comunidad": "Melilla",
    "tipo": "rural"
  },
  {
    "nombre": "Parque del Mediterráneo",
    "img": "https://i.postimg.cc/25xJr9BP/Parque-del-Mediterr-neo.jpg",
    "descripcion": "Visita el Parque del Mediterráneo en pleno corazón de Ceuta. Este parque urbano te ofrece zonas verdes, áreas de descanso y hermosas vistas al mar Mediterráneo. Es el lugar perfecto para relajarse y disfrutar de la naturaleza.",
    "provincia": "661cd3a587583e7ca0fca3c5",
    "comunidad": "Ceuta",
    "tipo": "ciudad"
  },
  {
    "nombre": "Museo de Ceuta",
    "img": "https://i.postimg.cc/qvGVvvPb/Museo-de-Ceuta.jpg",
    "descripcion": "Explora el Museo de Ceuta y descubre la rica historia y cultura de la ciudad. Este museo urbano alberga una colección de arte, artefactos históricos y exposiciones que te ofrecerán una visión completa de Ceuta.",
    "provincia": "661cd3a587583e7ca0fca3c5",
    "comunidad": "Ceuta",
    "tipo": "ciudad"
  },
  {
    "nombre": "Parque Natural del Monte Hacho",
    "img": "https://i.postimg.cc/G3DfppYF/Parque-Natural-del-Monte-Hacho.jpg",
    "descripcion": "Adéntrate en el Parque Natural del Monte Hacho y disfruta de la naturaleza en su estado más puro. Realiza senderismo, observa la fauna y flora local y disfruta de las vistas panorámicas de Ceuta y el estrecho de Gibraltar.",
    "provincia": "661cd3a587583e7ca0fca3c5",
    "comunidad": "Ceuta",
    "tipo": "rural"
  },
  {
    "nombre": "Playa de la Ribera",
    "img": "https://i.postimg.cc/zGQwWCYV/Playa-de-la-Ribera.jpg",
    "descripcion": "Relájate en la Playa de la Ribera, una tranquila playa rural en Ceuta. Disfruta del sol, el mar y la arena, y practica deportes acuáticos como el kayak o el snorkel en aguas cristalinas.",
    "provincia": "661cd3a587583e7ca0fca3c5",
    "comunidad": "Ceuta",
    "tipo": "rural"
  },
  {
    "nombre": "Ruta de los Miradores de Ceuta",
    "img": "https://i.postimg.cc/s2Bk94B8/Ruta-de-los-Miradores-de-Ceuta.jpg",
    "descripcion": "Sigue la Ruta de los Miradores de Ceuta y disfruta de las espectaculares vistas panorámicas de la ciudad, el mar Mediterráneo y el estrecho de Gibraltar. Esta ruta rural te llevará a través de caminos históricos y paisajes impresionantes.",
    "provincia": "661cd3a587583e7ca0fca3c5",
    "comunidad": "Ceuta",
    "tipo": "rural"
  },
  {
    "nombre": "Catedral de Palma de Mallorca",
    "img": "https://i.postimg.cc/dQnFyvVh/Catedral-de-Palma-de-Mallorca.jpg",
    "descripcion": "Visita la majestuosa Catedral de Palma de Mallorca, una joya arquitectónica gótica situada en el corazón de la ciudad.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "ciudad"
  },
  {
    "nombre": "Castillo de Bellver",
    "img": "https://i.postimg.cc/DyMKxgsF/Castillo-de-Bellver.jpg",
    "descripcion": "Explora el Castillo de Bellver en Palma de Mallorca, una fortaleza medieval con vistas panorámicas de la ciudad y la bahía.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "ciudad"
  },
  {
    "nombre": "Mercado de Santa Catalina",
    "img": "https://i.postimg.cc/BvWf0nMV/Mercado-de-Santa-Catalina.jpg",
    "descripcion": "Visita el Mercado de Santa Catalina en Palma de Mallorca y descubre la gastronomía local.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "ciudad"
  },
  {
    "nombre": "Catedral de Ibiza",
    "img": "https://i.postimg.cc/L8gFw1BP/Catedral-de-Ibiza.jpg",
    "descripcion": "Visita la Catedral de Ibiza, una impresionante construcción gótica que domina el casco antiguo de la ciudad.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "ciudad"
  },
  {
    "nombre": "Mercado Viejo de Ciutadella",
    "img": "https://i.postimg.cc/J0TWV32N/mercado-menorca.jpg",
    "descripcion": "Explora el Mercado Viejo de Ciutadella en Menorca y descubre productos locales y artesanía.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "ciudad"
  },
  {
    "nombre": "Parque Natural de Mondragó",
    "img": "https://i.postimg.cc/xdbx9Gcv/Parque-Natural-de-Mondrag.avif",
    "descripcion": "Adéntrate en el Parque Natural de Mondragó en Mallorca y disfruta de la naturaleza en su estado más puro.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "rural"
  },
  {
    "nombre": "Ruta de las Cuevas de Artà",
    "img": "https://i.postimg.cc/pTb0r9Fg/Ruta-de-las-Cuevas-de-Art.jpg",
    "descripcion": "Sigue la Ruta de las Cuevas de Artà en Mallorca y descubre las impresionantes cuevas naturales.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "rural"
  },
  {
    "nombre": "Playa de Es Trenc",
    "img": "https://i.postimg.cc/MpL3k3KZ/Playa-de-Es-Trenc.jpg",
    "descripcion": "Relájate en la Playa de Es Trenc en Mallorca, una de las playas más famosas de la isla.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "rural"
  },
  {
    "nombre": "Camí de Cavalls en Menorca",
    "img": "https://i.postimg.cc/SxR1vb4t/Cam-de-Cavalls-en-Menorca.jpg",
    "descripcion": "Recorre el Camí de Cavalls en Menorca, un sendero costero que te llevará a descubrir calas escondidas y paisajes impresionantes.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "rural"
  },
  {
    "nombre": "Serra de Tramuntana en Mallorca",
    "img": "https://i.postimg.cc/FsDnpsML/Serra-de-Tramuntana-en-Mallorca.jpg",
    "descripcion": "Adéntrate en la Serra de Tramuntana en Mallorca, una impresionante sierra declarada Patrimonio de la Humanidad por la UNESCO.",
    "provincia": "661cd39087583e7ca0fca3c3",
    "comunidad": "Islas Baleares",
    "tipo": "rural"
  },
  {
    "nombre": "Playa de Las Canteras",
    "img": "https://i.postimg.cc/4dkMY9QV/Playa-de-Las-Canteras.jpg",
    "descripcion": "Relájate en la Playa de Las Canteras en Gran Canaria, una de las playas urbanas más famosas de España. Disfruta del sol, el mar y las vistas al famoso Arrecife de Las Canteras.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Parque Santa Catalina",
    "img": "https://i.postimg.cc/R0nyCRKv/Parque-Santa-Catalina.jpg",
    "descripcion": "Pasea por el Parque Santa Catalina en Las Palmas de Gran Canaria, un lugar vibrante con eventos culturales, mercados y una amplia variedad de restaurantes y cafés.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Puerto de Mogán",
    "img": "https://i.postimg.cc/4x0jTMK8/Puerto-de-Mog-n.jpg",
    "descripcion": "Visita el encantador Puerto de Mogán en Gran Canaria, conocido como 'la pequeña Venecia' por sus canales y pintorescas casas blancas. Disfruta de los restaurantes y tiendas locales.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Catedral de Santa Ana",
    "img": "https://i.postimg.cc/FHzw8mKd/Catedral-de-Santa-Ana.jpg",
    "descripcion": "Explora la Catedral de Santa Ana en Las Palmas de Gran Canaria, una impresionante iglesia de estilo gótico que es uno de los principales puntos de interés de la ciudad.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Roque Nublo",
    "img": "https://i.postimg.cc/4xr7hf7p/Roque-Nublo.jpg",
    "descripcion": "Sube al Roque Nublo en Gran Canaria, un impresionante monolito de origen volcánico que ofrece unas vistas panorámicas espectaculares de la isla. Es un lugar ideal para los amantes del senderismo y la naturaleza.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Dunas de Maspalomas",
    "img": "https://i.postimg.cc/SN1zk7mT/Dunas-de-Maspalomas.jpg",
    "descripcion": "Descubre las Dunas de Maspalomas en Gran Canaria, un impresionante paisaje natural de dunas doradas junto al mar. Este espacio protegido es perfecto para caminar y disfrutar de la naturaleza.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Caldera de Taburiente",
    "img": "https://i.postimg.cc/L8qgXYXH/Caldera-de-Taburiente.jpg",
    "descripcion": "Adéntrate en la Caldera de Taburiente en La Palma, una impresionante formación geológica con paisajes espectaculares y rutas de senderismo. Es uno de los lugares más emblemáticos de las Islas Canarias.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Barranco de Guayadeque",
    "img": "https://i.postimg.cc/5N2FhkWQ/Barranco-de-Guayadeque.jpg",
    "descripcion": "Visita el Barranco de Guayadeque en Gran Canaria, un hermoso barranco lleno de vegetación y cuevas naturales. Es un lugar perfecto para realizar senderismo y descubrir la biodiversidad de la isla.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Mirador del Río en Lanzarote",
    "img": "https://i.postimg.cc/NG4HPvSw/Mirador-del-R-o-en-Lanzarote.jpg",
    "descripcion": "Disfruta de las impresionantes vistas desde el Mirador del Río en Lanzarote, un mirador situado en un acantilado con vistas panorámicas de La Graciosa y el Archipiélago Chinijo.",
    "provincia": "661cd38487583e7ca0fca3c1",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Plaza de España",
    "img": "https://i.postimg.cc/FKHX857f/Plaza-de-Espa-a.jpg",
    "descripcion": "Visita la Plaza de España en Santa Cruz de Tenerife, el corazón de la ciudad donde podrás admirar la arquitectura moderna y disfrutar de las fuentes y jardines.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Auditorio de Tenerife",
    "img": "https://i.postimg.cc/YqBKkmvB/Auditorio-de-Tenerife.jpg",
    "descripcion": "Explora el impresionante Auditorio de Tenerife, una obra maestra de la arquitectura moderna diseñada por Santiago Calatrava. Disfruta de eventos culturales y conciertos.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Mercado de Nuestra Señora de África",
    "img": "https://i.postimg.cc/NMWhKKbT/Mercado-de-Nuestra-Se-ora-de-frica.jpg",
    "descripcion": "Visita el Mercado de Nuestra Señora de África en Santa Cruz de Tenerife, un mercado tradicional donde podrás comprar productos locales y degustar la gastronomía canaria.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Museo de la Naturaleza y el Hombre",
    "img": "https://i.postimg.cc/q7DHdb31/Museo-de-la-Naturaleza-y-el-Hombre.jpg",
    "descripcion": "Visita el Museo de la Naturaleza y el Hombre en Santa Cruz de Tenerife, donde podrás conocer la historia natural y cultural de las Islas Canarias.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "ciudad"
  },
  {
    "nombre": "Parque Nacional del Teide",
    "img": "https://i.postimg.cc/xjzDWPTP/Parque-Nacional-del-Teide.jpg",
    "descripcion": "Descubre el Parque Nacional del Teide en Tenerife, un impresionante paisaje volcánico dominado por el Teide, el pico más alto de España. Realiza senderismo y disfruta de las vistas panorámicas.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Bosque de Anaga",
    "img": "https://i.postimg.cc/4ytDVXF0/Bosque-de-Anaga.jpg",
    "descripcion": "Adéntrate en el Bosque de Anaga en Tenerife, una reserva natural con impresionantes paisajes de montaña, senderos de senderismo y una rica biodiversidad.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Acantilados de Los Gigantes",
    "img": "https://i.postimg.cc/X7KMv75G/Acantilados-de-Los-Gigantes.jpg",
    "descripcion": "Visita los Acantilados de Los Gigantes en Tenerife, unos impresionantes acantilados que se elevan sobre el mar. Disfruta de las vistas panorámicas y realiza excursiones en barco.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "Masca",
    "img": "https://i.postimg.cc/bwTjmNNc/Masca.jpg",
    "descripcion": "Explora el pintoresco pueblo de Masca en Tenerife, situado en un impresionante barranco. Realiza senderismo por sus senderos y disfruta de las vistas panorámicas.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "rural"
  },
  {
    "nombre": "La Gomera",
    "img": "https://i.postimg.cc/htgB87n1/La-Gomera.jpg",
    "descripcion": "Visita la isla de La Gomera, situada cerca de Tenerife. Descubre sus paisajes naturales, senderos de senderismo y cultura local, incluido el silbo gomero, una forma de comunicación silbada.",
    "provincia": "661cd37b87583e7ca0fca3bf",
    "comunidad": "Canarias",
    "tipo": "rural"
  }
]


mongoose.connect(process.env.conectStream)
.then(async () => {
    const allActividades = await Actividad.find();
    if(allActividades.length > 0){
        await Actividad.collection.drop();
        console.log("Actividades borradas");
    }
})
.catch((error) => console.log("error borrando Actividades", error))
.then(async () => {
    const actividadMap = arrayActividades.map((actividad) => new Actividad(actividad));
    await Actividad.insertMany(actividadMap);
    console.log("Actividades insertadas");
})
.catch((error) => console.log("error insertando Actividades", error))
.finally(() => mongoose.disconnect());