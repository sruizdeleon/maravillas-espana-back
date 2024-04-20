require("dotenv").config();

const mongoose = require('mongoose');

const Actividad = require('../models/activity.model');

const arrayActividades = [
  {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Catedral de León",
      "descripcion": "Contempla la impresionante arquitectura gótica de la Catedral de León, una de las más destacadas de España.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/Z0yKCQKX",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Barrio Húmedo",
      "descripcion": "Sumérgete en la vida nocturna de León en el Barrio Húmedo, conocido por sus animados bares de tapas y ambiente festivo.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/Mv76YjBD",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Museo de Arte Contemporáneo de Castilla y León (MUSAC)",
      "descripcion": "Explora el arte contemporáneo en este innovador museo que alberga una variedad de exposiciones y eventos culturales.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/FfWsL5SX",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Murallas de León",
      "descripcion": "Recorre las antiguas murallas de León y admira las vistas panorámicas de la ciudad desde lo alto de sus torres.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/bDZY0C0D",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Ruta del Cares",
      "descripcion": "Embárcate en esta espectacular ruta de senderismo que atraviesa el desfiladero del río Cares, ofreciendo vistas impresionantes de los Picos de Europa.",
      "tipo": "rural",
      "img": "https://postimg.cc/0Km8FzB9",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Visita a las Médulas",
      "descripcion": "Explora este paisaje único formado por antiguas minas de oro romanas, ahora declarado Patrimonio de la Humanidad por la UNESCO.",
      "tipo": "rural",
      "img": "https://postimg.cc/xkT18TcP",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Visita a los Pueblos de los Ancares",
      "descripcion": "Recorre los encantadores pueblos de montaña de la comarca de los Ancares y descubre su arquitectura tradicional y su estilo de vida rural.",
      "tipo": "rural",
      "img": "https://postimg.cc/N5qGTxKF",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661c09a6ab5c0cb25b8e9d7f",
      "nombre": "Cuevas de Valporquero",
      "descripcion": "Explora las fascinantes Cuevas de Valporquero, un complejo kárstico subterráneo en la provincia de León. Descubre sus impresionantes formaciones geológicas, como estalactitas y estalagmitas, mientras te adentras en sus galerías y salas.",
      "tipo": "rural",
      "img": "https://postimg.cc/xkT18TcP",
      "comunidad": "Castilla y León"
    },
    
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Plaza Mayor de Burgos",
      "descripcion": "Disfruta del bullicio y la vida cotidiana en la Plaza Mayor de Burgos, rodeada de edificios históricos y animados cafés.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/ZW9f18w6",
      "comunidad": "Castilla y Leon"

    },
    {
      "nombre": "Catedral de Burgos",
      "img": "https://postimg.cc/5Qx7GDrt",
      "descripcion": "La Catedral de Santa María de Burgos es un impresionante ejemplo del arte gótico en España. Construida entre los siglos XIII y XVI, es conocida por su majestuosa arquitectura, sus vidrieras espectaculares y sus numerosas esculturas. Es uno de los principales monumentos de Burgos y un importante lugar de peregrinación en el Camino de Santiago.",
      "provincia": "661cd0dbcab02767690bce6d",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Paseo por el Paseo del Espolón",
      "descripcion": "Relájate y disfruta de un agradable paseo por el Paseo del Espolón, bordeado de árboles y bancos, y con vistas al río Arlanzón.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/QFR6sFzw",
      "comunidad": "Castilla y Leon"

    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Museo de la Lengua Castellana",
      "descripcion": "Descubre la riqueza y la evolución del idioma castellano en este interesante museo ubicado en Burgos.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/svH6664V",
      "comunidad": "Castilla y Leon"

    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Mercado de Abastos de Burgos",
      "descripcion": "Sumérgete en la vida local de Burgos visitando su animado mercado de abastos, donde encontrarás productos frescos y tradicionales.",
      "tipo": "ciudad",
      "img": "https://postimg.cc/nsB3LHbz",
      "comunidad": "Castilla y Leon"

    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Ruta de Senderismo por el Cañón del Ebro",
      "descripcion": "Explora la belleza natural del Cañón del Ebro en una emocionante ruta de senderismo que te llevará a través de paisajes impresionantes.",
      "tipo": "rural",
      "img": "https://postimg.cc/bdwkdz1v",
      "comunidad": "Castilla y Leon"

    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Visita a los Pueblos del Valle de Valdebezana",
      "descripcion": "Recorre los pintorescos pueblos del Valle de Valdebezana y descubre su encanto rural, sus tradiciones y su rica historia.",
      "tipo": "rural",
      "img": "https://postimg.cc/NLCTHWxk",
      "comunidad": "Castilla y Leon"

    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Visita a los Monasterios del Valle de Manzanedo",
      "descripcion": "Descubre la espiritualidad y la historia de los monasterios del Valle de Manzanedo, joyas del arte románico en Burgos.",
      "tipo": "rural",
      "img": "https://ejemplo.com/imagen_monasterios_valle_manzanedo_burgos.jpg",
      "comunidad": "Castilla y Leon"
    },
    {
      "provincia": "661cd0dbcab02767690bce6d",
      "nombre": "Avistamiento de Aves en el Parque Natural de las Hoces del Alto Ebro y Rudrón",
      "descripcion": "Observa la rica avifauna del Parque Natural de las Hoces del Alto Ebro y Rudrón en una experiencia de avistamiento de aves en plena naturaleza.",
      "tipo": "rural",
      "img": "https://postimg.cc/w3VbJTtR",
      "comunidad": "Castilla y Leon"

    },
    {
      "nombre": "Catedral de Palencia",
      "img": "https://postimg.cc/mt2RFgwt",
      "descripcion": "Visita la hermosa Catedral de Palencia, un destacado ejemplo del arte gótico español con una rica historia y magnífica arquitectura.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
    },
    {
      "nombre": "Plaza Mayor de Palencia",
      "img": "https://postimg.cc/cth9SZgz",
      "descripcion": "Disfruta de la atmósfera animada y la arquitectura histórica de la Plaza Mayor de Palencia, un lugar perfecto para relajarse y disfrutar de un café.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
    },
    {
      "nombre": "Museo Diocesano de Palencia",
      "img": "https://postimg.cc/0KPWFrQm",
      "descripcion": "Explora la historia religiosa y el arte sacro en el Museo Diocesano de Palencia, que alberga una valiosa colección de obras de arte y artefactos religiosos.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
    },
    {
      "nombre": "https://postimg.cc/pyBRTFKw",
      "img": "https://ejemplo.com/imagen_monasterio_san_zoilo_palencia.jpg",
      "descripcion": "Visita el Monasterio de San Zoilo en la localidad de Carrión de los Condes, un impresionante complejo monástico con una rica historia y una arquitectura fascinante.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
    },
    {
      "nombre": "Visita al Castillo de Fuentes de Valdepero",
      "img": "https://postimg.cc/mh4TBw13",
      "descripcion": "Descubre la historia medieval de la provincia explorando el Castillo de Fuentes de Valdepero, una impresionante fortaleza que se alza sobre la llanura castellana.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
    },
    {
      "nombre": "Ruta de los Palacios de Palencia",
      "img": "https://postimg.cc/qh8D12k4",
      "descripcion": "Recorre la ciudad de Palencia siguiendo la Ruta de los Palacios, que te llevará a través de los elegantes palacetes y edificios históricos de la ciudad.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
    },
    {
      "nombre": "Visita a los Pueblos de la Ruta del Románico",
      "img": "https://postimg.cc/216JCqx7",
      "descripcion": "Recorre los encantadores pueblos de la Ruta del Románico en Palencia, donde podrás admirar iglesias y ermitas románicas de gran belleza arquitectónica.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
    },
    {
      "nombre": "https://postimg.cc/DW4MbtHW",
      "img": "https://ejemplo.com/imagen_reserva_natural_fuentes_carrionas_palencia.jpg",
      "descripcion": "Descubre la belleza natural de la Reserva Natural de Fuentes Carrionas y Fuente Cobre-Montaña Palentina, hogar de una variada fauna y flora.",
      "provincia": "661cd0e3cab02767690bce6f",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
    },
    {
      "_id": "661cf6e93efab228a11f8004",
      "nombre": "Plaza Mayor de Valladolid",
      "img": "https://postimg.cc/p5fPDscv",
      "descripcion": "Disfruta del encanto y la vida cotidiana en la Plaza Mayor de Valladolid, rodeada de edificios históricos y animados cafés.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
  },
  {
      "_id": "661cf6f63efab228a11f8006",
      "nombre": "Catedral de Nuestra Señora de la Asunción",
      "img": "https://postimg.cc/n9bHjykT",
      "descripcion": "Visita la majestuosa Catedral de Nuestra Señora de la Asunción de Valladolid, una obra maestra del gótico español con una impresionante fachada y rica historia.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
  },
  {
      "_id": "661cf7083efab228a11f8008",
      "nombre": "Monasterio de San Joaquín y Santa Ana",
      "img": "https://postimg.cc/NyFGW7F8",
      "descripcion": "Visita el Monasterio de San Joaquín y Santa Ana, un tranquilo oasis en el corazón de Valladolid, conocido por su arquitectura barroca y su ambiente sereno.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
  },
  {
      "_id": "661cf7533efab228a11f800a",
      "nombre": "Parque Grande de Valladolid",
      "img": "https://postimg.cc/yJG6Bg3M",
      "descripcion": "Explora el Parque Grande de Valladolid, un hermoso espacio verde que ofrece una escapada tranquila del bullicio de la ciudad. Este parque es perfecto para pasear, hacer picnic o simplemente relajarse rodeado de naturaleza.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "ciudad"
  },
  {
      "_id": "661cf7753efab228a11f800c",
      "nombre": "Ruta de Senderismo por los Montes Torozos",
      "img": "https://postimg.cc/bZzwRjjB",
      "descripcion": "Embárcate en una emocionante ruta de senderismo por los Montes Torozos, descubriendo paisajes naturales y una gran diversidad de flora y fauna.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
  },
  {
      "_id": "661cf77f3efab228a11f800e",
      "nombre": "Visita a los Pueblos de la Ruta del Vino de Cigales",
      "img": "https://postimg.cc/2VYkzf3S",
      "descripcion": "Recorre los encantadores pueblos de la Ruta del Vino de Cigales en Valladolid, donde podrás disfrutar de catas de vino y visitas a bodegas.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
  },
  {
      "_id": "661cf78a3efab228a11f8010",
      "nombre": "Turismo Rural en Casa Rural en Tierras de Medina",
      "img": "https://postimg.cc/kDKM35JH",
      "descripcion": "Escápate del ajetreo de la ciudad y disfruta de la paz y la tranquilidad del campo alojándote en una acogedora casa rural en Tierras de Medina.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
  },
  {
      "_id": "661cf7933efab228a11f8012",
      "nombre": "Visita a las Lagunas de Villafáfila",
      "img": "https://postimg.cc/rDQFnYVF",
      "descripcion": "Descubre la belleza natural de las Lagunas de Villafáfila, un importante humedal en Valladolid que alberga una gran diversidad de aves acuáticas.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
  },
  {
      "_id": "661cf79e3efab228a11f8014",
      "nombre": "Visita al Castillo de Portillo",
      "img": "https://postimg.cc/TLWdPdrp",
      "descripcion": "Descubre la historia medieval de Valladolid visitando el Castillo de Portillo, una fortaleza que ofrece impresionantes vistas panorámicas de la región.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
  },
  {
      "_id": "661cf7aa3efab228a11f8016",
      "nombre": "Avistamiento de Aves en el Parque Natural de las Arribes del Duero",
      "img": "https://postimg.cc/HV0L5kFM",
      "descripcion": "Observa la espectacular fauna del Parque Natural de las Arribes del Duero en una experiencia de avistamiento de aves, donde podrás ver rapaces y aves acuáticas.",
      "provincia": "661cd0eccab02767690bce71",
      "comunidad": "Castilla y Leon",
      "tipo": "rural"
  },
  {
    "_id": "661cf7c23efab228a11f8018",
    "nombre": "Alcázar de Segovia",
    "img": "https://postimg.cc/y3WnSN1C",
    "descripcion": "Visita el imponente Alcázar de Segovia, un castillo de cuento de hadas que se alza sobre un promontorio rocoso con vistas panorámicas de la ciudad.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7d13efab228a11f801a",
    "nombre": "Catedral de Segovia",
    "img": "https://postimg.cc/G4D7Q9kc",
    "descripcion": "Explora la majestuosa Catedral de Segovia, una joya del gótico español con una impresionante fachada y un rico patrimonio artístico.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7da3efab228a11f801c",
    "nombre": "Barrio Judío",
    "img": "https://postimg.cc/f3hHgZKY",
    "descripcion": "Recorre las estrechas calles del pintoresco Barrio Judío de Segovia, donde podrás admirar la arquitectura medieval y descubrir la historia de la comunidad judía.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7e73efab228a11f801e",
    "nombre": "Plaza Mayor de Segovia",
    "img": "https://postimg.cc/r0fQm4L9",
    "descripcion": "Disfruta del ambiente animado y la arquitectura histórica en la Plaza Mayor de Segovia, rodeada de edificios emblemáticos y terrazas de cafés.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf7f33efab228a11f8020",
    "nombre": "Ruta de Senderismo por las Hoces del Río Duratón",
    "img": "https://postimg.cc/KkG0xNCz",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por las Hoces del Río Duratón, descubriendo paisajes impresionantes y una rica fauna y flora.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf7fc3efab228a11f8022",
    "nombre": "Visita a los Pueblos de la Sierra de Guadarrama",
    "img": "https://postimg.cc/Whhfd5zq",
    "descripcion": "Recorre los encantadores pueblos de la Sierra de Guadarrama en Segovia, donde podrás disfrutar de la naturaleza y la tranquilidad del campo.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf8093efab228a11f8024",
    "nombre": "Visita a las Cuevas de los Enebralejos",
    "img": "https://postimg.cc/PLzSgc39",
    "descripcion": "Descubre las misteriosas Cuevas de los Enebralejos, una impresionante red de cuevas y galerías subterráneas con formaciones geológicas únicas.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf83b3efab228a11f8026",
    "nombre": "Visita al Castillo de Coca",
    "img": "https://postimg.cc/hhG2Y29Z",
    "descripcion": "Descubre la historia medieval de Segovia visitando el Castillo de Coca, una impresionante fortaleza de ladrillo rojo considerada una joya del mudéjar español.",
    "provincia": "661cd0f4cab02767690bce73",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf84c3efab228a11f8028",
    "nombre": "Parque del Castillo",
    "img": "https://postimg.cc/bG0dhHjs",
    "descripcion": "Disfruta de un tranquilo paseo por el Parque del Castillo, que ofrece hermosas vistas panorámicas de la ciudad de Soria y cuenta con zonas verdes para relajarse.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8563efab228a11f802a",
    "nombre": "Plaza Mayor de Soria",
    "img": "https://postimg.cc/8jF55VS8",
    "descripcion": "Sumérgete en la vida local de Soria visitando la Plaza Mayor, un animado centro de encuentro rodeado de edificios históricos y terrazas de cafés.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "nombre": "Catedral de Soria",
    "img": "https://postimg.cc/942FJRqV",
    "descripcion": "Visita la impresionante Catedral de Soria, una joya del gótico español con una impresionante fachada y un rico patrimonio artístico en su interior.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf86d3efab228a11f802e",
    "nombre": "Museo Numantino",
    "img": "https://postimg.cc/5jKyb2Dq",
    "descripcion": "Explora la historia y la arqueología de la región en el Museo Numantino de Soria, que alberga una importante colección de artefactos prehistóricos y romanos.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8793efab228a11f8030",
    "nombre": "Iglesia de San Juan de Rabanera",
    "img": "https://postimg.cc/cKG62k2p",
    "descripcion": "Descubre la arquitectura románica de Soria visitando la Iglesia de San Juan de Rabanera, una de las iglesias más antiguas y emblemáticas de la ciudad.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8853efab228a11f8032",
    "nombre": "Ruta de Senderismo por el Cañón del Río Lobos",
    "img": "https://postimg.cc/y3xNcM3Z",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por el espectacular Cañón del Río Lobos, descubriendo paisajes impresionantes y una rica fauna y flora.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf88d3efab228a11f8034",
    "nombre": "Visita a los Pueblos de la Sierra de Urbión",
    "img": "https://postimg.cc/VrD6Sfvw",
    "descripcion": "Recorre los encantadores pueblos de la Sierra de Urbión en Soria, donde podrás disfrutar de la naturaleza y la tranquilidad del campo.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf8983efab228a11f8036",
    "nombre": "Visita a las Ruinas de Numancia",
    "img": "https://postimg.cc/N5W02PsK",
    "descripcion": "Descubre la historia antigua de Soria visitando las Ruinas de Numancia, un importante yacimiento arqueológico que ofrece una mirada al pasado celtíbero de la región.",
    "provincia": "661cd0facab02767690bce75",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf8c23efab228a11f8038",
    "nombre": "Murallas de Ávila",
    "img": "https://postimg.cc/7f9ZmMyV",
    "descripcion": "Contempla las impresionantes Murallas de Ávila, una de las fortificaciones medievales mejor conservadas de Europa, que rodean el casco antiguo de la ciudad.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8c93efab228a11f803a",
    "nombre": "Catedral de Ávila",
    "img": "https://postimg.cc/Wd4bKFNP",
    "descripcion": "Visita la majestuosa Catedral de Ávila, un magnífico ejemplo de arquitectura gótica con una impresionante fachada y un rico patrimonio artístico en su interior.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8d23efab228a11f803c",
    "nombre": "Basílica de San Vicente",
    "img": "https://postimg.cc/YhzhTBQQ",
    "descripcion": "Explora la Basílica de San Vicente, una joya del románico español con una impresionante portada esculpida y un interior decorado con obras de arte.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8ee3efab228a11f803e",
    "nombre": "Ruta de los Palacios de Ávila",
    "img": "https://postimg.cc/4YFNTfyH",
    "descripcion": "Recorre la ciudad de Ávila siguiendo la Ruta de los Palacios, que te llevará a través de elegantes palacetes y edificios históricos de la ciudad.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf8f83efab228a11f8040",
    "nombre": "Plaza del Mercado Chico",
    "img": "https://postimg.cc/K3r8Xt3m",
    "descripcion": "Sumérgete en el corazón de Ávila visitando la Plaza del Mercado Chico, un animado centro de encuentro rodeado de edificios históricos y terrazas de cafés.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9103efab228a11f8042",
    "nombre": "Convento de Santa Teresa",
    "img": "https://postimg.cc/hQcwfmvy",
    "descripcion": "Descubre la vida y la obra de Santa Teresa de Jesús visitando el Convento de Santa Teresa en Ávila, donde la santa vivió y fundó su primer convento.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf91b3efab228a11f8044",
    "nombre": "https://postimg.cc/2bW5wszb",
    "img": "https://ejemplo.com/imagen_senderismo_sierra_gredos_avila.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por la impresionante Sierra de Gredos, descubriendo paisajes montañosos y una rica fauna y flora.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf92d3efab228a11f8046",
    "nombre": "Visita a los Pueblos de la Sierra de Ávila",
    "img": "https://postimg.cc/G9k2sn76",
    "descripcion": "Recorre los encantadores pueblos de la Sierra de Ávila, donde podrás disfrutar de la tranquilidad del campo y la belleza de la naturaleza.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9383efab228a11f8048",
    "nombre": "Visita a las Cuevas del Águila",
    "img": "https://postimg.cc/xcndvpB8",
    "descripcion": "Descubre las impresionantes Cuevas del Águila, una red de cuevas y grutas con formaciones geológicas únicas, como estalactitas y estalagmitas.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9423efab228a11f804a",
    "nombre": "Visita al Castillo de Gredos",
    "img": "https://postimg.cc/946mrLGW",
    "descripcion": "Descubre la historia medieval de Ávila visitando el Castillo de Gredos, una impresionante fortaleza situada en un entorno natural espectacular.",
    "provincia": "661cd105cab02767690bce77",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },{
    "_id": "661cf9543efab228a11f804c",
    "nombre": "Plaza Mayor de Salamanca",
    "img": "https://postimg.cc/Mcygqwmm",
    "descripcion": "Disfruta del ambiente animado y la arquitectura histórica en la Plaza Mayor de Salamanca, uno de los lugares más emblemáticos de la ciudad.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf95c3efab228a11f804e",
    "nombre": "Universidad de Salamanca",
    "img": "https://postimg.cc/v1RCJTfm",
    "descripcion": "Visita la prestigiosa Universidad de Salamanca, una de las más antiguas de Europa, y explora sus magníficos edificios y su rica historia.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9683efab228a11f8050",
    "nombre": "Catedral Nueva de Salamanca",
    "img": "https://postimg.cc/py2MVm7h",
    "descripcion": "Contempla la grandiosa Catedral Nueva de Salamanca, una obra maestra del estilo gótico con impresionantes vidrieras y una majestuosa torre.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9723efab228a11f8052",
    "nombre": "Casa de las Conchas",
    "img": "https://postimg.cc/JH7fpFJc",
    "descripcion": "Descubre la emblemática Casa de las Conchas de Salamanca, un edificio renacentista decorado con más de 300 conchas en su fachada y que alberga una biblioteca pública.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf97a3efab228a11f8054",
    "nombre": "Torre del Clavero",
    "img": "https://postimg.cc/4nBkYJk8",
    "descripcion": "Contempla la imponente Torre del Clavero de Salamanca, una antigua fortaleza medieval que ofrece vistas panorámicas de la ciudad desde su mirador.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9933efab228a11f8056",
    "nombre": "Convento de San Esteban",
    "img": "https://postimg.cc/nCPy10LB",
    "descripcion": "Visita el impresionante Convento de San Esteban de Salamanca, un destacado ejemplo del estilo plateresco español con un impresionante claustro y una iglesia decorada.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9a23efab228a11f8058",
    "nombre": "Ruta de Senderismo por las Arribes del Duero",
    "img": "https://postimg.cc/crCqYVdd",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por las impresionantes Arribes del Duero, descubriendo cañones, cascadas y una rica biodiversidad.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9c13efab228a11f805a",
    "nombre": "Visita a las Cuevas de Salamanca",
    "img": "https://postimg.cc/21LP9hqJ",
    "descripcion": "Descubre las impresionantes Cuevas de Salamanca, una red de cuevas y galerías subterráneas que ofrecen una mirada fascinante al pasado geológico de la región.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9cd3efab228a11f805c",
    "nombre": "Visita al Castillo de Miranda del Castañar",
    "img": "https://postimg.cc/1ns2zdWh",
    "descripcion": "Descubre la historia medieval de Salamanca visitando el Castillo de Miranda del Castañar, una impresionante fortaleza que domina el paisaje rural.",
    "provincia": "661cd10bcab02767690bce79",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cf9f23efab228a11f805e",
    "nombre": "Visita al Castillo de Zamora",
    "img": "https://postimg.cc/bZYK8WF7",
    "descripcion": "Explora la historia medieval de Zamora en este imponente castillo ubicado en el centro de la ciudad.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cf9fa3efab228a11f8060",
    "nombre": "Paseo por el Casco Antiguo",
    "img": "https://postimg.cc/rdH6fjjv",
    "descripcion": "Recorre las estrechas calles empedradas del casco antiguo de Zamora y descubre su encanto histórico.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa053efab228a11f8062",
    "nombre": "Museo de Semana Santa",
    "img": "https://postimg.cc/dh4cywyQ",
    "descripcion": "Sumérgete en la tradición y la artesanía de la Semana Santa zamorana en este fascinante museo.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa103efab228a11f8064",
    "nombre": "Catedral de Zamora",
    "img": "https://postimg.cc/LhLdVz1b",
    "descripcion": "Contempla la majestuosa arquitectura románica de la catedral de Zamora, una joya del arte medieval.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa313efab228a11f8066",
    "nombre": "Mercado de Abastos",
    "img": "https://postimg.cc/ph5w4j1y",
    "descripcion": "Sumérgete en la vida cotidiana de Zamora visitando su animado mercado de abastos, donde encontrarás productos frescos y locales.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfa543efab228a11f8068",
    "nombre": "Senderismo en los Arribes del Duero",
    "img": "https://postimg.cc/7fkFtf1Y",
    "descripcion": "Explora los impresionantes paisajes de los Arribes del Duero a través de sus rutas de senderismo.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfa693efab228a11f806a",
    "nombre": "Ruta en Bicicleta por la Vía de la Plata",
    "img": "https://postimg.cc/QBCGgwQQ",
    "descripcion": "Pedalea por la antigua calzada romana de la Vía de la Plata y disfruta de los paisajes rurales de Zamora.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfa8c3efab228a11f806c",
    "nombre": "Recorrido en Kayak por el río Tormes",
    "img": "https://postimg.cc/GT0WCpZK",
    "descripcion": "Descubre la belleza natural de Zamora desde una perspectiva única mientras remas en kayak por el pintoresco río Tormes.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfa943efab228a11f806e",
    "nombre": "Visita a los Molinos de Agua",
    "img": "https://postimg.cc/5QwZNVJV",
    "descripcion": "Adéntrate en la historia de la provincia explorando los antiguos molinos de agua que salpican el paisaje rural de Zamora.",
    "provincia": "661cd118cab02767690bce7b",
    "comunidad": "Castilla y Leon",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfab43efab228a11f8071",
    "nombre": "Casco Antiguo",
    "img": "https://ejemplo.com/imagen_casco_antiguo_coruna.jpg",
    "descripcion": "Explora el encantador Casco Antiguo de A Coruña, con sus estrechas calles empedradas, plazas históricas y pintorescas fachadas, donde podrás descubrir la historia y la cultura de la ciudad.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfac43efab228a11f8073",
    "nombre": "Playa de Riazor",
    "img": "https://ejemplo.com/imagen_playa_riazor_coruna.jpg",
    "descripcion": "Disfruta de un día de sol y mar en la Playa de Riazor, una de las playas urbanas más populares de A Coruña, ideal para relajarse, nadar y practicar deportes acuáticos.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfad23efab228a11f8075",
    "nombre": "Jardines de Méndez Núñez",
    "img": "https://ejemplo.com/imagen_jardines_mendez_nunez_coruna.jpg",
    "descripcion": "Relájate en los Jardines de Méndez Núñez, un hermoso parque urbano en el corazón de A Coruña, perfecto para dar un paseo tranquilo entre árboles, fuentes y esculturas.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfade3efab228a11f8077",
    "nombre": "Ruta de Senderismo por los Acantilados de Loiba",
    "img": "https://ejemplo.com/imagen_senderismo_acantilados_loiba_coruna.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por los impresionantes Acantilados de Loiba, disfrutando de vistas panorámicas del océano Atlántico y la costa gallega.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfaef3efab228a11f8079",
    "nombre": "Visita a los Pueblos de la Costa da Morte",
    "img": "https://ejemplo.com/imagen_pueblos_costa_da_morte_coruna.jpg",
    "descripcion": "Recorre los encantadores pueblos de la Costa da Morte en la provincia de A Coruña, donde podrás disfrutar de la tranquilidad del campo y la belleza del litoral gallego.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb183efab228a11f807b",
    "nombre": "Visita a los Pazos de Galicia",
    "img": "https://ejemplo.com/imagen_pazos_galicia_coruna.jpg",
    "descripcion": "Descubre la arquitectura señorial de Galicia visitando los Pazos, antiguas mansiones y palacios que representan la historia y la cultura de la región.",
    "provincia": "661cd11ecab02767690bce7d",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb2f3efab228a11f807d",
    "nombre": "Casco Histórico de Pontevedra",
    "img": "https://ejemplo.com/imagen_casco_historico_pontevedra.jpg",
    "descripcion": "Recorre el encantador Casco Histórico de Pontevedra, con sus estrechas calles empedradas, plazas históricas y edificios señoriales, donde podrás disfrutar de la arquitectura y la historia de la ciudad.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb3b3efab228a11f807f",
    "nombre": "Plaza de la Leña",
    "img": "https://ejemplo.com/imagen_plaza_lena_pontevedra.jpg",
    "descripcion": "Disfruta del ambiente animado en la Plaza de la Leña de Pontevedra, un lugar popular entre los lugareños y visitantes, rodeado de bares, restaurantes y tiendas.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb443efab228a11f8081",
    "nombre": "Basílica de Santa María la Mayor",
    "img": "https://ejemplo.com/imagen_basilica_santa_maria_pontevedra.jpg",
    "descripcion": "Visita la imponente Basílica de Santa María la Mayor de Pontevedra, una obra maestra del estilo gótico con una impresionante fachada y un rico patrimonio artístico en su interior.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb503efab228a11f8083",
    "nombre": "Parque de la Alameda",
    "img": "https://ejemplo.com/imagen_parque_alameda_pontevedra.jpg",
    "descripcion": "Relájate en el Parque de la Alameda de Pontevedra, un hermoso parque urbano con jardines, fuentes y bancos, perfecto para dar un paseo tranquilo o disfrutar de un picnic en familia.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb5b3efab228a11f8085",
    "nombre": "Ruta de Senderismo por las Fragas do Eume",
    "img": "https://ejemplo.com/imagen_senderismo_fragas_eume_pontevedra.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por las Fragas do Eume, un impresionante bosque atlántico en la provincia de Pontevedra, donde podrás disfrutar de la naturaleza en estado puro.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb643efab228a11f8087",
    "nombre": "Visita a los Pueblos de las Rías Baixas",
    "img": "https://ejemplo.com/imagen_pueblos_rias_baixas_pontevedra.jpg",
    "descripcion": "Recorre los encantadores pueblos de las Rías Baixas en la provincia de Pontevedra, donde podrás disfrutar de la belleza del litoral gallego y la hospitalidad de sus habitantes.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb733efab228a11f8089",
    "nombre": "Visita a las Islas Cíes",
    "img": "https://ejemplo.com/imagen_islas_cies_pontevedra.jpg",
    "descripcion": "Descubre la belleza natural de las Islas Cíes en la provincia de Pontevedra, un archipiélago paradisíaco declarado Parque Nacional Marítimo-Terrestre, donde podrás disfrutar de playas de arena blanca y aguas cristalinas.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb7f3efab228a11f808b",
    "nombre": "Visita a las Pozas de Melón",
    "img": "https://ejemplo.com/imagen_pozas_melon_pontevedra.jpg",
    "descripcion": "Descubre las Pozas de Melón en la provincia de Pontevedra, un conjunto de pozas y cascadas naturales situadas en un entorno boscoso, perfecto para refrescarse en verano y disfrutar de la naturaleza.",
    "provincia": "661cd127cab02767690bce7f",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfb8f3efab228a11f808d",
    "nombre": "Catedral de Ourense",
    "img": "https://ejemplo.com/imagen_catedral_ourense.jpg",
    "descripcion": "Visita la majestuosa Catedral de Ourense, una obra maestra del arte románico con una impresionante fachada y un claustro medieval, ubicada en el corazón del casco antiguo.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfb973efab228a11f808f",
    "nombre": "Puente Romano",
    "img": "https://ejemplo.com/imagen_puente_romano_ourense.jpg",
    "descripcion": "Contempla el Puente Romano de Ourense, un antiguo puente de piedra sobre el río Miño, que data de la época romana y es uno de los símbolos más emblemáticos de la ciudad.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfba93efab228a11f8091",
    "nombre": "Termas de Outariz",
    "img": "https://ejemplo.com/imagen_termas_outariz_ourense.jpg",
    "descripcion": "Relájate en las Termas de Outariz, unas modernas instalaciones termales con piscinas de agua caliente y fría, circuitos terapéuticos y zonas ajardinadas, perfectas para descansar y rejuvenecer.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfbdd3efab228a11f8093",
    "nombre": "Plaza Mayor",
    "img": "https://ejemplo.com/imagen_plaza_mayor_ourense.jpg",
    "descripcion": "Disfruta del ambiente animado en la Plaza Mayor de Ourense, un lugar popular entre lugareños y visitantes, rodeado de bares, restaurantes y tiendas, ideal para tomar algo o simplemente pasear.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfbea3efab228a11f8095",
    "nombre": "Ruta de Senderismo por la Ribeira Sacra",
    "img": "https://ejemplo.com/imagen_senderismo_ribeira_sacra_ourense.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por la Ribeira Sacra, una impresionante zona natural en la provincia de Ourense, donde podrás descubrir cañones, ríos y monasterios centenarios.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfc013efab228a11f8097",
    "nombre": "Visita a los Cañones del Sil",
    "img": "https://ejemplo.com/imagen_canones_sil_ourense.jpg",
    "descripcion": "Descubre la belleza natural de los Cañones del Sil en la provincia de Ourense, donde podrás realizar paseos en barco y disfrutar de impresionantes vistas de los acantilados y viñedos.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfc153efab228a11f8099",
    "nombre": "Ruta en Bicicleta por la Vía Verde del Río Arnoia",
    "img": "https://ejemplo.com/imagen_ruta_bicicleta_via_verde_arnoia_ourense.jpg",
    "descripcion": "Pedalea por la Vía Verde del Río Arnoia en una emocionante ruta en bicicleta, disfrutando de paisajes naturales, puentes históricos y antiguas estaciones de tren convertidas en áreas recreativas.",
    "provincia": "661cd12dcab02767690bce81",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfde13efab228a11f80a3",
    "nombre": "Murallas Romanas de Lugo",
    "img": "https://ejemplo.com/imagen_murallas_lugo.jpg",
    "descripcion": "Explora las famosas murallas romanas de Lugo, declaradas Patrimonio de la Humanidad por la UNESCO. Estas impresionantes fortificaciones datan del siglo III y son uno de los mejores ejemplos de arquitectura militar romana que se conservan en el mundo.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfdea3efab228a11f80a5",
    "nombre": "Catedral de Lugo",
    "img": "https://ejemplo.com/imagen_catedral_lugo.jpg",
    "descripcion": "Visita la majestuosa Catedral de Lugo, un magnífico ejemplo de arquitectura románica situado en el corazón de la ciudad. Construida en el siglo XII, esta impresionante obra cuenta con una fachada única y un impresionante retablo mayor.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfdf13efab228a11f80a7",
    "nombre": "Plaza Mayor de Lugo",
    "img": "https://ejemplo.com/imagen_plaza_mayor_lugo.jpg",
    "descripcion": "Disfruta del encanto de la Plaza Mayor de Lugo, un lugar animado rodeado de edificios históricos y pintorescos cafés. Es el corazón social y cultural de la ciudad, perfecto para relajarse y disfrutar del ambiente.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfdfd3efab228a11f80a9",
    "nombre": "Ruta de Senderismo por los Ancares",
    "img": "https://ejemplo.com/imagen_senderismo_ancares_lugo.jpg",
    "descripcion": "Embárcate en una emocionante ruta de senderismo por la impresionante Sierra de los Ancares, una de las zonas más vírgenes y hermosas de Galicia. Descubre paisajes espectaculares, pueblos pintorescos y una rica biodiversidad.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe0f3efab228a11f80ab",
    "nombre": "Visita a los Pueblos de la Mariña Lucense",
    "img": "https://ejemplo.com/imagen_pueblos_marina_lucense_lugo.jpg",
    "descripcion": "Explora los encantadores pueblos de la Mariña Lucense, situados en la costa norte de Lugo. Disfruta de playas vírgenes, acantilados impresionantes y la auténtica gastronomía gallega en un entorno natural único.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe193efab228a11f80ad",
    "nombre": "Turismo Rural en las Tierras de Lemos",
    "img": "https://ejemplo.com/imagen_turismo_rural_tierras_lemos_lugo.jpg",
    "descripcion": "Sumérgete en la tranquilidad del campo gallego alojándote en una casa rural en las Tierras de Lemos, en la provincia de Lugo. Disfruta de la naturaleza, la historia y la gastronomía local en un entorno rural auténtico.",
    "provincia": "661cd132cab02767690bce83",
    "comunidad": "Galicia",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe313efab228a11f80af",
    "nombre": "https://postimg.cc/PCxM64hZ",
    "img": "https://ejemplo.com/imagen_catedral_oviedo.jpg",
    "descripcion": "Visita la imponente Catedral de Oviedo, una obra maestra del arte gótico y uno de los principales símbolos de la ciudad, con su impresionante arquitectura y su rica historia.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe3b3efab228a11f80b1",
    "nombre": "Parque de San Francisco",
    "img": "https://postimg.cc/K3fnfKHJ",
    "descripcion": "Pasea por el hermoso Parque de San Francisco, un oasis verde en el centro de Oviedo, donde podrás disfrutar de hermosos jardines, fuentes y esculturas, así como de un ambiente tranquilo y relajante.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe473efab228a11f80b3",
    "nombre": "Plaza de la Escandalera",
    "img": "https://postimg.cc/G45x6yhf",
    "descripcion": "Visita la animada Plaza de la Escandalera, uno de los lugares más emblemáticos de Oviedo, rodeada de edificios históricos, tiendas, cafeterías y terrazas, perfecta para pasear y disfrutar del ambiente.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe603efab228a11f80b5",
    "nombre": "Casco Antiguo de Gijón",
    "img": "https://postimg.cc/kBwcFZrq",
    "descripcion": "Recorre el encantador Casco Antiguo de Gijón, con sus estrechas calles empedradas, plazas pintorescas y edificios históricos, donde podrás descubrir la historia y la cultura de la ciudad.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe693efab228a11f80b7",
    "nombre": "Playa de San Lorenzo",
    "img": "https://postimg.cc/vgW712LR",
    "descripcion": "Relájate en la hermosa Playa de San Lorenzo, una extensa playa de arena dorada en Gijón, ideal para tomar el sol, nadar en aguas tranquilas o pasear por el paseo marítimo.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfe763efab228a11f80b9",
    "nombre": "Parque Nacional de los Picos de Europa",
    "img": "https://postimg.cc/Z9vxm5W5",
    "descripcion": "Explora el impresionante Parque Nacional de los Picos de Europa, un paraíso natural de montañas, valles, bosques y ríos, donde podrás practicar senderismo, escalada, espeleología y otras actividades al aire libre.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe7f3efab228a11f80bb",
    "nombre": "Ruta del Cares",
    "img": "https://postimg.cc/9zhKLvk7",
    "descripcion": "Embárcate en la emocionante Ruta del Cares, una espectacular caminata de montaña que recorre el desfiladero del río Cares, ofreciendo impresionantes vistas panorámicas y una experiencia inolvidable en plena naturaleza.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe893efab228a11f80bd",
    "nombre": "Lagos de Covadonga",
    "img": "https://postimg.cc/V0mqX9DJ",
    "descripcion": "Visita los mágicos Lagos de Covadonga, un conjunto de lagos glaciares en los Picos de Europa, rodeados de impresionantes paisajes montañosos y accesibles a través de rutas de senderismo y carreteras panorámicas.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe923efab228a11f80bf",
    "nombre": "Senda del Oso",
    "img": "https://postimg.cc/mhyqJmx6",
    "descripcion": "Recorre la encantadora Senda del Oso, una ruta de senderismo y ciclismo que sigue el antiguo trazado de un ferrocarril minero en desuso, ofreciendo paisajes espectaculares, túneles excavados en la roca y puentes colgantes.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfe9b3efab228a11f80c1",
    "nombre": "Reserva Natural de Somiedo",
    "img": "https://postimg.cc/S207xb97",
    "descripcion": "Descubre la belleza salvaje de la Reserva Natural de Somiedo, un paraíso natural de montañas, valles y lagos en los Picos de Europa, donde podrás observar una gran variedad de flora y fauna, incluyendo osos pardos.",
    "provincia": "661cd169cab02767690bce85",
    "comunidad": "Principado de Asturias",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661cfeb93efab228a11f80c5",
    "nombre": "Centro Histórico de Santander",
    "img": "https://postimg.cc/RqTsXd2C",
    "descripcion": "Recorre el encantador Centro Histórico de Santander, con sus estrechas calles empedradas, plazas pintorescas y edificios históricos, donde podrás disfrutar de la arquitectura y la cultura de la ciudad.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfec13efab228a11f80c7",
    "nombre": "Palacio de la Magdalena",
    "img": "https://postimg.cc/567PM0xZ",
    "descripcion": "Visita el majestuoso Palacio de la Magdalena, un edificio de estilo inglés situado en una península frente al mar en Santander, que alberga exposiciones, eventos y hermosos jardines.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfece3efab228a11f80c9",
    "nombre": "Playa del Sardinero",
    "img": "https://postimg.cc/Q93mqKbW",
    "descripcion": "Relájate en la famosa Playa del Sardinero, una extensa playa de arena dorada en Santander, que cuenta con servicios excelentes, aguas tranquilas y un paseo marítimo animado.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfedc3efab228a11f80cb",
    "nombre": "Museo de Prehistoria y Arqueología de Cantabria",
    "img": "https://postimg.cc/JsSPG2Hx",
    "descripcion": "Explora el Museo de Prehistoria y Arqueología de Cantabria, que alberga una importante colección de arte rupestre y objetos arqueológicos, así como exposiciones temporales sobre la historia de la región.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cfef13efab228a11f80cd",
    "nombre": "Teatro Principal de Reinosa",
    "img": "https://postimg.cc/ct1cpqPx",
    "descripcion": "Disfruta de una obra de teatro o concierto en el Teatro Principal de Reinosa, un hermoso edificio histórico en el corazón de la ciudad, que ofrece una programación variada durante todo el año.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661cff013efab228a11f80cf",
    "nombre": "Mirador del Faro de Cabo Mayor",
    "img": "https://postimg.cc/RNVP8fz7",
    "descripcion": "Contempla las impresionantes vistas panorámicas desde el Mirador del Faro de Cabo Mayor, que ofrece una perspectiva única de la costa cantábrica y el mar, así como del paisaje natural circundante.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d007c3efab228a11f80da",
    "nombre": "Parque Natural de los Collados del Asón",
    "img": "https://postimg.cc/94T1TYGh",
    "descripcion": "Descubre la belleza del Parque Natural de los Collados del Asón, donde encontrarás impresionantes paisajes de montañas, valles y ríos. Disfruta de actividades al aire libre como senderismo, observación de aves y picnic.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d00883efab228a11f80dc",
    "nombre": "Cueva del Soplao",
    "img": "https://postimg.cc/rRqhqRRL",
    "descripcion": "Explora la fascinante Cueva del Soplao, una maravilla geológica con formaciones de estalactitas y estalagmitas únicas. Realiza un recorrido guiado por las galerías subterráneas y maravíllate con su belleza natural.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d009a3efab228a11f80de",
    "nombre": "Valle del Nansa",
    "img": "https://postimg.cc/ygyPp6Qp",
    "descripcion": "Recorre el pintoresco Valle del Nansa, un lugar de gran belleza natural con bosques frondosos, ríos cristalinos y encantadores pueblos. Disfruta de actividades como el senderismo, la observación de aves y la fotografía.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d00ba3efab228a11f80e0",
    "nombre": "Mirador del Fitu",
    "img": "https://postimg.cc/fksqcp2g",
    "descripcion": "Contempla las impresionantes vistas panorámicas desde el Mirador del Fitu, situado en lo alto de una colina en la Sierra del Sueve. Disfruta de una vista panorámica de la costa asturiana y las montañas de los Picos de Europa.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01583efab228a11f80e2",
    "nombre": "Cuevas de Altamira",
    "img": "https://postimg.cc/LJJx4p5h",
    "descripcion": "Explora las famosas Cuevas de Altamira, conocidas por sus increíbles pinturas rupestres prehistóricas, que datan de hace aproximadamente 20,000 años. Este sitio arqueológico es uno de los más importantes del mundo y ha sido declarado Patrimonio de la Humanidad por la UNESCO. Disfruta de una experiencia única al adentrarte en la cueva y contemplar las fascinantes representaciones de animales y formas geométricas que han sobrevivido a través de los siglos.",
    "provincia": "661cd17dcab02767690bce87",
    "comunidad": "Cantabria",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d016a3efab228a11f80e4",
    "nombre": "Museo Guggenheim Bilbao",
    "img": "https://postimg.cc/cgYvRC6j",
    "descripcion": "Visita el icónico Museo Guggenheim Bilbao, diseñado por Frank Gehry, que alberga una impresionante colección de arte contemporáneo y ofrece exposiciones temporales de renombrados artistas.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01723efab228a11f80e6",
    "nombre": "Casco Viejo de Bilbao",
    "img": "https://postimg.cc/HJFJ8XWX",
    "descripcion": "Recorre el pintoresco Casco Viejo de Bilbao, con sus estrechas calles medievales, plazas animadas, tiendas tradicionales y bares de pintxos, que reflejan la historia y la cultura de la ciudad.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01a63efab228a11f80e8",
    "nombre": "Museo Marítimo Ría de Bilbao",
    "img": "https://postimg.cc/JtNytsfH",
    "descripcion": "Explora la historia marítima de la región en el Museo Marítimo Ría de Bilbao, ubicado en un antiguo astillero, que exhibe barcos, maquetas, herramientas y documentos relacionados con la navegación.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01c83efab228a11f80ea",
    "nombre": "Parque Doña Casilda Iturrizar",
    "img": "https://postimg.cc/vxtDKKrt",
    "descripcion": "Disfruta de un tranquilo paseo por el Parque Doña Casilda Iturrizar, un hermoso espacio verde en el centro de Bilbao, con jardines, estanques, esculturas y áreas de recreo para toda la familia.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d01d63efab228a11f80ec",
    "nombre": "Reserva de la Biosfera de Urdaibai",
    "img": "https://postimg.cc/bsLsHKNz",
    "descripcion": "Explora la Reserva de la Biosfera de Urdaibai, un paraíso natural en la costa de Bizkaia, con playas vírgenes, acantilados impresionantes, marismas, bosques y una gran diversidad de fauna y flora.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01df3efab228a11f80ee",
    "nombre": "Cascada de Gujuli",
    "img": "https://postimg.cc/SXn2KD4m",
    "descripcion": "Descubre la espectacular Cascada de Gujuli, situada en plena naturaleza en el valle de Oma, donde el río Oiardo se precipita en una impresionante caída de agua rodeada de exuberante vegetación.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01e83efab228a11f80f0",
    "nombre": "Parque Natural de Gorbeia",
    "img": "https://postimg.cc/kB72SnC1",
    "descripcion": "Embárcate en una aventura en el Parque Natural de Gorbeia, un vasto territorio montañoso que ofrece innumerables rutas de senderismo, cascadas, lagos y vistas panorámicas espectaculares.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d01f73efab228a11f80f2",
    "nombre": "Cueva de Pozalagua",
    "img": "https://postimg.cc/gLWnNpZ0",
    "descripcion": "Explora la impresionante Cueva de Pozalagua, una cueva cálcica situada en el valle de Carranza, donde podrás admirar estalactitas y estalagmitas únicas en un entorno subterráneo fascinante.",
    "provincia": "661cd188cab02767690bce89",
    "comunidad": "País Vasco",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d02133efab228a11f80f6",
    "nombre": "Bosque de Oma",
    "img": "https://postimg.cc/dhHZvgzW",
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
    "img": "https://postimg.cc/XrdHZcg6",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Parte Vieja de San Sebastián",
    "descripcion": "Explora el encantador casco antiguo de San Sebastián, conocido como la Parte Vieja, con sus estrechas calles empedradas, plazas animadas, bares de pintxos y edificios históricos.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/7CNK9HcB",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Monte Urgull",
    "descripcion": "Sube al Monte Urgull para disfrutar de unas vistas panorámicas impresionantes de San Sebastián y su bahía, así como para explorar ruinas históricas, fortificaciones y senderos naturales.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/hfJ3nqzj",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Museo San Telmo",
    "descripcion": "Visita el Museo San Telmo, ubicado en un antiguo convento, que alberga una importante colección de arte vasco e internacional, así como exposiciones temporales sobre arte, historia y cultura.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/CBPmyvwk",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Parque Natural de Pagoeta",
    "descripcion": "Embárcate en una aventura en el Parque Natural de Pagoeta, un paraíso natural de montañas, bosques, arroyos y cascadas, donde podrás practicar senderismo, observar la flora y la fauna, y disfrutar de la tranquilidad del entorno.",
    "tipo": "rural",
    "img": "https://ejemplo.com/img/parque_natural_pagoeta_gipuzkoa.jpg",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Cascada de Xorroxin",
    "descripcion": "Descubre la impresionante Cascada de Xorroxin, situada en el corazón del Valle del Baztán, donde el río Larraun se precipita en una espectacular caída de agua rodeada de exuberante vegetación.",
    "tipo": "rural",
    "img": "https://postimg.cc/9z0LPjBp",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Acantilados de Zumaia",
    "descripcion": "Contempla los impresionantes Acantilados de Zumaia, formados por estratos geológicos de millones de años de antigüedad, que ofrecen unas vistas panorámicas espectaculares y son un paraíso para los amantes de la naturaleza.",
    "tipo": "rural",
    "img": "https://postimg.cc/nC6ScwB1",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd191cab02767690bce8b",
    "nombre": "Parque Natural Aiako Harria",
    "descripcion": "Explora el Parque Natural Aiako Harria, un área protegida de montañas rocosas y bosques de robles y hayas, que ofrece numerosas rutas de senderismo y bicicleta de montaña, así como oportunidades para observar la flora y la fauna.",
    "tipo": "rural",
    "img": "https://postimg.cc/sBzn5QnQ",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Catedral de Santa María de Vitoria",
    "descripcion": "Visita la impresionante Catedral de Santa María de Vitoria, un magnífico ejemplo de arquitectura gótica, que alberga obras de arte religioso, sepulcros y un claustro medieval.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/kDdfZhWr",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "https://postimg.cc/nMY0tY1X",
    "descripcion": "Disfruta del ambiente animado de la Plaza de la Virgen Blanca en Vitoria-Gasteiz, un lugar emblemático de la ciudad donde se celebran eventos culturales, festivales y mercados tradicionales.",
    "tipo": "ciudad",
    "img": "https://ejemplo.com/img/plaza_virgen_blanca_vitoria.jpg",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Museo de Bellas Artes de Álava",
    "descripcion": "Explora la colección de arte vasco y universal en el Museo de Bellas Artes de Álava, que cuenta con obras de artistas destacados como El Greco, Goya, Sorolla y Chillida, entre otros.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/WF0qg84g",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Palacio de Montehermoso",
    "descripcion": "Visita el Palacio de Montehermoso, un impresionante edificio renacentista en el centro de Vitoria-Gasteiz, que alberga exposiciones de arte contemporáneo, conciertos y eventos culturales.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/nX511dnP",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Jardín Botánico de Santa Catalina",
    "descripcion": "Relájate y disfruta de la naturaleza en el Jardín Botánico de Santa Catalina, un oasis verde en el corazón de Vitoria-Gasteiz, que alberga una gran variedad de plantas autóctonas y exóticas.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/87sHM8gv",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Sierra de Entzia",
    "descripcion": "Explora la Sierra de Entzia, un impresionante macizo montañoso en el sureste de Álava, que ofrece numerosas rutas de senderismo, vistas panorámicas espectaculares y oportunidades para la observación de aves.",
    "tipo": "rural",
    "img": "https://postimg.cc/3dt1k8V7",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Salto del Nervión",
    "descripcion": "Contempla el espectacular Salto del Nervión, una impresionante cascada situada en el Parque Natural de Gorbeia, que se precipita desde una altura de más de 200 metros en un entorno natural de gran belleza.",
    "tipo": "rural",
    "img": "https://postimg.cc/WqjFnZDK",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Rioja Alavesa",
    "descripcion": "Descubre la región vinícola de Rioja Alavesa, famosa por sus viñedos, bodegas y vinos de alta calidad, donde podrás realizar visitas guiadas, degustaciones y actividades relacionadas con el enoturismo.",
    "tipo": "rural",
    "img": "https://postimg.cc/2qZ79468",
    "comunidad": "Pais Vasco"
  },
  {
    "provincia": "661cd198cab02767690bce8d",
    "nombre": "Valle Salado de Añana",
    "descripcion": "Visita el Valle Salado de Añana, una joya de la arquitectura tradicional y la ingeniería hidráulica, donde se produce la sal de forma artesanal desde hace más de 1.000 años, en un paisaje cultural único.",
    "tipo": "rural",
    "img": "https://postimg.cc/6yWz62HY",
    "comunidad": "Pais Vasco"
  },
  {
    "_id": "661d0b4f3efab228a11f80fb",
    "nombre": "Catedral de Santa María de la Redonda",
    "img": "https://postimg.cc/bdDSxzZp",
    "descripcion": "Visita la imponente Catedral de Santa María de la Redonda en Logroño, una obra maestra de la arquitectura religiosa con elementos góticos y barrocos. Descubre su interior ricamente decorado y su hermosa fachada.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0b623efab228a11f80fd",
    "nombre": "Bodegas Franco-Españolas",
    "img": "https://postimg.cc/kDBKTQpr",
    "descripcion": "Haz un recorrido por las Bodegas Franco-Españolas en Logroño y descubre la historia y tradición vinícola de La Rioja. Disfruta de catas de vino y conoce el proceso de elaboración en esta bodega centenaria.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0b6c3efab228a11f80ff",
    "nombre": "Muralla del Revellín",
    "img": "https://postimg.cc/jDrfqGdK",
    "descripcion": "Recorre la Muralla del Revellín en Logroño, una antigua fortificación que rodeaba la ciudad y que hoy en día es un lugar emblemático para pasear y disfrutar de las vistas panorámicas de la ciudad.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0b833efab228a11f8101",
    "nombre": "Iglesia de San Bartolomé",
    "img": "https://postimg.cc/CZcnN5CL",
    "descripcion": "Visita la Iglesia de San Bartolomé en Logroño, un hermoso templo barroco del siglo XVIII. Admira su impresionante fachada y su interior decorado con obras de arte religioso.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "ciudad",
    "__v": 0
  },
  {
    "_id": "661d0ba23efab228a11f8105",
    "nombre": "Sierra de Cebollera",
    "img": "https://postimg.cc/GBLsGGy5",
    "descripcion": "Embárcate en una aventura al aire libre en la Sierra de Cebollera, un parque natural con paisajes impresionantes, bosques frondosos y senderos para practicar senderismo y observar la fauna y flora.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bad3efab228a11f8107",
    "nombre": "Ruta del Vino",
    "img": "https://postimg.cc/5QCHbmh6",
    "descripcion": "Explora la Ruta del Vino de La Rioja y descubre los viñedos y bodegas de la región. Disfruta de catas de vino, visita a bodegas históricas y descubre el proceso de elaboración del vino.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bbd3efab228a11f8109",
    "nombre": "Valle del Oja",
    "img": "https://postimg.cc/MM4cCLrC",
    "descripcion": "Descubre la belleza natural del Valle del Oja, un valle pintoresco en La Rioja rodeado de montañas y viñedos. Disfruta de actividades al aire libre como senderismo, ciclismo y observación de aves.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bc73efab228a11f810b",
    "nombre": "Monasterio de Yuso",
    "img": "https://postimg.cc/47n7FGwv",
    "descripcion": "Visita el Monasterio de Yuso en San Millán de la Cogolla, un sitio declarado Patrimonio de la Humanidad por la UNESCO. Descubre su historia, arquitectura y la importancia cultural de este lugar.",
    "provincia": "661cd19ecab02767690bce8f",
    "comunidad": "La Rioja",
    "tipo": "rural",
    "__v": 0
  },
  {
    "_id": "661d0bd23efab228a11f810d",
    "nombre": "Cascada de Puente Ra",
    "img": "https://postimg.cc/BjcKjMXF",
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
    "img": "https://postimg.cc/XGFG0LSX",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Ciudadela de Pamplona",
    "descripcion": "Explora la Ciudadela de Pamplona, una fortaleza renacentista del siglo XVI que ofrece un vistazo a la historia militar de la región. Disfruta de un paseo por sus murallas y sus jardines bien cuidados.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/8jGWN2CG",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Plaza del Castillo",
    "descripcion": "Disfruta del ambiente animado en la Plaza del Castillo, el corazón de Pamplona. Rodeada de edificios históricos y terrazas, es el lugar perfecto para relajarse, tomar algo y disfrutar de la vida local.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/75Y2TS7Q",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Museo de Navarra",
    "descripcion": "Sumérgete en la historia y la cultura de Navarra visitando el Museo de Navarra en Pamplona. Descubre una impresionante colección de arte, arqueología y artefactos históricos que abarcan desde la prehistoria hasta la actualidad.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/30Xv2Bnz",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Palacio de Navarra",
    "descripcion": "Admira la belleza del Palacio de Navarra en Pamplona, la sede del Gobierno de Navarra. Descubre su arquitectura neoclásica y explora sus jardines y patios interiores.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/cv9876B1",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Parque de la Taconera",
    "descripcion": "Disfruta de un paseo tranquilo por el Parque de la Taconera en Pamplona, un hermoso jardín con fuentes, estanques y una gran variedad de flora. Es el lugar ideal para relajarse y disfrutar de la naturaleza en la ciudad.",
    "tipo": "ciudad",
    "img": "https://postimg.cc/7CR04b5t",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Camino de Santiago en Navarra",
    "descripcion": "Embárcate en una aventura espiritual y cultural caminando por el Camino de Santiago a su paso por Navarra. Descubre paisajes impresionantes, pueblos pintorescos y la hospitalidad de los peregrinos.",
    "tipo": "rural",
    "img": "https://postimg.cc/MXVVk6qt",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Selva de Irati",
    "descripcion": "Explora la impresionante Selva de Irati, uno de los bosques más grandes y mejor conservados de Europa. Disfruta de actividades al aire libre como senderismo, observación de aves y picnics en medio de un entorno natural único.",
    "tipo": "rural",
    "img": "https://postimg.cc/94DwLVLd",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Bardenas Reales",
    "descripcion": "Descubre el paisaje único de las Bardenas Reales, un paraje semidesértico con formaciones rocosas y barrancos espectaculares. Explora en coche, bicicleta o a pie y disfruta de las vistas panorámicas.",
    "tipo": "rural",
    "img": "https://postimg.cc/MMjRpxR6",
    "comunidad": "Navarra"
  },
  {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Sierras de Urbasa y Andía",
    "descripcion": "Embárcate en una aventura al aire libre en las Sierras de Urbasa y Andía, un parque natural con paisajes montañosos, bosques frondosos y cascadas impresionantes. Disfruta de actividades como senderismo, ciclismo y observación de la naturaleza.",
    "tipo": "rural",
    "img": "https://postimg.cc/2qgbJJtP",
    "comunidad": "Navarra"
  },
    {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Nacedero del Urederra",
    "descripcion": "Descubre la belleza del Nacedero del Urederra, un impresionante paraje natural con aguas cristalinas y cascadas en medio de un entorno boscoso. Disfruta de senderos bien señalizados y vistas panorámicas.",
    "tipo": "rural",
    "img": "https://postimg.cc/Fk5Sfqgj",
    "comunidad": "Navarra"
    },
    {
    "provincia": "661cd1a4cab02767690bce91",
    "nombre": "Ruta del Vino de Navarra",
    "descripcion": "Embárcate en un viaje enológico por la Ruta del Vino de Navarra y descubre los viñedos y bodegas de la región. Disfruta de catas de vino, visitas guiadas y degustaciones en un entorno único.",
    "tipo": "rural",
    "img": "https://postimg.cc/3dZGRtyv",
    "comunidad": "Navarra"
    },
    {
      "_id": "661d0c803efab228a11f8121",
      "nombre": "Catedral de Huesca",
      "img": "https://postimg.cc/HcfkGsMm",
      "descripcion": "Visita la impresionante Catedral de Huesca, un magnífico ejemplo de arquitectura gótica y renacentista. Admira su fachada decorada y explora su interior, donde encontrarás obras de arte religioso.",
      "provincia": "661cd1b7cab02767690bce93",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0c8a3efab228a11f8123",
      "nombre": "Castillo de Loarre",
      "img": "https://postimg.cc/jwWSkJLv",
      "descripcion": "Descubre el impresionante Castillo de Loarre, una fortaleza medieval ubicada en lo alto de una colina con vistas panorámicas del paisaje aragonés. Explora sus murallas, torres y salas y sumérgete en la historia.",
      "provincia": "661cd1b7cab02767690bce93",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0ca63efab228a11f8125",
      "nombre": "Iglesia de San Pedro el Viejo",
      "img": "https://postimg.cc/pyFdfzNL",
      "descripcion": "Visita la Iglesia de San Pedro el Viejo en Huesca, un templo románico del siglo XII con una impresionante torre mudéjar. Admira su arquitectura histórica y explora su interior ricamente decorado.",
      "provincia": "661cd1b7cab02767690bce93",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0cb23efab228a11f8127",
      "nombre": "Parque Nacional de Ordesa y Monte Perdido",
      "img": "https://postimg.cc/tnWC9Qdx",
      "descripcion": "Embárcate en una aventura al aire libre en el Parque Nacional de Ordesa y Monte Perdido, un paraíso natural de montañas, valles y cascadas. Disfruta de senderismo, escalada y observación de la fauna y flora.",
      "provincia": "661cd1b7cab02767690bce93",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0cbe3efab228a11f8129",
      "nombre": "Valle de Benasque",
      "img": "https://postimg.cc/8jgztcDB",
      "descripcion": "Descubre la belleza del Valle de Benasque, un valle glaciar en el corazón de los Pirineos. Disfruta de actividades al aire libre como senderismo, esquí, montañismo y observación de la naturaleza.",
      "provincia": "661cd1b7cab02767690bce93",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0cd13efab228a11f812b",
      "nombre": "Alquézar",
      "img": "https://postimg.cc/Mc3GDYKv",
      "descripcion": "Explora el encantador pueblo medieval de Alquézar, ubicado en un acantilado sobre el río Vero. Recorre sus estrechas calles empedradas, visita su impresionante colegiata y disfruta de las vistas panorámicas.",
      "provincia": "661cd1b7cab02767690bce93",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0cdf3efab228a11f812d",
      "nombre": "Basílica del Pilar",
      "img": "https://postimg.cc/MMc1bHxJ",
      "descripcion": "Visita la icónica Basílica del Pilar, un importante lugar de culto y uno de los símbolos más emblemáticos de Zaragoza. Admira su arquitectura barroca y sus impresionantes frescos.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0ce73efab228a11f812f",
      "nombre": "Palacio de la Aljafería",
      "img": "https://postimg.cc/87tv2MzV",
      "descripcion": "Explora el impresionante Palacio de la Aljafería, un magnífico ejemplo de arquitectura islámica en España. Descubre su historia y sus hermosos patios y salones.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0d133efab228a11f8131",
      "nombre": "Puente de Piedra",
      "img": "https://postimg.cc/yJGZdKRQ",
      "descripcion": "Contempla el Puente de Piedra, un símbolo histórico de Zaragoza que cruza el río Ebro. Disfruta de las vistas del río y de la ciudad desde este emblemático puente.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "nombre": "Museo Pablo Gargallo",
      "img": "https://postimg.cc/B87xKDrC",
      "descripcion": "Sumérgete en el mundo del escultor Pablo Gargallo en este museo dedicado a su obra. Descubre sus innovadoras técnicas y su impacto en el arte moderno.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "ciudad"
    
    },
    {
    
      "nombre": "Parque Grande José Antonio Labordeta",
      "img": "https://postimg.cc/TKRmNCG9",
      "descripcion": "Relájate en este extenso parque urbano, nombrado en honor al cantautor José Antonio Labordeta. Disfruta de sus áreas verdes, lagos y senderos para pasear.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "ciudad"
    
    },
    {
      "nombre": "Monasterio de Piedra",
      "img": "https://postimg.cc/7J07dRfB",
      "descripcion": "Embárcate en una escapada tranquila al Monasterio de Piedra, un remanso de paz en medio de la naturaleza. Explora sus jardines, cascadas y antiguas edificaciones monásticas.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "nombre": "Parque Natural del Moncayo",
      "img": "https://postimg.cc/KR7B5dXj",
      "descripcion": "Descubre la belleza natural del Parque Natural del Moncayo, hogar de la montaña más alta del Sistema Ibérico. Disfruta de sus senderos para caminatas y observa la diversa flora y fauna.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "nombre": "Parque Natural de los Cañones y Sierra de Guara",
      "img": "https://postimg.cc/crGfwdbP",
      "descripcion": "Sumérgete en la naturaleza virgen del Parque Natural de los Cañones y Sierra de Guara. Embárcate en emocionantes actividades al aire libre como senderismo, escalada y barranquismo.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "nombre": "Valle de Hecho",
      "img": "https://postimg.cc/4KycsyYH",
      "descripcion": "Descubre la belleza natural del Valle de Hecho, un paraíso para los amantes del senderismo y la observación de aves. Explora sus valles, bosques y picos montañosos.",
      "provincia": "661cd1bdcab02767690bce95",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0d273efab228a11f8133",
      "nombre": "Catedral de Teruel",
      "img": "https://postimg.cc/2q4X4Cd6",
      "descripcion": "Visita la hermosa Catedral de Teruel, un magnífico ejemplo de arquitectura mudéjar. Admira su torre mudéjar y explora su interior, donde encontrarás obras de arte religioso.",
      "provincia": "661cd1c6cab02767690bce97",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0d403efab228a11f8137",
      "nombre": "Mausoleo de los Amantes de Teruel",
      "img": "https://postimg.cc/KkxpfCQ5",
      "descripcion": "Visita el Mausoleo de los Amantes de Teruel, dedicado a la historia de amor de Diego e Isabel. Descubre la leyenda y admira la escultura que representa a los amantes.",
      "provincia": "661cd1c6cab02767690bce97",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0d5a3efab228a11f8139",
      "nombre": "Acueducto de los Arcos",
      "img": "https://postimg.cc/30wS5ps4",
      "descripcion": "Contempla el impresionante Acueducto de los Arcos, una obra de ingeniería hidráulica construida en el siglo XVI para abastecer de agua a Teruel. Disfruta de su arquitectura histórica.",
      "provincia": "661cd1c6cab02767690bce97",
      "comunidad": "Aragón",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0d683efab228a11f813b",
      "nombre": "Albarracín",
      "img": "https://postimg.cc/XZcQrQ3B",
      "descripcion": "Explora el encantador pueblo medieval de Albarracín, considerado uno de los pueblos más bonitos de España. Recorre sus estrechas calles empedradas y admira sus murallas y casas de colores.",
      "provincia": "661cd1c6cab02767690bce97",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0d773efab228a11f813d",
      "nombre": "Parque Cultural del Río Martín",
      "img": "https://postimg.cc/QHyPD4xX",
      "descripcion": "Embárcate en una aventura en el Parque Cultural del Río Martín, un impresionante cañón con formaciones geológicas únicas. Descubre pinturas rupestres, cuevas y paisajes sorprendentes.",
      "provincia": "661cd1c6cab02767690bce97",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0d9b3efab228a11f813f",
      "nombre": "Parque Geológico de Aliaga",
      "img": "https://postimg.cc/gnnSgVy1",
      "descripcion": "Explora el Parque Geológico de Aliaga, un lugar fascinante donde encontrarás formaciones geológicas únicas y restos fósiles de gran interés científico. Disfruta de rutas de senderismo y observación geológica.",
      "provincia": "661cd1c6cab02767690bce97",
      "comunidad": "Aragón",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0dc53efab228a11f8141",
      "nombre": "La Seu Vella de Lleida",
      "img": "https://postimg.cc/CzrjKkP",
      "descripcion": "Visita la majestuosa La Seu Vella de Lleida, una catedral gótica situada en lo alto de una colina con vistas panorámicas de la ciudad. Explora su impresionante arquitectura y su rica historia.",
      "provincia": "661cd1eacab02767690bce8c",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0df63efab228a11f8143",
      "nombre": "La Seu Nova",
      "img": "https://postimg.cc/BL3Fzg6x",
      "descripcion": "Descubre La Seu Nova, la catedral nueva de Lleida, construida en estilo neoclásico en el siglo XVIII. Admira su elegante arquitectura y visita su interior.",
      "provincia": "661cd1eacab02767690bce8c",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0e013efab228a11f8145",
      "nombre": "Castillo de Gardeny",
      "img": "https://postimg.cc/pmgzfxMc",
      "descripcion": "Explora el Castillo de Gardeny, una fortaleza templaria situada en las afueras de Lleida. Descubre su historia militar y disfruta de las vistas panorámicas desde lo alto de la colina.",
      "provincia": "661cd1eacab02767690bce8c",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0e0e3efab228a11f8147",
      "nombre": "Parque Nacional de Aigüestortes y Estany de Sant Maurici",
      "img": "https://postimg.cc/nXsq9rgQ",
      "descripcion": "Embárcate en una aventura en el Parque Nacional de Aigüestortes y Estany de Sant Maurici, un paraíso natural de lagos, montañas y bosques en los Pirineos. Disfruta de rutas de senderismo y paisajes espectaculares.",
      "provincia": "661cd1eacab02767690bce8c",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0e1b3efab228a11f8149",
      "nombre": "Vall de Boí",
      "img": "https://postimg.cc/XZdFxhVj",
      "descripcion": "Descubre la belleza del Vall de Boí, un valle pirenaico declarado Patrimonio de la Humanidad por la UNESCO. Visita sus iglesias románicas y admira sus paisajes montañosos.",
      "provincia": "661cd1eacab02767690bce8c",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0e463efab228a11f814d",
      "nombre": "Estación de Esquí de Baqueira Beret",
      "img": "https://postimg.cc/hz0mRdzN",
      "descripcion": "Disfruta del esquí y otros deportes de invierno en la Estación de Esquí de Baqueira Beret, una de las mejores de los Pirineos. Descubre sus pistas de esquí, paisajes nevados y servicios de alta calidad.",
      "provincia": "661cd1eacab02767690bce8c",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0e6e3efab228a11f814f",
      "nombre": "Barri Vell (Barrio Viejo) de Girona",
      "img": "https://postimg.cc/14CH8kX2",
      "descripcion": "Explora el encantador Barri Vell de Girona, el casco antiguo de la ciudad. Recorre sus estrechas calles empedradas, admira sus casas medievales y descubre sus plazas históricas.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0e783efab228a11f8151",
      "nombre": "Catedral de Girona",
      "img": "https://postimg.cc/crPBmfQc",
      "descripcion": "Visita la majestuosa Catedral de Girona, una obra maestra del gótico catalán. Admira su impresionante nave, su claustro y su famosa escalera barroca.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0e803efab228a11f8153",
      "nombre": "Murallas de Girona",
      "img": "https://postimg.cc/FYcgn1pX",
      "descripcion": "Recorre las antiguas murallas de Girona, que datan de la época romana y medieval. Disfruta de las vistas panorámicas de la ciudad desde lo alto de sus torres y baluartes.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0e8a3efab228a11f8155",
      "nombre": "Call Jueu (Barrio Judío) de Girona",
      "img": "https://postimg.cc/GBCJ0rg8",
      "descripcion": "Descubre la historia del Call Jueu de Girona, uno de los barrios judíos mejor conservados de Europa. Recorre sus estrechas callejuelas y visita su antigua sinagoga.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0eb03efab228a11f8157",
      "nombre": "Vía Verde del Carrilet",
      "img": "https://postimg.cc/LnJVLxZX",
      "descripcion": "Recorre la Vía Verde del Carrilet, una ruta cicloturista que sigue el antiguo trazado del tren de vapor entre Olot y Girona. Disfruta de paisajes naturales, pueblos encantadores y una experiencia tranquila.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0ebc3efab228a11f8159",
      "nombre": "La Garrotxa",
      "img": "https://postimg.cc/JyjQ2t1B",
      "descripcion": "Descubre la belleza de La Garrotxa, una comarca volcánica con paisajes únicos y pueblos medievales. Explora sus parques naturales, volcanes inactivos y senderos de montaña.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0ed83efab228a11f815d",
      "nombre": "Costa Brava",
      "img": "https://postimg.cc/Nyk8BVZN",
      "descripcion": "Descubre la espectacular Costa Brava, con sus playas de aguas cristalinas, calas escondidas y pintorescos pueblos pesqueros. Disfruta del sol, el mar y la deliciosa gastronomía mediterránea.",
      "provincia": "661cd1d3cab02767690bce9b",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0eed3efab228a11f815f",
      "nombre": "Tarraco Romana",
      "img": "https://postimg.cc/py3ppCQR",
      "descripcion": "Explora Tarraco Romana, el conjunto arqueológico de Tarragona declarado Patrimonio de la Humanidad por la UNESCO. Visita el Anfiteatro, el Circo Romano y las Murallas para sumergirte en la historia de la antigua Tarraco.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0ef63efab228a11f8161",
      "nombre": "Catedral de Tarragona",
      "img": "https://postimg.cc/0bmrmSZm",
      "descripcion": "Visita la imponente Catedral de Tarragona, un ejemplo destacado de arquitectura románica y gótica en España. Admira su claustro, sus capillas y sus impresionantes vistas panorámicas desde lo alto.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0f133efab228a11f8163",
      "nombre": "Plaça de la Font",
      "img": "https://postimg.cc/FfGYzQpB",
      "descripcion": "Pasea por la Plaça de la Font, una encantadora plaza en el centro de Tarragona. Disfruta de sus terrazas, fuentes y ambiente animado, rodeado de edificios históricos y tiendas.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0f203efab228a11f8165",
      "nombre": "Anfiteatro de Tarragona",
      "img": "https://postimg.cc/7JJhKJkF",
      "descripcion": "Visita el impresionante Anfiteatro de Tarragona, un antiguo escenario romano que aún conserva su estructura original. Imagina los espectáculos y batallas que tuvieron lugar en este emblemático lugar.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0f2d3efab228a11f8167",
      "nombre": "Parque Natural del Delta del Ebro",
      "img": "https://postimg.cc/NLKKsSHd",
      "descripcion": "Explora el Parque Natural del Delta del Ebro, un impresionante humedal que alberga una gran diversidad de flora y fauna. Descubre sus arrozales, lagunas y playas vírgenes, y observa aves migratorias en su hábitat natural.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0f493efab228a11f8169",
      "nombre": "Parque Natural de la Serra del Montsià",
      "img": "https://postimg.cc/FdR7Jnns",
      "descripcion": "Visita el Parque Natural de la Serra del Montsià, un área protegida que ofrece paisajes montañosos, bosques mediterráneos y rutas de senderismo. Descubre la flora y fauna autóctonas de la región.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0f5d3efab228a11f816b",
      "nombre": "Ruta del Cister",
      "img": "https://postimg.cc/zbc3wS9w",
      "descripcion": "Recorre la Ruta del Cister, un itinerario cultural que te lleva a través de tres monasterios cistercienses en la provincia de Tarragona: Poblet, Santes Creus y Vallbona de les Monges. Descubre la arquitectura y la historia de estos impresionantes edificios religiosos.",
      "provincia": "661cd1d9cab02767690bce9d",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0f7e3efab228a11f816d",
      "nombre": "Sagrada Familia",
      "img": "https://postimg.cc/PpmFY2L9",
      "descripcion": "Visita la icónica Sagrada Familia, la obra maestra inacabada de Antoni Gaudí en Barcelona. Admira su impresionante arquitectura modernista y descubre la rica simbología de este templo único.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0f8b3efab228a11f816f",
      "nombre": "Parque Güell",
      "img": "https://postimg.cc/30YfBmmR",
      "descripcion": "Explora el colorido Parque Güell, otro de los magníficos diseños de Antoni Gaudí en Barcelona. Pasea por sus jardines, admira sus mosaicos y disfruta de las impresionantes vistas de la ciudad.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0f983efab228a11f8171",
      "nombre": "Las Ramblas",
      "img": "https://postimg.cc/qgGpdGm1",
      "descripcion": "Recorre Las Ramblas, el famoso paseo peatonal de Barcelona. Disfruta de la animada atmósfera, visita los mercados locales, y admira la arquitectura y las estatuas callejeras a lo largo de esta bulliciosa vía.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0fa53efab228a11f8173",
      "nombre": "Barrio Gótico",
      "img": "https://postimg.cc/m1jX6kyS",
      "descripcion": "Sumérgete en la historia del Barrio Gótico de Barcelona, ​​donde encontrarás calles estrechas, plazas encantadoras y edificios históricos. Explora la Catedral de Barcelona, el Palau de la Generalitat y otros lugares emblemáticos.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0fb93efab228a11f8175",
      "nombre": "Montjuïc",
      "img": "https://postimg.cc/TymXNjLq",
      "descripcion": "Explora Montjuïc, una montaña que ofrece una vista panorámica de Barcelona. Visita el Castillo de Montjuïc, los Jardines de Miramar, el Museo Nacional de Arte de Cataluña y disfruta de espectáculos en el Estadio Olímpico.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "ciudad",
      "__v": 0
    },
    {
      "_id": "661d0fd93efab228a11f8177",
      "nombre": "Parque Natural de la Montaña de Montserrat",
      "img": "https://postimg.cc/w3z9Prkt",
      "descripcion": "Explora el impresionante Parque Natural de la Montaña de Montserrat, donde encontrarás picos rocosos, cuevas y senderos para practicar senderismo. Visita el Monasterio de Montserrat y disfruta de las vistas panorámicas.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0feb3efab228a11f8179",
      "nombre": "Sierra de Collserola",
      "img": "https://postimg.cc/xXXQMV9Z",
      "descripcion": "Embárcate en una aventura en la Sierra de Collserola, un espacio natural protegido cerca de Barcelona. Disfruta de senderismo, ciclismo de montaña y observación de aves en este pulmón verde.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d0ff83efab228a11f817b",
      "nombre": "Parque Natural del Garraf",
      "img": "https://postimg.cc/BXYsjnfD",
      "descripcion": "Descubre la belleza del Parque Natural del Garraf, con acantilados, playas vírgenes y bosques mediterráneos. Realiza senderismo, escalada o simplemente relájate en la costa de este impresionante parque.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
    },
    {
      "_id": "661d10143efab228a11f817d",
      "nombre": "Reserva Natural de las Fuentes del Llobregat",
      "img": "https://postimg.cc/tYCpRVwp",
      "descripcion": "Descubre la Reserva Natural de las Fuentes del Llobregat, un área protegida que alberga una gran biodiversidad de flora y fauna. Realiza senderismo y descubre cascadas, cuevas y manantiales en este entorno natural.",
      "provincia": "661cd1dfcab02767690bce9f",
      "comunidad": "Cataluña",
      "tipo": "rural",
      "__v": 0
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