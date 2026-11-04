# Verificación de Etapa 5

Ejecutar `node tests/run.cjs` (Node 18 o posterior; sin instalar dependencias).

## Comprobado automáticamente
- Sintaxis de todos los módulos y existencia de recursos con rutas relativas.
- Poses finitas, longitudes constantes, continuidad de escenas y flor, contacto entre manos durante el baile y preservación de etapas anteriores.
- Final estable, noche, corazón y dedicatoria; repetición y limpieza al reiniciar.
- Controlador con DOM/audio simulados: inicio, pausa, modos, archivo local, reloj de audio, búsqueda, segundo plano, errores de reproducción y archivo, aviso de duración incompatible y reinicio durante una promesa de reproducción pendiente.
- Una evaluación de escena por fotograma y ausencia de programación continua de fotogramas en pausa.
- 10.000 evaluaciones de poses en Node tardaron aproximadamente 169 ms en este entorno. Es una medición de cálculo, no de renderizado SVG ni de FPS en iPhone.

## Pendiente de verificación real
No hubo herramienta de navegador compatible disponible en esta sesión. No se realizaron captura visual, escucha sincronizada ni prueba en un iPhone. No se afirma compatibilidad comprobada ni 60 FPS.

En Safari de iPhone, abrir la versión servida por HTTP y verificar:
1. Vista vertical en 320–430 px de ancho: personajes, texto y controles sin recortes; rotación a horizontal.
2. Comenzar sin audio: historia silenciosa completa, final legible y repetición.
3. Seleccionar el fragmento local de 22,15 s: autorización de audio mediante toque y coincidencia percibida de pasos, entrega y abrazo con los acentos. Afinar fase solo si la escucha lo justifica.
4. Pausar en entrega, baile y final; reanudar sin saltos. Cambiar de aplicación y volver: permanece pausado.
5. Reiniciar durante reproducción y mientras el audio está cargando; probar archivo incompatible y archivo de distinta duración.
6. VoiceOver, foco por teclado, botones táctiles y dedicatoria larga editada en config.js.
7. Perfil de rendimiento real durante reproducción y consumo al permanecer en pausa.

Las estrellas y movimientos no emplean bucles CSS independientes. El movimiento solo comienza tras pulsar Comenzar y puede pausarse. La accesibilidad y comodidad perceptiva requieren también revisión humana.

## Revisión de canción — Etapa 6
- El MP3 adjunto se decodifica completamente con ffmpeg sin errores reportados.
- Se generó .local-preview con audioUrl apuntando a assets/reference.mp3; identidad binaria del MP3 comprobada y rutas del HTML/configuración existentes. La carpeta está ignorada y no se publica.
- Análisis espectral reproducido sin diferencias. Para 39 ataques dentro de la ventana de ±80 ms respecto a la rejilla de pulsos: residuo mediano 2,52 ms, máximo 8,36 ms. La selección excluye otros ataques, incluidos los de subdivisión; no representa todos los eventos musicales ni latencia del dispositivo.
- Se corrigió el corte anticipado en 22,1 s: con una pista de duración compatible se espera al final real del audio mientras la pose final permanece fija. Test con duración 22,151837 s y fotograma a 22,11 s, seguido de ended.
- Toda la suite sigue pasando. Estas comprobaciones NO equivalen a escucha audiovisual, ejecución en navegador o validación de Safari. Esas pruebas siguen pendientes porque no hay herramienta compatible disponible en esta sesión.
