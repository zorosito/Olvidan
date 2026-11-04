# Análisis del fragmento de referencia

Análisis offline reproducible con `python3 tools/analyze_audio.py RUTA_AL_MP3` (ffmpeg, numpy y scipy). No copia ni publica la grabación. Resultados en audio-analysis.json.

- Contenedor: 22,151837 s; muestras decodificadas: 22,125714 s. La diferencia de unos 26 ms puede proceder del relleno/codificación MP3. El navegador es la autoridad de reproducción.
- Flujo espectral positivo, STFT de 1024 muestras y salto de 256 a 22050 Hz; autocorrelación en 65–160 BPM. Candidato principal 120,19 BPM; ajuste lineal de ataques cercanos a la rejilla: 120,485 BPM, periodo 0,497988 s y origen 0,83662 s. Resolución de detección aproximada: 11,6 ms.
- Los ataques intermedios aparecen aproximadamente cada 0,249 s. El pulso elegido es una interpretación coreográfica; no se ha establecido el compás ni el primer tiempo de compás.
- Entre 4–6 s disminuye la energía en medios/agudos; entre 6–8 s aumenta. Se reserva el tramo tranquilo para recoger la flor y la recuperación para entregarla. No se identifican instrumentos individuales: requeriría revisión auditiva, pendiente.
- Acentos destacados medidos: 7,814; 8,800; 9,799; 10,797; 12,783; 13,781; 14,780; 17,763; 18,762 s. Son ataques espectrales, no etiquetas de melodía verificadas a oído.

## Marcas narrativas
Entrada 0–2,826; miradas 2,826–4,320; recogida 5,074; levantar 6,049; ofrecer 6,815; entregar 7,314; reacción 7,814; acercamiento 8,313; abrazo 8,800–9,300; separación e inicio de baile 9,799.

El baile de Etapa 3 ocupa 9,799–18,762 s. Se reservan los últimos ~3,36 s para baile abrazados, noche y final de Etapa 4. No se estira la pista. Los tiempos y la fase pueden afinarse tras una prueba audiovisual real en iPhone.
