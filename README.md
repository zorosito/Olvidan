# Versión publicada con música incluida

Sitio: https://zorosito.github.io/Olvidan/

Pulsa **Comenzar**: se reproduce el fragmento adjunto de Kumbala y la animación sigue su reloj. El navegador requiere ese toque para iniciar el sonido.

Descarga todo el proyecto: https://github.com/zorosito/Olvidan/archive/refs/heads/main.zip

Descomprime el ZIP y conserva la estructura de carpetas. Para alojarlo, sube el contenido de la carpeta Olvidan-main a un servidor de sitios estáticos. No requiere compilación; index.html es la entrada y assets/kumbala.mp3 es la pista. Para pruebas locales, usa un servidor HTTP estático. Dedicatoria editable en config.js.

El usuario solicitó incluir y publicar el MP3 que adjuntó; esta versión reemplaza la distribución anterior sin audio. Las animaciones no se modificaron. Pruebas: `node tests/run.cjs`. La validación audiovisual real en Safari sigue pendiente.
