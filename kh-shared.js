/* ========================================
   Kencha House — Shared Components
   Tailwind design tokens, nav & footer injection,
   and shared utilities used on every page.

   Load order in each HTML <head>:
     1. Google Fonts <link> tags
     2. <link rel="stylesheet" href="design-system.css">
     3. <script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries">
     4. <script src="kh-shared.js">   ← this file
   ======================================== */

/* global tailwind */

// --------------------------------------------------
// Tailwind Design Tokens
// Mirrors the CSS custom properties in design-system.css
// --------------------------------------------------
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:            "#8C7A6B", // Sophisticated taupe/brown
        "background-light": "#F9F7F2", // Warm creamy beige
        "background-dark":  "#1A1918", // Deep charcoal/earth
        accent:             "#E5DACE",
        sand:               "#F5F2ED",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans:    ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        lg:      "12px",
      },
    },
  },
};

// --------------------------------------------------
// Shared Navigation
// --------------------------------------------------
const KH_NAV = '\
<nav class="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-stone-200 dark:border-stone-800 shadow-sm">\
  <div class="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">\
    <a href="index.html" class="flex-shrink-0">\
      <img src="https://raw.githubusercontent.com/sokawai/kh3/main/logo3.png" alt="Kencha House Logo" class="h-16 md:h-28 w-auto">\
    </a>\
    <button id="mobile-menu-btn" class="md:hidden p-2 text-stone-600 hover:text-primary transition-colors" onclick="toggleMobileMenu()">\
      <span class="material-symbols-outlined text-2xl">menu</span>\
    </button>\
    <div class="hidden md:flex items-center gap-4 md:gap-8 mx-auto px-4">\
      <a class="text-[12px] uppercase tracking-[0.2em] text-stone-600 hover:text-primary transition-colors" href="play.html">Play</a>\
      <a class="text-[12px] uppercase tracking-[0.2em] text-stone-600 hover:text-primary transition-colors" href="parties.html">Parties</a>\
      <a class="text-[12px] uppercase tracking-[0.2em] text-stone-600 hover:text-primary transition-colors" href="studio.html">Studio</a>\
      <a class="text-[12px] uppercase tracking-[0.2em] text-stone-600 hover:text-primary transition-colors" href="about.html">About</a>\
    </div>\
    <div class="hidden md:flex items-center gap-4 md:gap-6">\
      <button class="bg-primary text-white px-5 py-2 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity" onclick="window.open(\'https://kenchahouse.youcanbook.me/\', \'_blank\', \'noopener,noreferrer\')">\
        Visit Us\
      </button>\
    </div>\
  </div>\
  <div id="mobile-menu" class="hidden md:hidden bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-stone-800">\
    <div class="px-4 py-4 space-y-4">\
      <a class="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="play.html">Play</a>\
      <a class="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="parties.html">Parties</a>\
      <a class="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="studio.html">Studio</a>\
      <a class="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="about.html">About</a>\
      <button class="w-full bg-primary text-white px-3 py-2 text-[10px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity" onclick="window.open(\'https://kenchahouse.youcanbook.me/\', \'_blank\', \'noopener,noreferrer\')">\
        Visit Us\
      </button>\
    </div>\
  </div>\
</nav>';

// --------------------------------------------------
// Shared Footer
// --------------------------------------------------
const KH_FOOTER = '\
<footer class="bg-white dark:bg-background-dark pt-16 pb-8 px-6">\
  <div class="max-w-screen-xl mx-auto space-y-12">\
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">\
      <div>\
        <h3 class="text-2xl font-display uppercase tracking-widest mb-4">Kencha House</h3>\
        <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs">A boutique play cafe for babies and toddlers.</p>\
      </div>\
      <div>\
        <h4 class="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Explore</h4>\
        <ul class="space-y-4 text-sm text-stone-600 dark:text-stone-300">\
          <li><a class="hover:text-primary transition-colors" href="play.html">Our Play Space</a></li>\
          <li><a class="hover:text-primary transition-colors" href="parties.html">Private Events</a></li>\
          <li><a class="hover:text-primary transition-colors" href="studio.html">Studio Rental</a></li>\
        </ul>\
      </div>\
      <div>\
        <h4 class="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Support</h4>\
        <ul class="space-y-4 text-sm text-stone-600 dark:text-stone-300">\
          <li><a class="hover:text-primary transition-colors" href="mailto:kenchahouse@gmail.com">Contact Us</a></li>\
          <li><a class="hover:text-primary transition-colors" href="faq.html">FAQ</a></li>\
          <li><a class="hover:text-primary transition-colors" href="https://form.jotform.com/260586396097270">Waiver</a></li>\
        </ul>\
      </div>\
      <div>\
        <h4 class="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Visit</h4>\
        <p class="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">\
          <a href="https://maps.google.com/?q=222+Finch+Ave+W+Suite+105+North+York+ON+M2R+1M6" target="_blank" rel="noopener noreferrer" class="inline-block hover:text-primary transition-colors">\
            <span class="block">222 Finch Ave W Suite 105,</span>\
            <span class="block mt-1">North York, ON M2R 1M6</span>\
          </a>\
          <span class="mt-4 flex items-center gap-4">\
            <a href="https://www.instagram.com/kenchahouse/" class="text-stone-600 dark:text-stone-300 hover:text-primary transition-colors" target="_blank" aria-label="Instagram">\
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"/>\
              </svg>\
            </a>\
            <a href="mailto:kenchahouse@gmail.com" class="text-stone-600 dark:text-stone-300 hover:text-primary transition-colors" aria-label="Email">\
              <span class="material-symbols-outlined text-xl">mail</span>\
            </a>\
          </span>\
        </p>\
      </div>\
    </div>\
    <div class="border-t border-stone-100 dark:border-stone-800 pt-12 text-center">\
      <p class="text-[10px] text-stone-400 tracking-wider">&copy; 2026 Kencha House. All rights reserved.</p>\
    </div>\
  </div>\
</footer>';

// --------------------------------------------------
// Toggle mobile navigation menu
// --------------------------------------------------
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// --------------------------------------------------
// Inject nav (first) and footer (last) into <body>
// --------------------------------------------------
(function () {
  function injectSharedComponents() {
    const hasNav = Boolean(document.querySelector('nav.sticky.top-0.z-50'));
    const hasFooter = Boolean(document.querySelector('footer'));

    if (!hasNav) {
      document.body.insertAdjacentHTML('afterbegin', KH_NAV);
    }

    if (!hasFooter) {
      document.body.insertAdjacentHTML('beforeend', KH_FOOTER);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSharedComponents);
  } else {
    injectSharedComponents();
  }
}());
