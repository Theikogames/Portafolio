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

// Slider de proyectos: permite deslizar arrastrando con el mouse
// (en celular el scroll táctil ya funciona de forma nativa)
const slider = document.getElementById('project-slider');
if (slider) {
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let moved = false;

  const startDrag = (x) => {
    isDown = true;
    moved = false;
    startX = x;
    scrollStart = slider.scrollLeft;
    slider.classList.add('dragging');
  };
  const duringDrag = (x) => {
    if (!isDown) return;
    const delta = x - startX;
    if (Math.abs(delta) > 4) moved = true;
    slider.scrollLeft = scrollStart - delta;
  };
  const endDrag = () => {
    isDown = false;
    slider.classList.remove('dragging');
  };

  slider.addEventListener('mousedown', (e) => {
    startDrag(e.pageX);
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => duringDrag(e.pageX));
  window.addEventListener('mouseup', endDrag);
  slider.addEventListener('mouseleave', () => { if (isDown) endDrag(); });

  // Evita que un arrastre se interprete como clic en la tarjeta
  slider.addEventListener('click', (e) => {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  const prevBtn = document.querySelector('.slider-arrow-prev');
  const nextBtn = document.querySelector('.slider-arrow-next');
  const scrollByCard = (dir) => {
    const card = slider.querySelector('.project-card');
    const gap = parseFloat(getComputedStyle(slider).gap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : 260;
    slider.scrollBy({ left: dir * distance, behavior: 'smooth' });
  };
  if (prevBtn) prevBtn.addEventListener('click', () => scrollByCard(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollByCard(1));
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
