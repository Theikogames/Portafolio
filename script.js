// Evita que el navegador (sobre todo en celular) reabra la página
// en la posición de scroll donde quedó la última vez
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => window.scrollTo(0, 0));

// Resalta el link de navegación de la sección visible
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const setActive = (id) => {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(section => observer.observe(section));
}

// Copiar el correo al portapapeles al hacer clic en el ícono de Gmail
const copyBtn = document.getElementById('copy-email');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    const tooltip = copyBtn.querySelector('.copy-tooltip');
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        // Alternativa para navegadores muy antiguos
        const temp = document.createElement('textarea');
        temp.value = email;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      if (tooltip) {
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 1500);
      }
    } catch (err) {
      console.error('No se pudo copiar el correo:', err);
    }
  });
}
