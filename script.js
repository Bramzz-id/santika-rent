tailwind.config = {
  theme: {
    extend: {
      colors: { wa: '#25D366', 'wa-dark': '#1aad54' },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
    }
  }
}

// Header scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 60));

// Mobile menu
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobilePanel = document.getElementById('mobile-panel');
const closeMenu  = document.getElementById('close-menu');

// Fungsi Toggle Menu
const toggleMenu = (open) => {
    if (open) {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobilePanel.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Kunci scroll body
    } else {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        mobilePanel.classList.add('translate-x-full');
        document.body.style.overflow = ''; // Aktifkan kembali scroll
    }
};

// Event Listeners
hamburger.addEventListener('click', () => toggleMenu(true));
closeMenu.addEventListener('click', () => toggleMenu(false));

// Tutup menu jika klik area gelap (backdrop)
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) toggleMenu(false);
});

// Tutup menu otomatis saat link navigasi di klik
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// FAQ accordion
document.querySelectorAll('.faq-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const body   = btn.nextElementSibling;
    const icon   = btn.querySelector('.faq-icon');
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));
    if (!isOpen) { body.classList.add('open'); icon.classList.add('open'); }
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


