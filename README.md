```markdown
# Mi PWA Boilerplate – Galería God of War 1–5

![PWA Badge](https://img.shields.io/badge/PWA-Ready-blue) ![MDL Badge](https://img.shields.io/badge/Material%20Design%20Lite-1.3.0-orange) ![License: MIT](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Descripción

Este **boilerplate** te permite arrancar en segundos una **PWA** (Progressive Web App) tematizada con la saga **God of War** (del 1 al 5). Incluye:

- Estructura base con HTML, CSS y JavaScript.
- **Material Design Lite** para componentes UI estilizados.
- **Galería responsiva** de tarjetas con portadas oficiales y descripciones.
- **Service Worker** básico (`sw.js`) para futura capacidad offline.
- **Manifest.json** configurado para “Add to Home Screen”.
- Herramientas de calidad de código (**ESLint**, **Prettier**).
- Scripts npm para desarrollo, linting, formateo y despliegue.

---

## ⚙️ Estructura de archivos

```

mi-pwa-boilerplate/
├── README.md
├── package.json
├── .gitignore
├── manifest.json
├── sw\.js
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── gallery.js
└── assets/
├── gow1.png
├── gow2.jpg
├── gow3.jpg
├── gow4.jpg
├── gow5.jpg
└── placeholder.png

````

- **index.html**  
  Punto de entrada con layout MDL y sección de galería.
- **manifest.json**  
  Configuración de PWA (nombre, iconos, colores).
- **sw.js**  
  Service Worker mínimo con eventos `install` y `fetch`.
- **css/styles.css**  
  Paleta oscura y estilos propios para encabezado, tarjetas y responsividad.
- **js/main.js**  
  Registro del Service Worker y arranque de la app.
- **js/gallery.js**  
  Lógica para renderizar las tarjetas de God of War 1–5 con título y descripción.
- **assets/**  
  Imágenes oficiales de cada entrega y un placeholder genérico.

---

## 🚀 Instalación y puesta en marcha

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/GiovannyGuso/mi-pwa-boilerplate.git
   cd mi-pwa-boilerplate
````

2. **Instala dependencias**

   ```bash
   npm install
   ```

3. **Levanta el entorno de desarrollo**

   ```bash
   npm run dev
   ```

   > Se abrirá `http://localhost:8080` con **live-reload** en cada cambio.

4. **¡Disfruta!**

   * Verás el encabezado “Galería God of War 1–5”.
   * Cada tarjeta muestra portada y descripción de la saga.
   * Consola informa de registro exitoso del Service Worker.

---

## 🛠️ Scripts disponibles

| Script           | Descripción                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`    | Arranca **live-server** con recarga automática.                                    |
| `npm run lint`   | Ejecuta **ESLint** en todo el proyecto y muestra errores o advertencias de estilo. |
| `npm run format` | Ejecuta **Prettier** para formatear HTML, CSS y JS según las reglas definidas.     |
| `npm run serve`  | Sirve con **http-server** y `Cache-Control: no-cache` (ideal para producción PWA). |

---

## 🔧 Configuración de calidad de código

* **ESLint**
  Archivo `.eslintrc.json` basado en `eslint:recommended` + `plugin:prettier/recommended`.
* **Prettier**
  Archivo `.prettierrc` para formateo consistente:

  ```json
  {
    "semi": true,
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2
  }
  ```

---

## 🤝 Contribuciones

¡Contribuciones bienvenidas! Si deseas:

1. Crear un *fork* de este repositorio.
2. Proponer cambios en una rama nueva.
3. Enviar un *pull request* describiendo tus mejoras (nuevas secciones, offline cacheo avanzado, notificaciones push…).

---


© 2025 Giovanny Durán Sánchez.

