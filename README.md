# Una pequeña historia de amor

Etapas 1–3: dos personajes SVG con encuentro, flor, abrazo y baile coreografiado. Sin dependencias.

Servir esta carpeta por HTTP y abrir index.html. Pulsa Comenzar para ver la historia y baile hasta el segundo 18,762; también puedes seleccionar los movimientos básicos. Puedes elegir una pista local; no se envía a ningún servidor. La coreografía está ajustada al fragmento adjunto de Kumbala (22,15 s). Otro archivo o la canción completa no tendrán la misma sincronización. Sin audio se ofrece una previsualización silenciosa.

Edita config.js para cambiar la dedicatoria o establecer una ruta relativa a un audio autorizado. La canción comercial no forma parte del repositorio.

Preparado para GitHub Pages desde la raíz de la rama principal; despliegue todavía no realizado. Consulta PROGRESO.md e INSTRUCCIONES_CONTINUIDAD.md.

Pruebas sin dependencias: `node tests/story.test.cjs` y `node tests/controls.test.cjs` y `node tests/choreography.test.cjs`. Revisión visual en Safari pendiente.

Consulta ANALISIS_MUSICAL.md para pulso, marcas y límites de la estimación. El cierre nocturno y romántico pertenece a Etapa 4 y todavía no está implementado.
