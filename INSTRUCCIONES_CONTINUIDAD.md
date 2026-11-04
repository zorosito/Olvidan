# Continuidad
Repositorio: https://github.com/zorosito/Olvidan.git

Leer PROGRESO.md y revisar git status antes de cambiar archivos. Etapa 1 implementada; no comenzar Etapa 2 sin autorización del usuario. Completar comprobación visual pendiente cuando haya navegador disponible.

Proyecto estático sin instalación ni compilación. index.html carga style.css, config.js, motion.js y app.js. Motion genera poses angulares; app dibuja SVG y controla la reproducción. Cuando hay audio seleccionado, el reloj de movimiento usa audio.currentTime. Sin audio, la demostración usa tiempo acumulado. No confundir esta demostración con sincronización musical analizada.

Para previsualizar: servir la carpeta con un servidor HTTP estático. Comprobar caminar, saludar, mirarse y balancearse; transiciones, pausa, reanudación, reinicio, selección de audio y retorno desde segundo plano. Probar en Safari de iPhone.

La pista de referencia está fuera del repositorio, adjunta a la conversación original: 3-Kumbala.MP3.mp3 (22,151837 s). Seleccionarla en la página para pruebas. Nunca subir la canción comercial. Publicación futura con audio autorizado y rutas relativas. Dedicatoria editable en config.js.

Guardar cada avance importante, validar, actualizar ambos documentos, crear commit, hacer push y comparar HEAD local con remoto. Si falla el respaldo, detener trabajo adicional y avisar. No publicar sin verificar el despliegue.

La autorización de GitHub de esta sesión usa GH_CONFIG_DIR=/workspace/.github-auth con GH_TOKEN y GITHUB_TOKEN omitidos al ejecutar gh/git. Esa carpeta contiene credenciales y está fuera del repositorio: no leerlas, copiarlas ni versionarlas. En otras sesiones puede ser necesario vincular de nuevo.

Etapa 2 autorizada: story.js añade poses deterministas por marcas temporales; modo Historia en app.js. Conservar modos básicos. Guardar cada escena antes de seguir.
