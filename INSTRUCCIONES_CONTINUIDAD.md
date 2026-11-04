# Continuidad
Repositorio: https://github.com/zorosito/Olvidan.git

Leer PROGRESO.md y revisar git status antes de cambiar archivos. Etapas 1 y 2 implementadas; no comenzar Etapa 3 sin autorización del usuario. Completar comprobación visual pendiente cuando haya navegador disponible.

Proyecto estático sin instalación ni compilación. index.html carga style.css, config.js, motion.js y app.js. Motion genera poses angulares; app dibuja SVG y controla la reproducción. Cuando hay audio seleccionado, el reloj de movimiento usa audio.currentTime. Sin audio, la demostración usa tiempo acumulado. No confundir esta demostración con sincronización musical analizada.

Para previsualizar: servir la carpeta con un servidor HTTP estático. Comprobar caminar, saludar, mirarse y balancearse; transiciones, pausa, reanudación, reinicio, selección de audio y retorno desde segundo plano. Probar en Safari de iPhone.

La pista de referencia está fuera del repositorio, adjunta a la conversación original: 3-Kumbala.MP3.mp3 (22,151837 s). Seleccionarla en la página para pruebas. Nunca subir la canción comercial. Publicación futura con audio autorizado y rutas relativas. Dedicatoria editable en config.js.

Guardar cada avance importante, validar, actualizar ambos documentos, crear commit, hacer push y comparar HEAD local con remoto. Si falla el respaldo, detener trabajo adicional y avisar. No publicar sin verificar el despliegue.

La autorización de GitHub de esta sesión usa GH_CONFIG_DIR=/workspace/.github-auth con GH_TOKEN y GITHUB_TOKEN omitidos al ejecutar gh/git. Esa carpeta contiene credenciales y está fuera del repositorio: no leerlas, copiarlas ni versionarlas. En otras sesiones puede ser necesario vincular de nuevo.

Etapa 2 autorizada: story.js añade poses deterministas por marcas temporales; modo Historia en app.js. Conservar modos básicos. Guardar cada escena antes de seguir.


Cierre Etapa 2: story.js contiene las claves de encuentro (0–4,6 s), flor (4,6–8,7 s) y abrazo (8,7–12 s). `reach` calcula dos ángulos para alcanzar un punto conservando longitudes; `hand` obtiene el extremo para anclar la flor. La entrega ocurre a 7,5 s en [200,224]. Sin físicas ni dependencias. No cambiar los tiempos como si ya estuvieran musicalmente validados.

Ejecutar `node tests/story.test.cjs`, `node tests/controls.test.cjs` y `node --check app.js`. El segundo test simula DOM y audio: no certifica renderizado ni reproducción real. Sigue pendiente revisión visual y Safari. No se dispone de cua_repl.js en esta sesión; no se improvisó navegador alternativo.

La siguiente sesión debe comprobar el HEAD remoto, conservar estos avances y esperar autorización para Etapa 3. No subir credenciales ni la pista original.
