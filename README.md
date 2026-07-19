# Portafolio — Juan Miralles

Sitio estático (HTML/CSS/JS puro, sin frameworks ni dependencias de pago) reconstruido a partir del portafolio original en Framer.

## Publicarlo gratis en GitHub Pages

1. Crea un repositorio nuevo en GitHub. Si quieres que sea tu sitio principal, llámalo `tu-usuario.github.io`; si no, cualquier nombre sirve (ej: `portafolio`).
2. Sube estos 4 archivos (`index.html`, `style.css`, `script.js`, este `README.md`) a la raíz del repositorio.
3. Ve a **Settings → Pages** en el repositorio.
4. En "Branch", elige `main` y la carpeta `/ (root)`, luego guarda.
5. Espera 1-2 minutos: GitHub te dará una URL gratuita (algo como `https://tu-usuario.github.io/portafolio/`).

## Usar tus gifs y video descargados (local)

El HTML ya apunta a una carpeta `assets/` dentro del proyecto. Solo debes crear esta estructura y poner tus archivos descargados con estos nombres exactos (o cambiar el `src` en `index.html` si prefieres otros nombres):

```
portafolio-juan/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── video/
    │   └── hero.mp4
    └── img/
        ├── clicker.gif
        ├── americans-war-1.gif
        ├── americans-war-2.gif
        ├── plataformero.gif
        ├── run-and-puzzle-1.gif
        ├── run-and-puzzle-2.gif
        ├── gmail.png
        ├── linkedin.png
        └── instagram.png
```

Para descargar los archivos originales desde Framer: entra a tu sitio publicado, clic derecho sobre cada imagen/gif → "Guardar imagen como…", y para el video del hero, clic derecho → "Guardar video como…". Luego solo arrastra cada archivo a su carpeta correspondiente respetando los nombres de arriba. Sube la carpeta `assets/` completa junto con el resto de archivos a tu repositorio de GitHub.

## Notas

- El efecto de hover (zoom + líneas de escaneo) sobre los gifs se dejó únicamente en la sección de **Proyectos de PC**; en **Proyectos de Celular** está desactivado.
- American's War y Run And Puzzle ahora muestran 2 gifs cada uno, uno junto al otro.
- Sin dependencias externas de pago: solo usa Google Fonts (gratis) para la tipografía.

## Enlazar los íconos de contacto a tus cuentas reales

En `index.html`, dentro de la sección `id="contacto"`, cada ícono es un link `<a href="...">`. Ya están casi listos, solo debes reemplazar dos partes:

- **Gmail**: ya está enlazado a tu correo (`juanmirallescontacto@gmail.com`). Al hacer clic, abre directamente un mensaje nuevo en Gmail dirigido a ti. Si quieres usar otro correo, cambia la parte `to=juanmirallescontacto@gmail.com` de esta línea:
  ```html
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=TU-CORREO-AQUI" ...>
  ```

- **LinkedIn**: busca la línea con `TU-USUARIO-AQUI` en el link de LinkedIn y reemplázalo por tu nombre de usuario real. Lo encuentras en la URL de tu propio perfil, por ejemplo si tu perfil es `https://www.linkedin.com/in/juan-miralles-123abc`, entonces:
  ```html
  <a href="https://www.linkedin.com/in/juan-miralles-123abc" ...>
  ```

- **Instagram**: igual que LinkedIn, reemplaza `TU-USUARIO-AQUI` por tu nombre de usuario de Instagram (el mismo que usas para iniciar sesión, sin la @). Ejemplo:
  ```html
  <a href="https://www.instagram.com/juan.miralles" ...>
  ```

No olvides también agregar tus 3 íconos descargados (`gmail.png`, `linkedin.png`, `instagram.png`) dentro de `assets/img/`, siguiendo la estructura de arriba.
