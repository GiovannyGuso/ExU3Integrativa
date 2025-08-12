// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('SW listo'))
      .catch(err => console.error('SW error', err));
  });
}

// Botón "Instalar App"
let deferredPrompt = null;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) installBtn.style.display = 'inline-flex';
});
installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.style.display = 'none';
});

// Enviar contacto simulado
const toast = document.getElementById('toast');
document.getElementById('sendBtn')?.addEventListener('click', () => {
  const name = document.getElementById('name')?.value?.trim();
  if (toast) {
    toast.variant = 'primary';
    toast.innerHTML = `<sl-icon slot="icon" name="check2-circle"></sl-icon> Gracias, ${name || 'visitante'}: mensaje enviado.`;
    toast.open = true;
  }
});
