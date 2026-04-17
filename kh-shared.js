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
        primary:            "#8DA082", // Sage green
        sage:               "#8DA082",
        terracotta:         "#C47C64",
        charcoal:           "#333333",
        "sage-light":       "#E9EDEA",
        "terracotta-light": "#F7EBE8",
        "background-light": "#FDFDFD",
        "background-dark":  "#1A1918",
        accent:             "#E9EDEA",
        sand:               "#F7EBE8",
      },
      fontFamily: {
        display: ["'Merriweather'", "serif"],
        sans:    ["'Nunito'", "sans-serif"],
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
<nav class="sticky top-0 z-50 bg-[#FDFDFD] border-b border-[#E9EDEA] shadow-sm">\
  <div class="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">\
    <a href="index.html" class="flex flex-col flex-shrink-0 leading-tight">\
      <span class="text-xl font-display text-[#333333]" style="font-family:\'Merriweather\',serif">Kencha House</span>\
      <span class="text-[9px] tracking-[0.3em] uppercase text-[#8DA082] font-bold font-sans mt-0.5">Private Baby Cafe</span>\
    </a>\
    <button id="mobile-menu-btn" class="md:hidden p-2 text-[#8DA082] hover:opacity-80 transition-opacity" onclick="toggleMobileMenu()" aria-label="Toggle menu" aria-expanded="false">\
      <span class="material-symbols-outlined text-3xl">menu</span>\
    </button>\
    <div class="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-10 px-6">\
      <a class="text-sm uppercase tracking-[0.18em] text-[#333333] hover:text-[#8DA082] transition-colors" href="play.html">Play</a>\
      <a class="text-sm uppercase tracking-[0.18em] text-[#333333] hover:text-[#8DA082] transition-colors" href="parties.html">Parties</a>\
      <a class="text-sm uppercase tracking-[0.18em] text-[#333333] hover:text-[#8DA082] transition-colors" href="studio.html">Studio</a>\
      <a class="text-sm uppercase tracking-[0.18em] text-[#333333] hover:text-[#8DA082] transition-colors" href="about.html">About</a>\
    </div>\
    <div class="hidden md:flex flex-shrink-0 items-center">\
      <button class="bg-[#8DA082] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity" onclick="window.open(\'https://kenchahouse.youcanbook.me/\', \'_blank\', \'noopener,noreferrer\')">\
        Book Now\
      </button>\
    </div>\
  </div>\
  <div id="mobile-menu" class="hidden md:hidden bg-[#FDFDFD] border-t border-[#E9EDEA]">\
    <div class="px-6 py-5 space-y-4">\
      <a class="block text-sm uppercase tracking-[0.15em] text-[#333333] hover:text-[#8DA082] transition-colors" href="play.html">Play</a>\
      <a class="block text-sm uppercase tracking-[0.15em] text-[#333333] hover:text-[#8DA082] transition-colors" href="parties.html">Parties</a>\
      <a class="block text-sm uppercase tracking-[0.15em] text-[#333333] hover:text-[#8DA082] transition-colors" href="studio.html">Studio</a>\
      <a class="block text-sm uppercase tracking-[0.15em] text-[#333333] hover:text-[#8DA082] transition-colors" href="about.html">About</a>\
      <button class="w-full bg-[#8DA082] text-white px-4 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity" onclick="window.open(\'https://kenchahouse.youcanbook.me/\', \'_blank\', \'noopener,noreferrer\')">\
        Book Now\
      </button>\
    </div>\
  </div>\
</nav>';

// --------------------------------------------------
// Shared Footer
// --------------------------------------------------
const KH_FOOTER = '\
<footer style="background:#FDFDFD;border-top:1px solid #E9EDEA;padding:5rem 1.5rem 2rem;">\
  <div class="max-w-screen-xl mx-auto">\
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">\
      <div>\
        <h4 style="font-family:\'Merriweather\',serif;font-size:1.3rem;color:#333333;margin-bottom:1rem;">Kencha House</h4>\
        <p style="color:#999;font-size:0.875rem;line-height:1.7;max-width:260px;">The door is unlocked. A boutique play experience focused on simplicity, beauty, and the wonder of early childhood.</p>\
        <div style="display:flex;gap:1rem;margin-top:1.5rem;">\
          <a href="https://www.instagram.com/kenchahouse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style="color:#8DA082;display:inline-flex;">\
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"/>\
            </svg>\
          </a>\
          <a href="mailto:kenchahouse@gmail.com" aria-label="Email" style="color:#8DA082;display:inline-flex;">\
            <span class="material-symbols-outlined" style="font-size:20px;line-height:1;">mail</span>\
          </a>\
        </div>\
      </div>\
      <div>\
        <h5 style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#999;font-weight:700;margin-bottom:1.5rem;">Navigate</h5>\
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">\
          <li><a href="index.html" style="color:#555;font-size:0.875rem;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">Home</a></li>\
          <li><a href="play.html" style="color:#555;font-size:0.875rem;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">Private Play</a></li>\
          <li><a href="parties.html" style="color:#555;font-size:0.875rem;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">Parties</a></li>\
          <li><a href="faq.html" style="color:#555;font-size:0.875rem;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">FAQ &amp; Guidelines</a></li>\
          <li><a href="https://form.jotform.com/260586396097270" style="color:#555;font-size:0.875rem;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">Waiver</a></li>\
        </ul>\
      </div>\
      <div>\
        <h5 style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#999;font-weight:700;margin-bottom:1.5rem;">Contact</h5>\
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">\
          <li style="display:flex;align-items:flex-start;gap:8px;color:#555;font-size:0.875rem;">\
            <span class="material-symbols-outlined" style="font-size:16px;color:#8DA082;margin-top:2px;flex-shrink:0;">location_on</span>\
            <a href="https://maps.google.com/?q=222+Finch+Ave+W+Suite+105+North+York+ON+M2R+1M6" target="_blank" rel="noopener noreferrer" style="color:#555;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">222 Finch Ave W Suite 105,<br/>North York, ON M2R 1M6</a>\
          </li>\
          <li style="display:flex;align-items:center;gap:8px;color:#555;font-size:0.875rem;">\
            <span class="material-symbols-outlined" style="font-size:16px;color:#8DA082;flex-shrink:0;">mail</span>\
            <a href="mailto:kenchahouse@gmail.com" style="color:#555;text-decoration:none;" class="hover:text-[#8DA082] transition-colors">kenchahouse@gmail.com</a>\
          </li>\
          <li style="display:flex;align-items:center;gap:8px;color:#555;font-size:0.875rem;">\
            <span class="material-symbols-outlined" style="font-size:16px;color:#8DA082;flex-shrink:0;">schedule</span>\
            By Appointment Only\
          </li>\
        </ul>\
      </div>\
    </div>\
    <div style="border-top:1px solid #E9EDEA;padding-top:2rem;text-align:center;">\
      <p style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#bbb;">&copy; 2026 Kencha House. All Rights Reserved.</p>\
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
