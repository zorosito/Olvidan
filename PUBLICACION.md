## Actualización: música incluida por solicitud del usuario

La última instrucción pide añadir el MP3 adjunto al repositorio público y al ZIP. Ahora config.js apunta a assets/kumbala.mp3, con excepción específica en .gitignore. Las instrucciones anteriores que exigían excluir esta pista quedan supersedidas para este archivo por esa petición. .local-preview sigue excluida. Mantener intactas las animaciones; verificar Pages tras el push.

# Preparación para GitHub Pages

Proyecto estático: no requiere compilación. index.html y .nojekyll están en la raíz, con recursos relativos y sin fuentes o librerías externas.

Cuando se decida publicar, configurar GitHub Pages para desplegar la rama main desde /(root). Esta sesión no cambió la configuración de Pages ni realizó un despliegue. Tras publicar, verificar el estado del despliegue y abrir su URL; no basta un push para afirmar que está publicado.

La experiencia puede publicarse sin canción: el visitante selecciona un archivo desde su dispositivo. El selector usa una URL blob local, sin subir el archivo. Para ofrecer música incluida, usar únicamente una grabación autorizada y configurar audioUrl en config.js con su ruta relativa; revisar permisos antes de añadirla. .gitignore excluye formatos de audio habituales.

La coreografía actual corresponde al fragmento específico de Kumbala de 22,15 s, no a la canción completa ni a cualquier pista de duración similar. Si se cambia la grabación, revisar pulso y marcas en music.js y los tiempos del cierre.

No añadir credenciales, tokens ni carpetas de autenticación al repositorio.
