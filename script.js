// BLUE SPEED — interaksi sederhana website profil.
document.addEventListener('DOMContentLoaded', () => {
  // Tahun footer mengikuti tahun saat website dibuka.
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  // Tandai menu navigasi sesuai bagian halaman yang sedang terlihat.
  const navLinks = [...document.querySelectorAll('.links a[href^="#"]')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }
});
