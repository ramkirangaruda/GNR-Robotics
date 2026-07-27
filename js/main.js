// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Stat carousel ("chiffre suivant" style)
const stats = [
  { figure: '6+', caption: 'Years running as a hands-on robotics program under SRS EduTech.' },
  { figure: '1,000+', caption: 'Students mentored across GNR Robotics programs.' },
  { figure: '50+', caption: 'Expert faculty and trained facilitators.' }
];
let statIndex = 0;
const statFigure = document.getElementById('stat-figure');
const statCaption = document.getElementById('stat-caption');
const statNext = document.getElementById('stat-next');
if (statNext && statFigure && statCaption) {
  statNext.addEventListener('click', () => {
    statIndex = (statIndex + 1) % stats.length;
    statFigure.textContent = stats[statIndex].figure;
    statCaption.textContent = stats[statIndex].caption;
  });
}

// Contact form placeholder behavior
const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks — this demo form isn't connected yet. See the setup guide to wire it up (Formspree, Netlify Forms, or email).";
  });
}
