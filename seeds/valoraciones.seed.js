require("dotenv").config();

const mongoose = require('mongoose');

const Valoracion = require('../models/rating.model');

const arrayValoraciones = [
    {
        "actividad": "662d2741e3a35166e3800ca0",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Una joya arquitectónica! La Catedral de León me dejó sin palabras. La combinación de estilos gótico y renacentista es impresionante. ¡Definitivamente un must-see en España!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca0",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Increíble experiencia! Desde que entras por la puerta, te sumerges en siglos de historia y arte. Los detalles en las vidrieras y las esculturas son simplemente fascinantes. ¡Una visita que no olvidaré!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca0",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Maravillosa! La Catedral de León es una obra maestra que te deja boquiabierto. La majestuosidad de sus columnas y la delicadeza de sus adornos te transportan a otra época. ¡Altamente recomendada!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca0",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "¡Impresionante trabajo de arquitectura y devoción! La Catedral de León es un lugar sagrado y monumental que transmite una sensación de paz y grandeza. Cada rincón cuenta una historia. ¡No te lo puedes perder!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca0",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Una visita obligada en León! Quedé asombrado por la grandeza de esta catedral. La calidad de las esculturas y la magnificencia de su interior son simplemente asombrosas. ¡Una experiencia que superó mis expectativas!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca0",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "¡Espectacular! La Catedral de León es una joya que brilla con luz propia. La belleza de su arquitectura y la serenidad que se respira en su interior son incomparables. ¡Definitivamente uno de los lugares más impresionantes que he visitado!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca4",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Una experiencia inolvidable! Recorrer la Ruta del Cares fue como adentrarse en un paisaje de ensueño. Los acantilados, el río y la naturaleza salvaje te dejan sin aliento. ¡Recomendada al 100% para los amantes del senderismo y la aventura!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca4",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Impresionante belleza natural! La Ruta del Cares ofrece vistas panorámicas espectaculares que te hacen sentir pequeño ante la grandeza de la naturaleza. El recorrido es desafiante pero gratificante. ¡Una experiencia que merece la pena vivir!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca4",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Una joya escondida en los Picos de Europa! Caminar por la Ruta del Cares es una experiencia única que te conecta con la naturaleza en su estado más puro. Los paisajes son simplemente impresionantes y te hacen olvidar el cansancio. ¡No te arrepentirás de hacer este recorrido!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca4",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "¡Increíble aventura! La Ruta del Cares es un tesoro que hay que descubrir. Los paisajes de montaña te dejarán sin palabras y las vistas del desfiladero son simplemente impresionantes. ¡Una caminata que recordaré para siempre!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca4",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Espectacular senderismo en medio de la naturaleza! La Ruta del Cares es un paraíso para los amantes del trekking. Los paisajes son de una belleza indescriptible y la sensación de paz que se respira es incomparable. ¡Una experiencia que todos deberían vivir al menos una vez en la vida!"
    },
    {
        "actividad": "662d2741e3a35166e3800ca4",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "¡Increíblemente hermoso! La Ruta del Cares es una de las caminatas más impresionantes que he hecho. Los paisajes son de otro mundo y la sensación de estar rodeado de montañas es indescriptible. ¡Definitivamente vale la pena el esfuerzo!"
    },
    {
        "actividad": "661cfb2f3efab228a11f807d",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Encantador y lleno de historia! El Casco Histórico de Pontevedra es como un viaje en el tiempo. Sus calles empedradas, plazas pintorescas y edificios históricos te transportan a épocas pasadas. ¡Una visita obligada para los amantes de la arquitectura y la cultura!"
    },
    {
        "actividad": "661cfb2f3efab228a11f807d",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Una joya escondida en Galicia! El Casco Histórico de Pontevedra es simplemente encantador. Sus callejuelas estrechas y sus casas de piedra crean un ambiente mágico y acogedor. ¡Un lugar perfecto para perderse y descubrir la auténtica esencia gallega!"
    },
    {
        "actividad": "661cfb2f3efab228a11f807d",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Maravillosamente conservado! El Casco Histórico de Pontevedra es un verdadero tesoro histórico. Sus iglesias centenarias, plazas animadas y rincones con encanto hacen que cada paso sea una delicia. ¡Una experiencia que te transporta al pasado y te deja con ganas de más!"
    },
    {
        "actividad": "661cfb2f3efab228a11f807d",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "¡Increíble atmósfera! El Casco Histórico de Pontevedra es una joya que merece ser explorada con calma. Sus edificios bien conservados y su ambiente tranquilo te invitan a pasear sin prisas. ¡Una experiencia auténtica y llena de historia!"
    },
    {
        "actividad": "661cfb2f3efab228a11f807d",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Puro encanto gallego! El Casco Histórico de Pontevedra es un lugar que te enamora desde el primer momento. Sus callejones adoquinados, sus plazas llenas de vida y sus edificios históricos te hacen sentir parte de un cuento. ¡No te lo puedes perder si visitas Galicia!"
    },
    {
        "actividad": "661cfb2f3efab228a11f807d",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "¡Una delicia para los sentidos! El Casco Histórico de Pontevedra es un lugar lleno de sorpresas. Sus edificios antiguos, sus tiendas tradicionales y su ambiente relajado te invitan a disfrutar de cada rincón. ¡Una experiencia que te dejará con ganas de volver!"
    },
    {
        "actividad": "661cfb5b3efab228a11f8085",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario":"¡Una experiencia única en plena naturaleza! La Ruta de Senderismo por las Fragas do Eume es simplemente espectacular. Los bosques de ribera, los ríos cristalinos y la vegetación exuberante crean un entorno mágico que te atrapa desde el primer momento. ¡Imprescindible para los amantes del senderismo y la naturaleza!"
    },
    {
        "actividad": "661cfb5b3efab228a11f8085",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Un paraíso verde en Galicia! Recorrer la Ruta de Senderismo por las Fragas do Eume es como adentrarse en un cuento de hadas. Los caminos serpenteantes, los árboles centenarios y el sonido del agua crean una atmósfera de paz y tranquilidad. ¡Una experiencia que te conecta con la naturaleza en su estado más puro!"
    },
    {
        "actividad": "661cfb5b3efab228a11f8085",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Increíble belleza natural! La Ruta de Senderismo por las Fragas do Eume es una auténtica joya de Galicia. Los paisajes son simplemente impresionantes y la variedad de flora y fauna es asombrosa. ¡Una caminata que te deja sin aliento en cada paso!"
    },
    {
        "actividad": "661cfb5b3efab228a11f8085",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "¡Una aventura inolvidable! Hacer la Ruta de Senderismo por las Fragas do Eume fue una experiencia que superó todas mis expectativas. Los senderos bien señalizados, las cascadas escondidas y los miradores panorámicos hacen que cada momento sea especial. ¡Recomendada para todos los amantes de la naturaleza!"
    },
    {
        "actividad": "661cfb5b3efab228a11f8085",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Magia en cada rincón! Las Fragas do Eume son un lugar único en el mundo y la ruta de senderismo es la mejor manera de descubrir su belleza. Los bosques de ribera, los monasterios medievales y las vistas panorámicas son simplemente impresionantes. ¡Una experiencia que te deja con ganas de más!"
    },
    {
        "actividad": "661cfb5b3efab228a11f8085",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "¡Increíblemente hermoso! Hacer la Ruta de Senderismo por las Fragas do Eume fue como entrar en un mundo de ensueño. La diversidad de paisajes, la tranquilidad del entorno y la sensación de estar en armonía con la naturaleza son incomparables. ¡Una experiencia que recordaré para siempre!"
    },
    {
        "actividad": "661cfe313efab228a11f80af",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Una joya arquitectónica en el corazón de Oviedo! La Catedral es impresionante tanto por fuera como por dentro. Su arquitectura gótica y su historia fascinante te transportan a otra época. ¡Una visita obligada para quienes aprecian el arte y la cultura!"
    },
    {
        "actividad": "661cfe313efab228a11f80af",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Increíble belleza histórica! La Catedral de Oviedo es un monumento impresionante que refleja siglos de historia. Sus detalles arquitectónicos y sus obras de arte son simplemente deslumbrantes. ¡Una experiencia que no te puedes perder si visitas la ciudad!"
    },
    {
        "actividad": "661cfe313efab228a11f80af",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Impresionante obra de arte! Visitar la Catedral de Oviedo es como hacer un viaje en el tiempo. Su majestuosa arquitectura y su ambiente sagrado te envuelven desde el primer momento. ¡Una experiencia única e inolvidable!"
    },
    {
        "actividad": "661cfe313efab228a11f80af",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "¡Una visita que deja huella! La Catedral de Oviedo es un tesoro cultural que merece la pena descubrir. Sus capillas, su claustro y su impresionante altar mayor son verdaderas obras maestras. ¡Un lugar lleno de historia y espiritualidad!"
    },
    {
        "actividad": "661cfe313efab228a11f80af",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Maravilla arquitectónica en Asturias! La Catedral de Oviedo es un lugar que te deja sin aliento. Su imponente fachada y su interior ricamente decorado son una muestra del arte gótico en su máximo esplendor. ¡Una visita que vale la pena hacer!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Esplendor religioso y cultural! La Catedral de Oviedo es un lugar emblemático que cautiva a quienes lo visitan. Su historia, su arquitectura y su importancia religiosa la convierten en un imprescindible de la ciudad. ¡Una experiencia enriquecedora para todos los viajeros!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Una maravilla natural que te deja sin palabras! Los Picos de Europa son un paraíso para los amantes de la montaña y la naturaleza. Sus paisajes imponentes, sus rutas de senderismo y su fauna y flora únicas hacen de este lugar un destino imprescindible. ¡Una experiencia que te conecta con lo más salvaje y hermoso de Asturias!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Espectacular belleza natural! Los Picos de Europa son simplemente impresionantes. Sus cumbres nevadas, sus valles profundos y sus lagos cristalinos te dejan sin aliento. Recorrer sus senderos es una experiencia inolvidable que te acerca a la grandeza de la naturaleza. ¡Recomendado para todos los amantes del aire libre y la aventura!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario":"661ba9d9e9065ef1b154ebff" ,
        "valoracion": 5,
        "comentario": "¡Un tesoro natural que hay que descubrir! El Parque Nacional de los Picos de Europa es un lugar único en el mundo. Sus paisajes escarpados y su biodiversidad asombrosa te invitan a explorar cada rincón. Desde caminatas fáciles hasta ascensos desafiantes, este parque ofrece algo para todos los niveles de habilidad. ¡No te arrepentirás de visitarlo!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Impresionante paraíso montañoso en Asturias! Los Picos de Europa son un regalo de la naturaleza que merece ser explorado. Sus picos majestuosos, sus profundos desfiladeros y sus pintorescos pueblos te transportan a un mundo de belleza indescriptible. ¡Una experiencia que supera cualquier expectativa!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "¡Increíble aventura al aire libre! Recorrer el Parque Nacional de los Picos de Europa es una experiencia que nunca olvidarás. Sus senderos bien señalizados te llevan a través de paisajes de ensueño, mientras que la posibilidad de avistar fauna silvestre añade emoción a la aventura. ¡Un destino imprescindible para los amantes de la naturaleza y la aventura!"
    },
    {
        "actividad": "661cfe763efab228a11f80b9",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Una escapada inolvidable en plena naturaleza! Los Picos de Europa son un refugio de tranquilidad y belleza. Sus impresionantes montañas, sus bosques frondosos y sus ríos cristalinos te invitan a desconectar del mundo y conectar con la naturaleza. ¡Una experiencia que te dejará con ganas de volver una y otra vez!"
    },
    {
        "actividad": "661cfeb93efab228a11f80c5",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Encantador y lleno de vida! El Centro Histórico de Santander es un lugar que te atrapa desde el primer momento. Sus calles empedradas, sus plazas animadas y sus edificios históricos te transportan a otra época. ¡Una delicia para pasear y descubrir la esencia de la ciudad!"
    },
    {
        "actividad": "661cfeb93efab228a11f80c5",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "¡Tesoro cultural en la costa cántabra! Santander tiene un Centro Histórico que rebosa encanto por todas partes. Sus edificios emblemáticos, sus rincones con historia y sus vistas al mar lo convierten en un lugar único. ¡Una visita obligada para quienes aman la arquitectura y la cultura!"
    },
    {
        "actividad": "661cfeb93efab228a11f80c5",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "¡Atmósfera única y acogedora! El Centro Histórico de Santander es un lugar donde se respira historia y autenticidad. Sus callejuelas llenas de tiendas, bares y restaurantes te invitan a perderte y disfrutar de la vida local. ¡Una experiencia que te enamorará!"
    },
    {
        "actividad": "661cfeb93efab228a11f80c5",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "¡Santander en su esencia más pura! Recorrer el Centro Histórico es como viajar en el tiempo. Sus palacios, iglesias y plazas te cuentan la historia de la ciudad mientras te sumerges en su ambiente vibrante y cosmopolita. ¡Una joya que no puedes dejar de visitar!"
    },
    {
        "actividad": "661cfeb93efab228a11f80c5",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "¡Un paseo imprescindible en Santander! El Centro Histórico es el corazón de la ciudad y un lugar que no te puedes perder. Sus calles peatonales, sus terrazas con encanto y su arquitectura señorial te conquistan al instante. ¡Una experiencia que te deja con ganas de volver!"
    },
    {
        "actividad": "661cfeb93efab228a11f80c5",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "¡Ambiente auténtico y pintoresco! Santander tiene un Centro Histórico que enamora a quienes lo visitan. Sus edificios coloridos, sus plazas animadas y su gente amable hacen que cada momento sea especial. ¡Una experiencia que recordarás con cariño!"
    },
    {
        "actividad": "661d007c3efab228a11f80da",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "¡Increíbles paisajes! Senderos serenos, cascadas imponentes y aire fresco. Una escapada natural imperdible."
    },
    {
        "actividad": "661d007c3efab228a11f80da",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Fascinante biodiversidad en un entorno de ensueño. Ideal para senderismo y disfrutar de la naturaleza."
    },
    {
        "actividad": "661d007c3efab228a11f80da",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Un paraíso para explorar. Senderos bien señalizados, vistas impresionantes y tranquilidad absoluta. ¡Maravilloso!"
    },
    {
        "actividad": "661d007c3efab228a11f80da",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Un rincón de paz y belleza. Cascadas, cuevas y miradores que te dejan sin aliento. ¡Mágico!"
    },
    {
        "actividad": "661d007c3efab228a11f80da",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Naturaleza en su esplendor. Aventura, flora y fauna en un entorno de cuento. ¡Inolvidable!"
    },
    {
        "actividad": "661d007c3efab228a11f80da",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Un regalo para los sentidos. Naturaleza virgen, paisajes de película y desconexión total. ¡Recomendado al 100%!"
    },
    {
        "actividad": "661d016a3efab228a11f80e4",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Icono arquitectónico. Obras innovadoras, exposiciones cautivadoras. Una experiencia cultural imperdible."
    },
    {
        "actividad": "661d016a3efab228a11f80e4",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Vanguardia en cada esquina. Arquitectura espectacular, colecciones impresionantes. Una joya cultural que deja huella."
    },
    {
        "actividad": "661d016a3efab228a11f80e4",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Arte que inspira. Diseño innovador, exposiciones emocionantes. Una visita transformadora y única."
    },
    {
        "actividad": "661d016a3efab228a11f80e4",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Impactante desde fuera y dentro. Obras de arte fascinantes, arquitectura impresionante. Un museo que nunca decepciona."
    },
    {
        "actividad": "661d016a3efab228a11f80e4",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Un tesoro cultural. Obras maestras contemporáneas, ambiente inspirador. Una visita que enriquece el alma."
    },
    {
        "actividad": "661d016a3efab228a11f80e4",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Una experiencia inolvidable. Arte sorprendente, arquitectura icónica. Un lugar que te deja sin palabras."
    },
    {
        "actividad": "661d01d63efab228a11f80ec",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Paraíso natural. Playas vírgenes, bosques exuberantes y biodiversidad única. Un lugar para conectar con la naturaleza y disfrutar de su esplendor."
    },
    {
        "actividad": "661d01d63efab228a11f80ec",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Belleza sin igual. Acantilados impresionantes, aves migratorias y pueblos con encanto. Un santuario para los amantes de la naturaleza."
    },
    {
        "actividad": "661d01d63efab228a11f80ec",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Riqueza natural. Marismas fascinantes, paisajes cambiantes y tradiciones arraigadas. Un lugar donde la biodiversidad se fusiona con la cultura."
    },
    {
        "actividad": "661d01d63efab228a11f80ec",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Encanto costero. Bahías pintorescas, senderos escénicos y experiencias auténticas. Un destino que cautiva con su belleza y autenticidad."
    },
    {
        "actividad": "661d01d63efab228a11f80ec",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Tesoro vasco. Naturaleza protegida, historia milenaria y gastronomía excepcional. Un lugar que sorprende y enamora a cada paso."
    },
    {
        "actividad": "661d01d63efab228a11f80ec",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Para perderse. Lugares secretos, vistas panorámicas y tranquilidad absoluta. Un refugio para desconectar y recargar energías en plena armonía con la naturaleza."
    },
    {
        "actividad": "661d0b4f3efab228a11f80fb",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Arquitectura impresionante. Historia fascinante, detalles magníficos. Una visita que te transporta a otra época y te deja sin aliento."
    },
    {
        "actividad": "661d0b4f3efab228a11f80fb",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Joyero de Logroño. Belleza gótica, vidrieras deslumbrantes. Una experiencia espiritual y cultural que merece la pena vivir."
    },
    {
        "actividad": "661d0b4f3efab228a11f80fb",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Tesoro histórico. Arte sacro, atmósfera solemne. Un lugar emblemático que te sumerge en la grandeza del pasado."
    },
    {
        "actividad": "661d0b4f3efab228a11f80fb",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Impresionante obra. Espacio sagrado, columnas imponentes. Una maravilla arquitectónica que deja una profunda impresión."
    },
    {
        "actividad": "661d0b4f3efab228a11f80fb",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Centro espiritual. Devoción palpable, ambiente sereno. Un refugio de paz y reflexión en medio del bullicio de la ciudad."
    },
    {
        "actividad": "661d0b4f3efab228a11f80fb",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Monumento emblemático. Testimonio de fe, cultura y arte. Un símbolo de identidad que enriquece el patrimonio de la ciudad."
    },
    {
        "actividad": "661d0ba23efab228a11f8105",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Paraíso natural. Senderos espectaculares, paisajes idílicos. Un escape perfecto para los amantes del senderismo y la naturaleza."
    },
    {
        "actividad": "661d0ba23efab228a11f8105",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Belleza salvaje. Bosques frondosos, arroyos cristalinos. Un santuario para desconectar y conectar con lo más auténtico de la naturaleza."
    },
    {
        "actividad": "661d0ba23efab228a11f8105",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Aventura asegurada. Cumbres desafiantes, fauna sorprendente. Un destino que te invita a explorar y descubrir su diversidad."
    },
    {
        "actividad": "661d0ba23efab228a11f8105",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Tesoro de La Rioja. Picos majestuosos, lagunas escondidas. Un lugar para admirar la grandeza de la naturaleza y recargar energías."
    },
    {
        "actividad": "661d0ba23efab228a11f8105",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Escenario de ensueño. Atardeceres mágicos, vistas panorámicas. Un regalo para los sentidos y un escape perfecto de la rutina."
    },
    {
        "actividad": "661d0ba23efab228a11f8105",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Refugio natural. Paz y tranquilidad, biodiversidad única. Un paraíso que cautiva con su belleza y te invita a perderse en su infinita serenidad."
    },
    {
        "actividad": "662f55064e6fffe8f2aea15a",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Imponente belleza. Arquitectura gótica, detalles fascinantes. Una joya histórica que cautiva con su esplendor y esencia espiritual."
    },
    {
        "actividad": "662f55064e6fffe8f2aea15a",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Tesoro navarro. Historia viva, arte sacro. Un lugar de devoción y admiración que enriquece la cultura de la región."
    },
    {
        "actividad": "662f55064e6fffe8f2aea15a",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Monumento emblemático. Icono de Pamplona, escenario de eventos históricos. Una visita imprescindible para entender la identidad de la ciudad."
    },
    {
        "actividad": "662f55064e6fffe8f2aea15a",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Majestuosa grandeza. Altos pilares, vidrieras coloridas. Una experiencia que te sumerge en la solemnidad y la grandeza del pasado."
    },
    {
        "actividad": "662f55064e6fffe8f2aea15a",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Centro espiritual. Silencio reverente, atmósfera sagrada. Un espacio que invita a la contemplación y la reflexión personal."
    },
    {
        "actividad": "662f55064e6fffe8f2aea15a",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Maravilla arquitectónica. Capiteles decorados, claustro sereno. Un testimonio de fe y arte que deja una profunda impresión en el visitante."
    },
    {
        "actividad": "662f55064e6fffe8f2aea160",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Sendero mágico. Paisajes pintorescos, pueblos con encanto. Una travesía espiritual y cultural que enriquece el alma y deja huella."
    },
    {
        "actividad": "662f55064e6fffe8f2aea160",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Ruta histórica. Monumentos medievales, hospitalidad navarra. Un viaje fascinante que conecta con la tradición y la historia del Camino."
    },
    {
        "actividad": "662f55064e6fffe8f2aea160",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Aventura inolvidable. Naturaleza virgen, caminos ancestrales. Una experiencia de autodescubrimiento y superación que deja recuerdos imborrables."
    },
    {
        "actividad": "662f55064e6fffe8f2aea160",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Encanto rural. Campos dorados, aldeas acogedoras. Un recorrido que invita a la introspección y la comunión con la naturaleza."
    },
    {
        "actividad": "662f55064e6fffe8f2aea160",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Travesía espiritual. Paz interior, camaradería entre peregrinos. Un camino de reflexión y encuentro que transforma el corazón."
    },
    {
        "actividad": "662f55064e6fffe8f2aea160",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Caminar hacia la historia. Monumentos milenarios, paisajes inspiradores. Una ruta que te sumerge en la esencia del Camino y te lleva hacia lo más profundo del alma."
    },
    {
        "actividad": "661d0cdf3efab228a11f812d",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Majestuosidad celestial. Arquitectura imponente, devoción palpable. Un lugar de encuentro espiritual que cautiva con su belleza y significado religioso."
    },
    {
        "actividad": "661d0cdf3efab228a11f812d",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Icono de Zaragoza. Historia centenaria, arte sagrado. Una visita imprescindible que deja una profunda impresión en el corazón."
    },
    {
        "actividad": "661d0cdf3efab228a11f812d",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Fe y grandeza. Cúpulas doradas, mosaicos deslumbrantes. Un santuario que invita a la contemplación y la reflexión espiritual."
    },
    {
        "actividad": "661d0cdf3efab228a11f812d",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Emblema de la ciudad. Vistas panorámicas, peregrinación constante. Un símbolo de la identidad zaragozana que deja huella en quienes lo visitan."
    },
    {
        "actividad": "661d0cdf3efab228a11f812d",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Tesoro religioso. Reliquias veneradas, fervor popular. Un lugar de devoción y milagros que inspira esperanza y fervor religioso."
    },
    {
        "actividad": "661d0cdf3efab228a11f812d",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Maravilla arquitectónica. Columnas barrocas, altar imponente. Un monumento que impresiona por su magnificencia y su importancia histórica y cultural."
    },
    {
        "actividad": "662f55064e6fffe8f2aea171",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "Paraíso natural. Cascadas impresionantes, jardines exuberantes. Un oasis de serenidad que sorprende y enamora a cada paso."
    },
    {
        "actividad": "662f55064e6fffe8f2aea171",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 5,
        "comentario": "Magia entre rocas. Senderos encantados, cuevas misteriosas. Un lugar que te transporta a un mundo de fantasía y asombro."
    },
    {
        "actividad": "662f55064e6fffe8f2aea171",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 4,
        "comentario": "Escenario de ensueño. Agua cristalina, vegetación exótica. Un refugio de paz y belleza que invita a la contemplación."
    },
    {
        "actividad": "662f55064e6fffe8f2aea171",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "Maravilla escondida. Ríos serpenteantes, grutas ocultas. Un tesoro natural que revela la grandeza y la diversidad del paisaje."
    },
    {
        "actividad": "662f55064e6fffe8f2aea171",
        "usuario": "661fec93b620e69122b293ac",
        "valoracion": 3,
        "comentario": "Recreo celestial. Rincones secretos, flora y fauna única. Un escape perfecto para conectar con la naturaleza y desconectar del mundo."
    },
    {
        "actividad": "662f55064e6fffe8f2aea171",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Joyero de la naturaleza. Saltos de agua, fauna salvaje. Un destino ideal para disfrutar en familia y crear recuerdos inolvidables."
    },
    {
        "actividad": "662f55064e6fffe8f2aea198",
        "usuario": "661ebf97b620e69122b293a6",
        "valoracion": 4,
        "comentario": "El Museo del Prado es una experiencia cultural increíble. Disfruté mucho de las obras maestras de Velázquez y Goya."
    },
    {
        "actividad": "662f55064e6fffe8f2aea198",
        "usuario": "66237461e7116f5d752b7c42",
        "valoracion": 5,
        "comentario": "Visitar el Museo del Prado fue una experiencia única. Las pinturas de El Greco son simplemente impresionantes. Me quedé sin palabras al contemplar la profundidad y la emoción de cada obra. Definitivamente planeo volver para explorar más a fondo este tesoro del arte."
    },
    {
        "actividad": "662f55064e6fffe8f2aea198",
        "usuario": "662a79b54ede8976c64d8303",
        "valoracion": 3,
        "comentario": "Me gustó el Museo del Prado, pero había demasiada gente y fue difícil apreciar las obras con tranquilidad. A pesar de esto, pude disfrutar de algunas de las piezas más destacadas, como Las Meninas de Velázquez. Sería genial si el museo pudiera implementar medidas para reducir la multitud y mejorar la experiencia de los visitantes."
    },
    {
        "actividad": "662f55064e6fffe8f2aea198",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 2,
        "comentario": "Mi experiencia en el Museo del Prado fue un poco decepcionante. Aunque algunas obras son impresionantes, encontré que la distribución del museo y la información sobre las piezas podrían mejorar. Me hubiera gustado tener más guías o explicaciones para apreciar mejor las obras."
    },
    {
        "actividad": "662f55064e6fffe8f2aea198",
        "usuario": "661ebf97b620e69122b293a6",
        "valoracion": 3,
        "comentario": "Visitar el Museo del Prado fue una experiencia interesante. Aunque disfruté de algunas obras maestras, como Las Meninas de Velázquez, encontré que la cantidad de visitantes dificultaba la apreciación de las obras. Sería genial si se pudiera controlar mejor el flujo de personas para una experiencia más tranquila."
    },
    {
        "actividad": "662f55064e6fffe8f2aea198",
        "usuario": "66252f1426cdad435937cdfa",
        "valoracion": 5,
        "comentario": "El Museo del Prado es simplemente asombroso. Quedé impresionado por la calidad y la diversidad de las obras de arte expuestas. Fue emocionante ver de cerca pinturas que había estudiado en libros de arte. Definitivamente uno de los mejores museos que he visitado."
    },
    {
        "actividad": "662f55064e6fffe8f2aea19e",
        "usuario": "662a79b54ede8976c64d8303",
        "valoracion": 4,
        "comentario": "El embalse de Valmayor es un lugar impresionante para disfrutar de la naturaleza y practicar deportes acuáticos. Pasé un día increíble aquí con mi familia. El entorno es hermoso y la tranquilidad del embalse es realmente relajante. Recomiendo este lugar a cualquiera que busque escapar del ajetreo y el bullicio de la ciudad."
    },
    {
        "actividad": "662f55064e6fffe8f2aea19e",
        "usuario": "661ebf97b620e69122b293a6",
        "valoracion": 5,
        "comentario": "¡El embalse de Valmayor es simplemente espectacular! He visitado este lugar varias veces y nunca me canso de su belleza. Me encanta hacer kayak y paddle surf aquí. El embalse es lo suficientemente grande como para explorar y siempre encuentro rincones tranquilos para relajarme y disfrutar del paisaje. Definitivamente uno de mis lugares favoritos para escapar de la rutina."
    },
    {
        "actividad": "662f55064e6fffe8f2aea19e",
        "usuario": "662abb75cf788cb1ee0b7c15",
        "valoracion": 3,
        "comentario": "El embalse de Valmayor es un lugar bonito, pero en mi última visita estaba un poco abarrotado y había mucho ruido de motos de agua. Esto afectó mi experiencia tranquila y relajante que estaba buscando. Sería genial si se pudieran implementar medidas para regular el número de visitantes y limitar el ruido de las actividades acuáticas."
    },
    {
        "actividad": "662f55064e6fffe8f2aea19e",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 1,
        "comentario": "Mi experiencia en el embalse de Valmayor fue muy decepcionante. El lugar estaba muy sucio y descuidado, con basura esparcida por todas partes. Además, el agua del embalse parecía contaminada y no era segura para nadar. No recomendaría este lugar a nadie."
    },
    {
        "actividad": "662f55064e6fffe8f2aea19e",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 4,
        "comentario": "Visitar el embalse de Valmayor fue una experiencia muy agradable. Me encantó la tranquilidad del entorno y la oportunidad de relajarme junto al agua. También me impresionó la limpieza y el mantenimiento del área. Definitivamente lo recomendaría como un destino para un día de relax."
    },
    {
        "actividad": "662f55064e6fffe8f2aea19e",
        "usuario": "661ebe6cf8983af2ee3786cf",
        "valoracion": 3,
        "comentario": "El embalse de Valmayor tiene un entorno natural hermoso, pero me decepcionó un poco la falta de instalaciones para los visitantes. Sería genial si hubiera más áreas de picnic y lugares para sentarse cómodamente junto al embalse. Además, algunas señales de información sobre la fauna y la flora serían útiles para los visitantes interesados en la naturaleza."
    },
    {
        "actividad": "661d0f7e3efab228a11f816d",
        "usuario": "662abb75cf788cb1ee0b7c15",
        "valoracion": 4,
        "comentario": "La Sagrada Familia es una obra maestra arquitectónica. Quedé impresionado por la grandeza y la belleza de esta iglesia. La visita guiada fue muy informativa y me permitió apreciar mejor los detalles de su diseño. La única desventaja fue la cantidad de turistas, pero aún así vale la pena visitarla."
    },
    {
        "actividad": "661d0f7e3efab228a11f816d",
        "usuario": "662bdc621d3cd3d167d59df1",
        "valoracion": 5,
        "comentario": "¡La Sagrada Familia es simplemente impresionante! Quedé sin palabras al entrar en esta magnífica obra de Gaudí. Cada detalle es asombroso y lleno de significado. La atmósfera es realmente especial y te transporta a otro mundo. Definitivamente una visita obligada en Barcelona."
    },
    {
        "actividad": "661d0f7e3efab228a11f816d",
        "usuario": "662bdc181d3cd3d167d59def",
        "valoracion": 3,
        "comentario": "La Sagrada Familia es impresionante desde el exterior, pero me decepcionó un poco el interior. En mi opinión, la mezcla de estilos y la cantidad de detalles pueden resultar abrumadores. Además, la visita fue un poco cara para lo que ofrecía. Sin embargo, es una atracción icónica que vale la pena ver al menos una vez."
    },
    {
        "actividad": "661d0fd93efab228a11f8177",
        "usuario": "662a79b54ede8976c64d8303",
        "valoracion": 5,
        "comentario": "El Parque Natural de la Montaña de Montserrat es simplemente impresionante. Disfruté de cada momento explorando este paisaje único. Las vistas desde las cimas de las montañas son espectaculares y la energía del lugar es realmente especial. Definitivamente uno de los mejores parques naturales que he visitado."
    },
    {
        "actividad": "661d0fd93efab228a11f8177",
        "usuario": "66252f1426cdad435937cdfa",
        "valoracion": 4,
        "comentario": "El Parque Natural de la Montaña de Montserrat ofrece una experiencia increíble en contacto con la naturaleza. Las formaciones rocosas son impresionantes y los senderos ofrecen vistas panorámicas impresionantes. Sin embargo, la cantidad de turistas puede restarle un poco de encanto al lugar."
    },
    {
        "actividad": "661d0fd93efab228a11f8177",
        "usuario": "662a79b54ede8976c64d8303",
        "valoracion": 3,
        "comentario": "El Parque Natural de la Montaña de Montserrat es un lugar hermoso, pero la cantidad de visitantes puede ser abrumadora. A pesar de ello, las vistas son impresionantes y vale la pena el viaje. Recomiendo visitarlo durante la semana o temprano en la mañana para evitar las multitudes."
    },
    {
        "actividad": "661d0fd93efab228a11f8177",
        "usuario": "662bdc621d3cd3d167d59df1",
        "valoracion": 3,
        "comentario": "El Parque Natural de la Montaña de Montserrat tiene una belleza natural impresionante, pero me decepcionó un poco la falta de infraestructura para los visitantes. Sería genial si hubiera más áreas de descanso y señalización para facilitar la navegación por los senderos."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1e6",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "La Ciudad de las Artes y las Ciencias es un lugar impresionante. Quedé fascinado por la arquitectura moderna y las exhibiciones interactivas. La visita al Oceanogràfic fue especialmente memorable, con una increíble variedad de especies marinas. Definitivamente una visita obligada en Valencia."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1e6",
        "usuario": "661ebf97b620e69122b293a6",
        "valoracion": 4,
        "comentario": "Disfruté mucho de mi visita a la Ciudad de las Artes y las Ciencias. Las estructuras futuristas son impresionantes y las exhibiciones en el Museo de las Ciencias son muy educativas. Sin embargo, encontré que las entradas eran un poco caras para algunas atracciones."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1e6",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 3,
        "comentario": "La Ciudad de las Artes y las Ciencias es interesante, pero me esperaba más. Algunas exhibiciones estaban cerradas durante mi visita y la cantidad de turistas hacía que fuera difícil disfrutar plenamente de la experiencia. Sin embargo, la arquitectura es impresionante."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1e6",
        "usuario": "661ebe8ef8983af2ee3786d1",
        "valoracion": 4,
        "comentario": "La Ciudad de las Artes y las Ciencias es un lugar muy bonito para pasear y tomar fotos. Me impresionó especialmente el Hemisfèric y su proyección en 3D. Sin embargo, encontré que algunas áreas estaban un poco descuidadas y necesitarían más mantenimiento."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1eb",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "El Parque Natural de la Albufera es un lugar impresionante. Disfruté de un tranquilo paseo en barca por el lago y quedé maravillado por la belleza natural que lo rodea. La observación de aves fue una experiencia única y la puesta de sol fue espectacular. Definitivamente un lugar que hay que visitar en Valencia."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1eb",
        "usuario": "661ebe6cf8983af2ee3786cf",
        "valoracion": 4,
        "comentario": "Pasé un día encantador en el Parque Natural de la Albufera. El paisaje es hermoso y la oportunidad de hacer un recorrido en barca por el lago fue muy especial. Sin embargo, encontré que algunas áreas estaban un poco descuidadas y podrían beneficiarse de más limpieza y mantenimiento."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1eb",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 3,
        "comentario": "El Parque Natural de la Albufera es bonito, pero me esperaba más. Encontré que el recorrido en barca era un poco corto y que la experiencia general no estaba tan bien organizada como esperaba. Aún así, la naturaleza es hermosa y vale la pena visitar el parque para disfrutar de un día tranquilo."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1eb",
        "usuario": "661baa24e9065ef1b154ec05",
        "valoracion": 3,
        "comentario": "El Parque Natural de la Albufera ofrece un entorno natural hermoso, pero la experiencia en barca fue un poco decepcionante. El recorrido fue breve y el barco estaba lleno de turistas, lo que restó un poco de encanto al paseo. Sin embargo, la puesta de sol sobre el lago fue increíble."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1be",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "El Alcázar de Toledo es una joya arquitectónica. Quedé impresionado por su imponente presencia y su historia fascinante. La visita guiada fue muy informativa y pude aprender mucho sobre la importancia de este edificio a lo largo de los siglos. Definitivamente una visita obligada en Toledo."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1be",
        "usuario": "662bdc181d3cd3d167d59def",
        "valoracion": 4,
        "comentario": "Disfruté mucho de mi visita al Alcázar de Toledo. La arquitectura es impresionante y las vistas desde lo alto de la torre son espectaculares. Sin embargo, encontré que algunas áreas estaban un poco deterioradas y podrían necesitar más atención en términos de mantenimiento."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1be",
        "usuario": "66252f1426cdad435937cdfa",
        "valoracion": 3,
        "comentario": "El Alcázar de Toledo es interesante desde el punto de vista histórico, pero la experiencia fue un poco decepcionante. Encontré que la visita no estaba muy bien organizada y que había demasiados visitantes al mismo tiempo, lo que dificultaba disfrutar plenamente del lugar."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1be",
        "usuario": "661ebe8ef8983af2ee3786d1",
        "valoracion": 3,
        "comentario": "El Alcázar de Toledo es impresionante desde el exterior, pero me decepcionó un poco el interior. Encontré que algunas áreas estaban cerradas al público y la información disponible era limitada. Sin embargo, la historia del lugar es fascinante y vale la pena visitarlo para aprender sobre el pasado de Toledo."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1c3",
        "usuario": "662bdc181d3cd3d167d59def",
        "valoracion": 5,
        "comentario": "El Parque Nacional de Cabañeros es un tesoro natural. Quedé impresionado por la belleza de sus paisajes y la diversidad de flora y fauna que se pueden encontrar aquí. Realicé varias caminatas por los senderos y quedé maravillado por la tranquilidad y la paz que se respira en el parque. Sin duda, un lugar que hay que visitar para los amantes de la naturaleza."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1c3",
        "usuario": "662bdc621d3cd3d167d59df1",
        "valoracion": 4,
        "comentario": "Disfruté mucho de mi visita al Parque Nacional de Cabañeros. La oportunidad de avistar animales salvajes en su hábitat natural fue emocionante. Además, los miradores ofrecen vistas panorámicas impresionantes. La única desventaja fue que algunos senderos estaban un poco mal mantenidos."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1c3",
        "usuario": "662abb75cf788cb1ee0b7c15",
        "valoracion": 4,
        "comentario": "El Parque Nacional de Cabañeros es un lugar hermoso para desconectar de la ciudad y conectar con la naturaleza. Realicé un safari fotográfico y quedé impresionado por la cantidad de animales que pude ver. Las guías turísticas fueron muy informativas y añadieron valor a la experiencia."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1c3",
        "usuario": "66252f1426cdad435937cdfa",
        "valoracion": 3,
        "comentario": "El Parque Nacional de Cabañeros tiene paisajes impresionantes, pero la experiencia fue un poco decepcionante debido a la cantidad de turistas. En algunas zonas, era difícil encontrar tranquilidad y disfrutar plenamente del entorno natural. Sería genial si se implementaran medidas para regular el número de visitantes."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1ff",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 5,
        "comentario": "La Catedral de Sevilla es impresionante. Quedé maravillado por su imponente arquitectura gótica y la belleza de su interior. La visita a la Giralda ofreció vistas panorámicas increíbles de la ciudad. Sin duda, uno de los lugares más impresionantes que he visitado en Sevilla."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1ff",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 4,
        "comentario": "Disfruté mucho de mi visita a la Catedral de Sevilla. La riqueza de su historia y su arte es simplemente asombrosa. Me impresionaron especialmente los detalles de la Capilla Real y el Patio de los Naranjos. Sin embargo, la cantidad de turistas puede hacer que la visita sea un poco abrumadora."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1ff",
        "usuario": "662bdc621d3cd3d167d59df1",
        "valoracion": 4,
        "comentario": "La Catedral de Sevilla es un lugar impresionante para explorar. La magnitud de sus estructuras y la belleza de sus obras de arte son simplemente asombrosas. Disfruté especialmente de la visita a la Sala Capitular y la subida a la Giralda. Recomiendo llegar temprano para evitar las multitudes."
    },
    {
        "actividad": "662f55064e6fffe8f2aea1ff",
        "usuario": "662bdc181d3cd3d167d59def",
        "valoracion": 3,
        "comentario": "La Catedral de Sevilla es hermosa, pero la experiencia fue un poco decepcionante debido a la cantidad de turistas. En algunos momentos, era difícil apreciar plenamente la magnitud del lugar debido a las aglomeraciones. Sería genial si se pudiera limitar el número de visitantes para una experiencia más tranquila."
    },
    {
        "actividad": "662f55064e6fffe8f2aea205",
        "usuario": "662abb75cf788cb1ee0b7c15",
        "valoracion": 5,
        "comentario": "La ruta por los Pueblos Blancos de la Sierra Norte de Sevilla fue una experiencia inolvidable. Disfruté mucho explorando los encantadores pueblos blancos y admirando sus pintorescas calles y plazas. Los paisajes naturales son impresionantes y el ambiente rural es muy acogedor. Definitivamente una forma perfecta de experimentar la auténtica vida en Andalucía."
    },
    {
        "actividad": "662f55064e6fffe8f2aea205",
        "usuario": "661ebe8ef8983af2ee3786d1",
        "valoracion": 4,
        "comentario": "Realicé la ruta por los Pueblos Blancos de la Sierra Norte de Sevilla y quedé impresionado por la belleza de la región. Cada pueblo tiene su propio encanto único y ofrece vistas panorámicas increíbles. Me encantó especialmente la arquitectura tradicional y la hospitalidad de los lugareños. Sin embargo, algunos caminos pueden ser un poco difíciles de transitar."
    },
    {
        "actividad": "662f55064e6fffe8f2aea205",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 4,
        "comentario": "La ruta por los Pueblos Blancos de la Sierra Norte de Sevilla fue una experiencia fascinante. Los pueblos son pintorescos y llenos de historia, y las vistas de la sierra son impresionantes. Disfruté especialmente de las paradas en los miradores naturales y de las oportunidades para hacer senderismo. Recomiendo esta ruta a cualquiera que quiera explorar la belleza de Andalucía."
    },
    {
        "actividad": "662f55064e6fffe8f2aea205",
        "usuario": "661ba95ae9065ef1b154ebfd",
        "valoracion": 3,
        "comentario": "Realicé la ruta por los Pueblos Blancos de la Sierra Norte de Sevilla y aunque los paisajes eran hermosos, la experiencia fue un poco decepcionante. En algunos pueblos, encontré que había demasiados turistas, lo que restó un poco de autenticidad al ambiente. Además, algunas carreteras estaban en mal estado y hacían difícil el acceso a ciertas áreas."
    },
    {
        "actividad": "662f55064e6fffe8f2aea224",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 5,
        "comentario": "El Museo Picasso de Málaga es simplemente increíble. Quedé impresionado por la extensa colección de obras del famoso artista. La disposición de las obras y la información proporcionada fueron excelentes. Además, el edificio en sí es hermoso y bien conservado. Definitivamente una visita obligada para los amantes del arte."
    },
    {
        "actividad": "662f55064e6fffe8f2aea224",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 4,
        "comentario": "Disfruté mucho de mi visita al Museo Picasso de Málaga. La variedad de obras expuestas ofrece una visión completa del trabajo del artista a lo largo de su vida. Me impresionaron especialmente las obras de su periodo cubista. Sin embargo, encontré que algunas áreas estaban un poco abarrotadas y hubiera preferido más espacio para apreciar las obras."
    },
    {
        "actividad": "662f55064e6fffe8f2aea224",
        "usuario": "66237461e7116f5d752b7c42",
        "valoracion": 4,
        "comentario": "El Museo Picasso de Málaga es un lugar fascinante para explorar la vida y obra del famoso artista. Disfruté mucho de la audioguía que proporcionaba información detallada sobre cada obra. Además, el personal del museo fue muy amable y servicial. Sin embargo, había bastante gente durante mi visita, lo que dificultaba moverse con libertad."
    },
    {
        "actividad": "662f55064e6fffe8f2aea224",
        "usuario": "66252f1426cdad435937cdfa",
        "valoracion": 3,
        "comentario": "El Museo Picasso de Málaga tiene una colección interesante, pero la experiencia fue un poco decepcionante. Encontré que algunas obras estaban mal iluminadas y era difícil apreciar los detalles. Además, la disposición de las salas era un poco confusa y me costó encontrar algunas obras específicas."
    },
    {
        "actividad": "662f55064e6fffe8f2aea229",
        "usuario": "661ebe8ef8983af2ee3786d1",
        "valoracion": 5,
        "comentario": "¡La experiencia de senderismo en el Caminito del Rey fue increíble! Los paisajes son impresionantes y la emoción de caminar por los estrechos senderos colgantes es incomparable. Las vistas desde lo alto son simplemente espectaculares. Definitivamente una actividad que recordaré para siempre."
    },
    {
        "actividad": "662f55064e6fffe8f2aea229",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 3,
        "comentario": "El Caminito del Rey ofrece unas vistas impresionantes, pero la experiencia de senderismo puede ser un poco desafiante. Algunas partes del camino son estrechas y vertiginosas, lo que puede ser intimidante para algunas personas. Sin embargo, las vistas panorámicas hacen que el esfuerzo valga la pena."
    },
    {
        "actividad": "662f55064e6fffe8f2aea229",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 3,
        "comentario": "Hice senderismo en el Caminito del Rey y aunque las vistas eran hermosas, la experiencia fue un poco decepcionante. Había demasiada gente durante mi visita, lo que hacía difícil disfrutar plenamente del camino. Además, algunas áreas estaban un poco descuidadas y necesitaban más mantenimiento."
    },
    {
        "actividad": "662f55064e6fffe8f2aea229",
        "usuario": "66237461e7116f5d752b7c42",
        "valoracion": 2,
        "comentario": "La experiencia de senderismo en el Caminito del Rey fue menos satisfactoria de lo que esperaba. Encontré que algunas partes del camino estaban en mal estado y era difícil caminar con seguridad. Además, la cantidad de turistas hacía que el camino estuviera muy concurrido, lo que restaba un poco de encanto al entorno natural."
    },
    {
        "actividad": "662f55064e6fffe8f2aea24c",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 4,
        "comentario": "La Catedral de Palma de Mallorca es una obra maestra arquitectónica. Quedé impresionado por su magnífica estructura gótica y los detalles de su diseño. La visita guiada fue muy informativa y pude aprender mucho sobre la historia del lugar. Definitivamente una visita que recomendaría a cualquier persona que visite Mallorca."
    },
    {
        "actividad": "662f55064e6fffe8f2aea24c",
        "usuario": "661baa05e9065ef1b154ec03",
        "valoracion": 4,
        "comentario": "La Catedral de Palma de Mallorca es impresionante en su belleza y grandeza. Disfruté mucho de la visita y quedé maravillado por la arquitectura y las obras de arte que alberga. Las vistas desde la terraza son espectaculares. Sin duda, uno de los lugares más destacados de Mallorca."
    },
    {
        "actividad": "662f55064e6fffe8f2aea24c",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 3,
        "comentario": "La Catedral de Palma de Mallorca es impresionante desde el exterior, pero la experiencia dentro fue un poco decepcionante. Encontré que algunas áreas estaban cerradas al público y la cantidad de visitantes hacía que fuera difícil apreciar plenamente la belleza del lugar. Sería genial si se pudiera mejorar la organización de las visitas."
    },
    {
        "actividad": "662f55064e6fffe8f2aea24c",
        "usuario": "662bdc621d3cd3d167d59df1",
        "valoracion": 1,
        "comentario": "Mi experiencia en la Catedral de Palma de Mallorca fue muy decepcionante. A pesar de la impresionante arquitectura, encontré que el interior estaba mal iluminado y poco cuidado. Además, había demasiada gente durante mi visita, lo que hacía difícil disfrutar de la visita. No recomendaría esta actividad."
    },
    {
        "actividad": "662f55064e6fffe8f2aea251",
        "usuario": "661ba9d9e9065ef1b154ebff",
        "valoracion": 5,
        "comentario": "El Parque Natural de Mondragó es simplemente espectacular. Quedé maravillado por la belleza de sus playas, calas y acantilados. Disfruté mucho de las caminatas por los senderos naturales y de la observación de aves. Sin duda, un lugar que recomendaría a cualquiera que visite Mallorca en busca de naturaleza y tranquilidad."
    },
    {
        "actividad": "662f55064e6fffe8f2aea251",
        "usuario": "662bdc621d3cd3d167d59df1",
        "valoracion": 4,
        "comentario": "Disfruté mucho de mi visita al Parque Natural de Mondragó. Las playas son hermosas y el agua cristalina invita a nadar y bucear. Además, los senderos para caminar ofrecen vistas impresionantes de la costa. Sin embargo, encontré que algunas áreas estaban un poco concurridas durante la temporada alta."
    },
    {
        "actividad": "662f55064e6fffe8f2aea251",
        "usuario": "66237461e7116f5d752b7c42",
        "valoracion": 2,
        "comentario": "Mi experiencia en el Parque Natural de Mondragó fue decepcionante. A pesar de la belleza natural del lugar, encontré que había demasiada basura en las playas y senderos. Además, había mucha gente durante mi visita, lo que hacía que fuera difícil encontrar un lugar tranquilo para disfrutar de la naturaleza."
    },
    {
        "actividad": "662f55064e6fffe8f2aea251",
        "usuario": "661ba9eae9065ef1b154ec01",
        "valoracion": 2,
        "comentario": "El Parque Natural de Mondragó tiene paisajes hermosos, pero la experiencia fue menos satisfactoria de lo que esperaba. Encontré que algunas áreas estaban cerradas al público y la falta de mantenimiento hacía que los senderos fueran difíciles de transitar. Además, la cantidad de turistas restaba un poco de encanto al lugar."
    }
] 


mongoose.connect(process.env.conectStream)
.then(async () => {
    const allValoraciones = await Valoracion.find();
    if(allValoraciones.length > 0){
        await Valoracion.collection.drop();
        console.log("Valoraciones borradas");
    }
})
.catch((error) => console.log("error borrando Valoraciones", error))
.then(async () => {
    const valoracionMap = arrayValoraciones.map((valoracion) => new Valoracion(valoracion));
    await Valoracion.insertMany(valoracionMap);
    console.log("Valoraciones insertadas");
})
.catch((error) => console.log("error insertando Valoraciones", error))
.finally(() => mongoose.disconnect());