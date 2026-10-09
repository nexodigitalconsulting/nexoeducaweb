/* ═══════════════════════════════════════════════════════════════════════════════════════
   NEXOEDUCA · EL ÚNICO FICHERO QUE HAY QUE TOCAR MAÑANA
   ═══════════════════════════════════════════════════════════════════════════════════════

   Qué es: aquí se le dice a la web a dónde tiene que mandar las respuestas de la encuesta.

   LOS 3 PASOS (una sola vez, unos 5 minutos):

   1. Pega el programa en Google siguiendo los pasos de la carpeta `web/envio/` (el fichero
      `codigo.gs` los lleva escritos dentro, arriba del todo). Al final Google te da una
      dirección larga que empieza por https:// y acaba en /exec

   2. Abre este fichero con el Bloc de notas (botón derecho → Abrir con → Bloc de notas) y
      pega esa dirección entre las comillas de la línea de abajo, sustituyendo lo que hay.

   3. Guarda (Ctrl + S). Ya está: desde ese momento, cada respuesta llega sola a tu hoja de
      cálculo y te avisa por correo cuando alguien termina la encuesta.

   Si algo se estropea o se borra: se deja otra vez vacío ("") y la web vuelve a ofrecer el
   correo del visitante. No se rompe nada.
   ─────────────────────────────────────────────────────────────────────────────────────── */

window.NEXO_ENDPOINT = "https://script.google.com/macros/s/AKfycbxtry10VnYV2FZ87-7H9s0mLXDH9Oy8lmI2Z4ccyQAIkERa-1IqvVXLjkoenIDRDD5atg/exec";

/* ───────────────────────────────────────────────────────────────────────────────────────
   Botón «Entrar» (cabecera y pie de la web y de las páginas legales): a dónde lleva.
   PROVISIONAL: el dominio definitivo de la app lo decide el dueño al final. Cuando lo
   decida, se cambia SOLO esta línea y todos los botones «Entrar» la siguen.
   ─────────────────────────────────────────────────────────────────────────────────────── */
window.NEXO_APP_URL = "/app/";   // 10-10-2026 (pedido 98): la app, como versión de prueba, en la propia web
