import "@fortawesome/fontawesome-free/css/all.min.css";

const toggleBtn = document.querySelector('.site-header__toggle');
const nav = document.getElementById('primary-nav');
const icon = toggleBtn ? toggleBtn.querySelector('i') : null;

const openMenu = () => {
  if (!nav) return;
  nav.hidden = false;
  requestAnimationFrame(() => {
    nav.classList.add('is-open');
  });
  document.body.classList.add('menu-open');
  toggleBtn.setAttribute('aria-expanded', 'true');
  if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark'); }
};

const closeMenu = () => {
  if (!nav) return;
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  toggleBtn.setAttribute('aria-expanded', 'false');
  if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
  const onEnd = (e) => {
    if (e.target !== nav) return;
    nav.hidden = true;
    nav.removeEventListener('transitionend', onEnd);
  };
  nav.addEventListener('transitionend', onEnd);
};

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  nav.addEventListener('click', (e) => {
    if (e.target.closest('.site-nav__link')) closeMenu();
  });
}

(function () {
  const any = new Date().getFullYear();
  const span = document.getElementById("any");
  if (span) { span.textContent = any; }
})();
