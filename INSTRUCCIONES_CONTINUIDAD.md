# Continuidad
Repositorio: https://github.com/zorosito/Olvidan.git

Leer PROGRESO.md y revisar git status antes de cambiar archivos. Etapas 1–3 implementadas; no comenzar Etapa 4 sin autorización del usuario. Completar comprobación visual pendiente cuando haya navegador disponible.

Proyecto estático sin instalación ni compilación. index.html carga style.css, config.js, motion.js y app.js. Motion genera poses angulares; app dibuja SVG y controla la reproducción. Cuando hay audio seleccionado, el reloj de movimiento usa audio.currentTime. Sin audio, la demostración usa tiempo acumulado. No confundir esta demostración con sincronización musical analizada.

Para previsualizar: servir la carpeta con un servidor HTTP estático. Comprobar caminar, saludar, mirarse y balancearse; transiciones, pausa, reanudación, reinicio, selección de audio y retorno desde segundo plano. Probar en Safari de iPhone.

La pista de referencia está fuera del repositorio, adjunta a la conversación original: 3-Kumbala.MP3.mp3 (22,151837 s). Seleccionarla en la página para pruebas. Nunca subir la canción comercial. Publicación futura con audio autorizado y rutas relativas. Dedicatoria editable en config.js.

Guardar cada avance importante, validar, actualizar ambos documentos, crear commit, hacer push y comparar HEAD local con remoto. Si falla el respaldo, detener trabajo adicional y avisar. No publicar sin verificar el despliegue.

La autorización de GitHub de esta sesión usa GH_CONFIG_DIR=/workspace/.github-auth con GH_TOKEN y GITHUB_TOKEN omitidos al ejecutar gh/git. Esa carpeta contiene credenciales y está fuera del repositorio: no leerlas, copiarlas ni versionarlas. En otras sesiones puede ser necesario vincular de nuevo.

Etapa 2 autorizada: story.js añade poses deterministas por marcas temporales; modo Historia en app.js. Conservar modos básicos. Guardar cada escena antes de seguir.


Cierre Etapa 2: story.js contiene las claves de encuentro (0–4,6 s), flor (4,6–8,7 s) y abrazo (8,7–12 s). `reach` calcula dos ángulos para alcanzar un punto conservando longitudes; `hand` obtiene el extremo para anclar la flor. La entrega ocurre a 7,5 s en [200,224]. Sin físicas ni dependencias. No cambiar los tiempos como si ya estuvieran musicalmente validados.

Ejecutar `node tests/story.test.cjs`, `node tests/controls.test.cjs` y `node --check app.js`. El segundo test simula DOM y audio: no certifica renderizado ni reproducción real. Sigue pendiente revisión visual y Safari. No se dispone de cua_repl.js en esta sesión; no se improvisó navegador alternativo.

La siguiente sesión debe comprobar el HEAD remoto y conservar estos avances. No subir credenciales ni la pista original.

Etapa 3 autorizada. Leer ANALISIS_MUSICAL.md: music.js convierte tiempo de audio a tiempo narrativo antiguo para conservar las escenas. audio-analysis.json contiene métricas, no audio. La revisión auditiva y visual sigue pendiente; no afirmar identificación de instrumentos.


Cierre Etapa 3: app.js usa Choreography.sample, no Story.sample directamente. Orden de scripts: config, motion, story, music, choreography, app. Story conserva las poses y pruebas originales. Music mapea las marcas nuevas a las anteriores. Choreography genera baile puro en función del tiempo y transforma manos entre coordenadas locales y globales para mantener contacto al pivotar. No cambiar body sin mantener esa transformación.

Ejecutar también `node tests/choreography.test.cjs`: recorre la coreografía a 120 muestras/s, verifica continuidad, contacto y determinismo. controls.test.cjs carga los nuevos módulos y cubre final/repetición y reloj de audio simulado.

Etapa 4 debe partir de Choreography.sample(18.762) y ocupar el tiempo restante hasta el final real del audio (~22,13 s decodificados), sin alterar bruscamente poses o posición de la flor. Añadir baile abrazados, noche y final solo tras autorización. Los tiempos musicales se basan en métricas del archivo, con revisión audiovisual todavía pendiente. Reproducción local mediante selector de archivo; no subir MP3.

Etapa 4 autorizada: finale.js exporta Experience y envuelve Choreography sin modificar etapas anteriores. app.js usa Experience.sample/duration. tests/finale.test.cjs comprueba continuidad y preservación de la coreografía. Duración total: 22,1 s (no prolongar el audio). Falta integrar presentación nocturna y dedicatoria.
