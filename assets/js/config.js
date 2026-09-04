/* ============================================================
   CONFIGURACIÓN CENTRAL — PISO 21
   ============================================================
   Edita SOLO este archivo para actualizar números, links y
   mensajes en TODO el sitio (las 5 páginas leen de aquí).

   IMPORTANTE — pendientes de confirmar antes de publicar:
   1) whatsappNumber: reemplaza con el número real de Piso 21
      (formato: codigo de país + número, sin espacios ni +,
      ej. número de Lima: "51987654321")
   2) appartaUrl: durante la investigación encontré que Piso 21
      ya tiene una página activa en la plataforma Cluvi:
      https://estelar-piso21.cluvi.pe/
      Confirma si ESE es el link público que querías usar, o si
      es otro (Apparta). Lo deje señalado abajo para que decidas.
   3) cartaPdfUrl: sube tu PDF a assets/docs/ y actualiza el nombre.
   4) rappiUrl: pega el link directo a la tienda de Piso 21 en Rappi.
   ============================================================ */

const CONFIG = {
  // 1) Reservas por WhatsApp
  whatsappNumber: "51999999999", // TODO: reemplazar

  whatsappMessages: {
    general: "Hola, quiero reservar una mesa en Piso 21 🌇",
    cenaRomantica: "Hola, quiero reservar el plan Cena Romántica en Piso 21 🌹",
    cenaRomanticaPedida: "Hola, quiero reservar el plan Cena Romántica + Pedida de mano en Piso 21 💍",
    cumpleanos: "Hola, quiero información sobre el plan de Cumpleaños en Piso 21 🎉",
    cumpleanosTorta: "Hola, quiero información sobre el plan de Cumpleaños + Torta personalizada en Piso 21 🎂",
    planesMomentos: "Hola, quiero información sobre Planes Momentos en Piso 21",
    eventos: "Hola, quiero cotizar un evento en Piso 21",
    desayunoBuffet: "Hola, quiero información sobre el Desayuno Buffet en Piso 21",
    almuerzo: "Hola, quiero información sobre el Almuerzo en Piso 21",
    carta: "Hola, tengo una consulta sobre la carta de Piso 21",
  },

  // 2) Canal de reservas en línea (Apparta / Cluvi)
  // TODO: confirmar y reemplazar con el link definitivo
  appartaUrl: "https://estelar-piso21.cluvi.pe/",

  // 3) Carta digital y PDF
  // TODO: reemplazar por el link real del menú digital (Apparta/Cluvi)
  menuDigitalUrl: "https://estelar-piso21.cluvi.pe/",
  // TODO: subir el PDF a assets/docs/ y ajustar el nombre si es distinto
  cartaPdfUrl: "assets/docs/carta-piso21.pdf",

  // 4) Tortas por Rappi
  // TODO: reemplazar con el link directo a la tienda de Piso 21 en Rappi
  rappiUrl: "https://www.rappi.com.pe/",

  // 5) Redes y contacto
  instagramUrl: "https://www.instagram.com/EstelarPiso21",
  direccion: "Av. Benavides 415, Miraflores, Lima, Perú",
};
