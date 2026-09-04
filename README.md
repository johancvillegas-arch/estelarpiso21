# Sitio web Piso 21 — Guía rápida en Visual Studio Code

Sitio estático en HTML/CSS/JS puro (sin frameworks, sin paso de build) —
mismo tipo de flujo que ya usas con EcoEstelar: editar en VS Code, subir a Netlify.

## 1. Estructura

```
piso21-website/
├── index.html             → Inicio
├── carta.html              → Carta
├── planes.html              → Planes (7 tarjetas → cada una a su página de detalle)
├── plan-cena-romantica.html  → Detalle: Cena Romántica (2 niveles + carrusel)
├── plan-cumpleanos.html      → Detalle: Cumpleaños (2 niveles + carrusel)
├── plan-momentos.html        → Detalle: Planes Momentos (3 tiempos + carrusel)
├── plan-eventos.html         → Detalle: Eventos (cotización + carrusel)
├── plan-desayuno.html        → Detalle: Desayuno Buffet (+ carrusel)
├── plan-almuerzo.html        → Detalle: Almuerzo (+ carrusel)
├── plan-tortas.html          → Detalle: Tortas (CTA a Rappi + carrusel)
├── reservas.html             → Reservas
├── ubicacion.html             → Ubicación
├── assets/
│   ├── css/style.css     → todo el diseño vive aquí
│   ├── js/
│   │   ├── config.js     → ⭐ EDITA ESTE ARCHIVO PRIMERO (WhatsApp, links, Rappi...)
│   │   └── script.js     → lógica del sitio, no necesitas tocarlo
│   ├── video/             → coloca aquí el video del hero (hero-piso21.mp4)
│   ├── img/               → coloca aquí TODAS tus fotos reales
│   └── docs/              → coloca aquí el PDF de la carta
└── README.md (este archivo)
```

### Sobre los recuadros amarillos ("⚠ S/ 000")

En las 7 páginas de plan vas a ver textos resaltados en amarillo con líneas
punteadas — son precios, días de anticipación o datos que **no invento**:
los dejé marcados a propósito para que no se publiquen por error. Busca
`class="todo"` en el código si quieres encontrarlos rápido, o simplemente
revisa cada página y reemplaza el texto resaltado.

## 2. Lo primero que debes editar: `assets/js/config.js`

Ahí están centralizados, en un solo lugar:
- **whatsappNumber** → tu número real de Piso 21 (formato `51987654321`, sin `+` ni espacios)
- **appartaUrl** → el link público de tu canal de reservas en línea.
  Encontré que Piso 21 ya tiene una página activa en **Cluvi**:
  `https://estelar-piso21.cluvi.pe/` — la dejé puesta por defecto.
  **Confirma si es ese el link correcto, o si es otro (Apparta).**
- **menuDigitalUrl** → el link del menú digital (mismo caso que arriba)
- **cartaPdfUrl** → la ruta a tu PDF dentro de `assets/docs/`
- **rappiUrl** → el link directo a la tienda de Piso 21 en Rappi
- **instagramUrl** → ya está puesto `@EstelarPiso21`, ajusta si cambia

Cambias estos datos UNA sola vez y se actualizan en las 5 páginas automáticamente.

## 3. Reemplazar las fotos

Todas las imágenes están referenciadas por nombre de archivo dentro de
`assets/img/`. Mientras no exista el archivo, el sitio muestra un
recuadro elegante con el texto de qué foto falta — así nunca se ve roto.

Lista de archivos esperados:

| Archivo | Dónde se usa |
|---|---|
| `hero-vista.jpg` | Hero de Inicio (vista panorámica) |
| `diferenciador.jpg` | Sección "Por qué Piso 21" |
| `carta-teaser.jpg` | Teaser de carta en Inicio |
| `carta-banner.jpg` | Banner de la página Carta |
| `carta-01.jpg` … `carta-08.jpg` | Galería de la nueva carta |
| `planes-banner.jpg` | Banner de la página Planes |
| `plan-cena-romantica.jpg` | Tarjeta Cena Romántica |
| `plan-cumpleanos.jpg` | Tarjeta Cumpleaños |
| `plan-momentos.jpg` | Tarjeta Planes Momentos |
| `plan-eventos.jpg` | Tarjeta Eventos |
| `plan-desayuno.jpg` | Tarjeta Desayuno Buffet |
| `plan-almuerzo.jpg` | Tarjeta Almuerzo |
| `plan-tortas.jpg` | Tarjeta Tortas |
| `reservas-banner.jpg` | Banner de la página Reservas |
| `ubicacion-banner.jpg` | Banner de la página Ubicación |

### Imágenes de las páginas de plan (7 páginas × banner + 3 features + 6 de carrusel)

Mismo sistema: nombre exacto del archivo dentro de `assets/img/`. Patrón por plan
(reemplaza `<plan>` por: `cena-romantica`, `cumpleanos`, `momentos`, `eventos`,
`desayuno`, `almuerzo`, `tortas`):

| Archivo | Dónde se usa |
|---|---|
| `plan-<plan>-banner.jpg` | Banner superior de la página de detalle |
| `plan-<plan>-1.jpg`, `-2.jpg`, `-3.jpg` | Grid "El plan incluye" (primer nivel) |
| `plan-<plan>-tier2-1.jpg`, `-2.jpg`, `-3.jpg` | Grid del segundo nivel (solo Cena Romántica y Cumpleaños) |
| `plan-<plan>-marquee-1.jpg` … `-6.jpg` | Carrusel infinito al final de la página |

Solo arrastra tus fotos a `assets/img/` con esos nombres exactos
(o renómbralas) y aparecerán automáticamente.

## 4. Previsualizar en VS Code (antes de publicar)

1. Abre la carpeta `piso21-website` en VS Code (`File > Open Folder`).
2. Instala la extensión **"Live Server"** (de Ritwick Dey) si no la tienes.
3. Clic derecho sobre `index.html` → **"Open with Live Server"**.
4. Se abre en tu navegador con recarga automática cada vez que guardas.

## 5. Publicar en Netlify (mismo flujo que EcoEstelar)

**Opción A — más simple (arrastrar y soltar):**
1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta completa `piso21-website`
3. Netlify te da una URL al instante (puedes luego asignar un dominio propio)

**Opción B — con tu flujo manual habitual (CLI):**
1. Desde la terminal, dentro de la carpeta del proyecto: `netlify deploy`
2. Sigue las instrucciones (elige el sitio o crea uno nuevo)
3. Cuando esté todo listo: `netlify deploy --prod`

## 6. Checklist antes de publicar

- [ ] Número de WhatsApp real en `config.js`
- [ ] Link de reservas confirmado (Cluvi/Apparta) en `config.js`
- [ ] Link de Rappi de Piso 21 en `config.js`
- [ ] PDF de la carta subido a `assets/docs/`
- [ ] Todas las fotos reales en `assets/img/`
- [ ] Revisar el sitio en celular (la mayoría de tus clientes llegan desde Instagram)
- [ ] Crear/actualizar la página de Política de Privacidad (los links de footer
      apuntan a `#` por ahora — te lo armo cuando quieras, ya tienes el
      contexto legal del memo a Paola Ochoa que se puede reutilizar aquí)
