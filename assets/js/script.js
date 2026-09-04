/* ============================================================
   PISO 21 — script.js
   No necesitas tocar este archivo para actualizar contenido.
   Los datos viven en config.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 1) Botones de WhatsApp ---------- */
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const key = el.getAttribute("data-wa");
    const msg = CONFIG.whatsappMessages[key] || CONFIG.whatsappMessages.general;
    el.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---------- 2) Links dinámicos (Apparta/Cluvi, PDF, Rappi, Instagram) ---------- */
  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const key = el.getAttribute("data-config-href");
    if (CONFIG[key]) {
      el.href = CONFIG[key];
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  /* ---------- 3) Dirección dinámica ---------- */
  document.querySelectorAll("[data-config-text]").forEach((el) => {
    const key = el.getAttribute("data-config-text");
    if (CONFIG[key]) el.textContent = CONFIG[key];
  });

  /* ---------- 4) Menú móvil ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const siteHeader = document.querySelector(".site-header");
  if (navToggle && siteHeader) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteHeader.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    // cerrar el menú al elegir un link (mobile)
    siteHeader.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", () => siteHeader.classList.remove("nav-open"));
    });
  }

  /* ---------- 5) Header sólido al hacer scroll ---------- */
  if (siteHeader) {
    const onScroll = () => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 6b) Video del hero: si falta el archivo, se oculta y
     queda visible la imagen de fondo (que ya tiene su propio aviso) ---------- */
  document.querySelectorAll("video[data-hero-video]").forEach((video) => {
    video.addEventListener("error", () => {
      video.style.display = "none";
    });
  });

  /* ---------- 6) Placeholder elegante si falta una foto ----------
     Pon tus fotos reales en assets/img/ con el MISMO nombre de
     archivo que ya está referenciado en el HTML y desaparece
     este aviso automáticamente.                                  */
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const frame = img.closest(".img-frame");
      img.style.display = "none";
      if (frame) frame.classList.add("img-missing");
    });
  });

  /* ---------- 7) Año dinámico en footer ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
