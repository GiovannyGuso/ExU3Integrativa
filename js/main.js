/* js/main.js */

/* 1. Registrar el Service Worker */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('✅ Service Worker registrado con éxito. Scope:', registration.scope);
      })
      .catch(error => {
        console.error('❌ Error al registrar el Service Worker:', error);
      });
  });
}

/* 2. Función de inicialización de la PWA */
function initApp() {
  console.log('🚀 Mi PWA Boilerplate está inicializada y lista.');
  // Aquí puedes arrancar tu lógica de UI, listeners, peticiones, etc.
}

/* 3. Esperar a que el DOM esté completamente cargado */
document.addEventListener('DOMContentLoaded', initApp);
