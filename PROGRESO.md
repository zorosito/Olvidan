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
