```markdown
# ESPE PWA – Portal Informativo

Portal informativo de la **Universidad de las Fuerzas Armadas – ESPE** construido como **Progressive Web App (PWA)**, con **Web Components** y soporte **offline**.  
Incluye secciones de *Inicio, Sobre la ESPE, Oferta Académica, Proceso de Admisión y Contacto*.

---

## 🚀  (GitHub Pages)

**URL:** https://giovannyguso.github.io/ExU3Integrativa/

> Si aún no carga: ve a *Settings → Pages* del repo y habilita “Deploy from a branch” con la rama `main`.

---

## ✨ Funcionalidades

- **PWA instalable** (Web App Manifest + Service Worker).
- **Funciona sin conexión** (estrategia *Cache First* y *runtime caching* para CDNs).
- **Interfaz con Web Components** (ej. Shoelace) — usados:
  - `sl-tab-group`, `sl-tab`, `sl-tab-panel` (navegación/secciones)
  - `sl-card` (tarjetas de información y carreras)
  - `sl-details` (acordeones en “Sobre la ESPE”)
  - `sl-button`, `sl-icon` (botones/íconos; integrada librería Bootstrap Icons)
  - `sl-input`, `sl-textarea`, `sl-alert` (formulario y avisos)

## 🗂 Estructura

```

ExU3Integrativa/
├─ index.html
├─ manifest.json
├─ sw\.js                         # o service-worker.js
├─ css/
│  └─ styles.css
├─ js/
│  └─ app.js
└─ assets/
├─ icon-192.png
├─ icon-512.png
├─ espe.jpg                 
├─ soft.pdf         
├─ elec.pdf
├─ mec.pdf


````

> Si usas la librería de Web Components de un compañero, colócala en `components/` y ajusta los imports en `index.html` + añade sus archivos al caché del SW.

---

## ⚙️ PWA

**Manifest (`manifest.json`)**
- `name`, `short_name`
- `start_url: "./index.html"` (rutas relativas para GitHub Pages)
- `display: "standalone"`
- `background_color` y `theme_color`
- Íconos `assets/icon-192.png` y `assets/icon-512.png`

**Service Worker (`sw.js`)**
- Precache del **App Shell**: `index.html`, `css/styles.css`, `js/app.js`, `manifest.json`, íconos y recursos clave (imágenes y PDFs).
- *Cache First* con *runtime caching* para recursos CDN (íconos/JS de terceros).
- Recuerda **incrementar la constante `CACHE`/`VERSION`** cuando cambies archivos estáticos.

---

## ▶️ Ejecutar en local

Sin instalar nada global:
```bash
npx http-server -c-1 .
# Abre http://localhost:8080
````

Con Node/NPM en el proyecto:

```bash
npm install --save-dev http-server
# en package.json:
# "scripts": { "serve": "http-server -c-1 ." }
npm run serve
```

---

## 🌐 Despliegue en GitHub Pages

1. Sube todo a la rama `main` del repo `ExU3Integrativa`.
2. GitHub → **Settings → Pages** → *Source*: **Deploy from a branch** → Branch **main** → Folder **/** → **Save**.
3. Espera 1–2 min y visita
   **[https://giovannyguso.github.io/ExU3Integrativa/](https://giovannyguso.github.io/ExU3Integrativa/)**

> Usa siempre **rutas relativas** (`./css/...`, `./js/...`, `./assets/...`) para que funcionen en el subpath de Pages.

---

## 🧪 Checklist de verificación (para tu screencast)

* [ ] **Online**: navega por todas las secciones y abre 1–2 **mallas PDF**.
* [ ] **Instalable**: aparece “Instalar App” y aceptas el prompt.
* [ ] **Desde escritorio**: abre la app instalada (ventana standalone).
* [ ] **Offline**: desactiva la red y **recarga**; la app sigue funcionando (y abre un PDF si fue precacheado o abierto antes).
* [ ] **DevTools → Application**: el **Manifest** e **íconos** se ven; el **Service Worker** está *activated and running*.

---

## 🛠️ Solución de problemas

* **No aparecen iconos o fallan SVG (404)**
  Si usas Shoelace, registra Bootstrap Icons:

  ```html
  <script type="module">
    import { registerIconLibrary } from "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/utilities/icon-library.js";
    registerIconLibrary("bi", {
      resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/${name}.svg`,
      mutator: svg => svg.setAttribute("fill", "currentColor")
    });
  </script>
  ```

  Luego usa: `<sl-icon library="bi" name="mortarboard"></sl-icon>`.

* **Cambios de CSS/JS no se reflejan**
  Sube la versión de caché en `sw.js` (ej. `const CACHE='espe-pwa-v3'`) o haz *Application → Clear storage → Clear site data*.

* **PDFs offline**
  Añádelos a `APP_SHELL` del SW o ábrelos una vez online (quedan en *runtime cache*).

* **No aparece “Instalar”**
  Verifica que el SW esté activo y el manifest cargue sin errores. Cierra otras instancias de la app y recarga.

