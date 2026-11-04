# Una pequeña historia de amor

Etapas 1–4: encuentro, flor, abrazo, baile coreografiado y final nocturno con dedicatoria. Sin dependencias.

Servir esta carpeta por HTTP y abrir index.html. Pulsa Comenzar para ver la historia completa hasta el segundo 22,1; también puedes seleccionar los movimientos básicos. Puedes elegir una pista local; no se envía a ningún servidor. La coreografía está ajustada al fragmento adjunto de Kumbala (22,15 s). Otro archivo o la canción completa no tendrán la misma sincronización. Sin audio se ofrece una previsualización silenciosa.

Edita config.js para cambiar la dedicatoria o establecer una ruta relativa a un audio autorizado. La canción comercial no forma parte del repositorio.

Preparado para GitHub Pages desde la raíz de la rama principal; despliegue todavía no realizado. Consulta PROGRESO.md e INSTRUCCIONES_CONTINUIDAD.md.

Pruebas sin dependencias: `node tests/story.test.cjs` y `node tests/controls.test.cjs` y `node tests/choreography.test.cjs` y `node tests/finale.test.cjs`. Revisión visual en Safari pendiente.

Consulta ANALISIS_MUSICAL.md para pulso, marcas y límites de la estimación. El cierre nocturno permanece visible al finalizar. Edita `dedication` en config.js para personalizarlo; el botón Volver a reproducir reinicia la historia.
