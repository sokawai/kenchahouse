import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark pt-16 pb-8 px-6">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-display uppercase tracking-widest mb-4">Kencha House</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs">
              A boutique play cafe for babies and toddlers.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-stone-600 dark:text-stone-300">
              <li><Link className="hover:text-primary transition-colors" href="/play">Our Play Space</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/parties">Private Events</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/studio">Studio Rental</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-stone-600 dark:text-stone-300">
              <li><a className="hover:text-primary transition-colors" href="mailto:kenchahouse@gmail.com">Contact Us</a></li>
              <li><Link className="hover:text-primary transition-colors" href="/faq">FAQ</Link></li>
              <li><a className="hover:text-primary transition-colors" href="https://form.jotform.com/260586396097270">Waiver</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">Visit</h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              <a
                href="https://maps.google.com/?q=222+Finch+Ave+W+Suite+105+North+York+ON+M2R+1M6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-primary transition-colors"
              >
                <span className="block">222 Finch Ave W Suite 105,</span>
                <span className="block mt-1">North York, ON M2R 1M6</span>
              </a>
              <span className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/kenchahouse/"
                  className="text-stone-600 dark:text-stone-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
                  </svg>
                </a>
                <a
                  href="mailto:kenchahouse@gmail.com"
                  className="text-stone-600 dark:text-stone-300 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-xl">mail</span>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="border-t border-stone-100 dark:border-stone-800 pt-12 text-center">
          <p className="text-[10px] text-stone-400 tracking-wider">&copy; 2026 Kencha House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
