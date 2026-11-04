# Progreso

## Etapa 1 — Implementada; verificación visual pendiente
- HTML, CSS y SVG sin dependencias, diseño vertical basado en las referencias.
- Dos personajes con sonrisa y mejillas; caminar, saludar, inclinar la cabeza y balancearse.
- Articulaciones conectadas con longitudes constantes y transiciones interpoladas.
- Comenzar, pausar, reanudar, reiniciar y selección de audio local sin subir archivos.
- Configuración editable en config.js. Rutas relativas aptas para GitHub Pages.
- Validación: sintaxis JavaScript correcta y comprobación numérica de poses durante 23 segundos.
- Pendiente: inspección visual en navegador y prueba real en Safari/iPhone. No se afirma alcanzar 60 FPS.
- Audio examinado: MP3 estéreo, 44.100 Hz, duración 22,151837 s. Pulso y acentos aún no analizados.
- Esta versión demuestra movimientos; todavía no contiene coreografía sincronizada ni escenas narrativas.

## Respaldo
Este archivo acompaña el commit de Etapa 1. El resultado del push se debe verificar comparando HEAD con la rama remota; un commit local no prueba un respaldo remoto.

## Próximas etapas (requieren autorización)
3. Análisis musical, marcas temporales y baile sincronizado con audio.currentTime.
4. Baile abrazados, noche y dedicatoria.
5. Ajustes, optimización y pruebas de Safari.

No se ha desplegado GitHub Pages. No se incluye la canción comercial.

## Etapa 2 — Avance 1
Encuentro implementado en story.js: entrada desde ambos extremos, parada y respuesta tímida. Historia seleccionada al comenzar; los cuatro movimientos de Etapa 1 se conservan. Reloj compartido con audio.currentTime, tiempos provisionales. Sintaxis comprobada. Pendientes flor, abrazo y verificación visual.

## Etapa 2 — Avance 2
Flor implementada: mirada, flexión de rodillas, recogida, acercamiento, entrega y reacción con inclinación de cabeza. La flor sigue la mano; la entrega coincide en una posición compartida. Sintaxis y continuidad de posición en recogida/entrega comprobadas. Pendientes abrazo y pruebas finales.


## Etapa 2 — Implementada
- Encuentro, flor y abrazo enlazados en una demostración de 12 segundos.
- Brazos abiertos, acercamiento, abrazo sostenido y separación suave; la flor se conserva en la mano.
- Los movimientos de Etapa 1 siguen disponibles; Historia se reproduce por defecto.
- Final detenido con botón «Volver a reproducir», reinicio y selección local de audio.
- Pruebas: `node tests/story.test.cjs` y `node tests/controls.test.cjs`; geometría, continuidad, entrega, abrazo, final y controles con DOM simulado. Sintaxis de app.js comprobada.
- Encuentro respaldado en 6d9ee9a; flor en f4d3fea. Se verificaron ambas ramas remotas tras los pushes. Este informe acompaña el commit final del abrazo; verificar también ese push.
- Verificación visual pendiente: no hay herramienta de navegador compatible disponible en esta sesión. Las pruebas simuladas no sustituyen Safari de iPhone.
- Los 12 segundos son tiempos narrativos provisionales, no acentos musicales analizados. Etapa 3 deberá encajar estas escenas y el baile en los 22,151837 segundos del audio.
- No se ha comenzado Etapa 3, ni publicado el sitio, ni versionado audio comercial.

## Etapa 3 — Avance 1
Audio analizado offline; estimación 120,485 BPM, periodo 0,497988 s. Registrados ataques y energía por bandas, con límites del análisis en ANALISIS_MUSICAL.md. music.js define marcas para conservar las poses narrativas y retimar encuentro/flor/abrazo. No se incluye la grabación. Pendiente integración del baile y pruebas.


## Etapa 3 — Implementada
- Análisis reproducible y documentado; tempo estimado 120,485 BPM. No se afirma identificación auditiva de instrumentos ni del compás.
- music.js retima las poses existentes sin eliminar las escenas de Etapa 2. choreography.js añade pasos individuales desde 9,799 s, unión progresiva de manos desde 11,784 s, elevación 13,293–15,280 s y pequeños pivotes 15,279–18,262 s.
- Pasos y balanceo ligados a fase musical. Manos resueltas hacia un objetivo compartido incluso durante pivotes; flor anclada a la mano.
- La historia se evalúa directamente desde audio.currentTime; pausa, reanudar y saltos no acumulan desfase. Sin audio hay previsualización silenciosa. Aviso si la duración seleccionada difiere de la referencia.
- Fin de esta etapa a 18,762 s; se reservan ~3,36 s para Etapa 4. No se implementaron noche, baile abrazados ni dedicatoria final.
- Pruebas aprobadas: story.test.cjs, controls.test.cjs (DOM simulado), choreography.test.cjs y sintaxis app.js. Se corrigió un salto de piernas detectado al terminar la entrada.
- Análisis respaldado y verificado en 7f8c8f1. Este informe acompaña el commit de coreografía: comparar su HEAD con GitHub tras el push.
- Pendiente revisión audiovisual real y Safari/iPhone; no se certifican percepción del ritmo, renderizado o 60 FPS mediante pruebas numéricas.
- No se publicó el sitio ni se incluyó la pista comercial. Esperar autorización para Etapa 4.

## Etapa 4 — Avance 1
Baile abrazados integrado mediante finale.js (Experience), conservando Choreography intacto. Entrada desde 18,762 s, balanceo al pulso y parada suave desde 20,759 s. Final a 22,1 s, dentro de la duración decodificada. La flor permanece en la mano. Pruebas de continuidad y controles aprobadas. Pendientes escenario nocturno y dedicatoria visible.


## Etapa 4 — Implementada
- Baile abrazados de 18,762 s a la parada progresiva iniciada en 20,759 s; pequeña inclinación de cabeza y balanceo al pulso. Conserva la flor y enlaza sin salto con Etapa 3.
- Noche gradual con luna, colina y 24 estrellas SVG fijas; los cuerpos se aclaran para contrastar con el cielo. Corazón desde 20,759 s y dedicatoria desde 21,258 s.
- Dedicatoria tomada de config.js mediante textContent; admite edición y ajuste de línea. Permanece visible junto al abrazo y al botón Volver a reproducir al finalizar.
- Final detenido en 22,1 s, dentro del fragmento; las decoraciones siguen el tiempo del audio y se restablecen al reiniciar. Sin temporizadores ni animaciones CSS independientes.
- Pruebas aprobadas: historia, coreografía, final y controles con DOM simulado, incluida aparición de noche/corazón/texto y limpieza al reiniciar; sintaxis JavaScript comprobada.
- Primer avance respaldado y verificado: deb6c88. El presente informe acompaña el commit final de la escena nocturna; verificar HEAD remoto después del push.
- Pendiente en Etapa 5: revisión visual, reproducción real con audio, Safari/iPhone, ajustes y rendimiento. No se certifican 60 FPS ni apariencia mediante pruebas simuladas.
- No se inició Etapa 5, ni se publicó el sitio, ni se subió la canción comercial.

## Etapa 5 — Avance 1
Controlador optimizado: una evaluación de escena por fotograma, sin bucle de dibujo en pausa, inicio asíncrono cancelable al reiniciar y actualización determinista al buscar en audio. Errores y duración de audio aparecen en mensaje independiente. Movimientos de práctica conservados dentro de un desplegable para despejar la vista principal. Pruebas de controles y sintaxis aprobadas; revisión de navegador/iPhone aún no disponible.
